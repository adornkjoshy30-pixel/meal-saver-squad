import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, type ElementType } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Preset = "fade-up" | "blur" | "scale" | "fade";

const buildVariants = (preset: Preset, reduced: boolean): Variants => {
  if (reduced) {
    return { hidden: { opacity: 1 }, show: { opacity: 1 } };
  }
  switch (preset) {
    case "blur":
      return {
        hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.94 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
      };
    case "fade":
      return {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
      };
    case "fade-up":
    default:
      return {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      };
  }
};

interface RevealProps {
  children: ReactNode;
  preset?: Preset;
  delay?: number;
  className?: string;
  as?: ElementType;
  amount?: number;
  once?: boolean;
}

export const Reveal = ({
  children,
  preset = "fade-up",
  delay = 0,
  className,
  as = "div",
  amount = 0.25,
  once = true,
}: RevealProps) => {
  const reduced = useReducedMotion() ?? false;
  const variants = buildVariants(preset, reduced);
  const MotionTag = motion(as as any);
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: number;
  delay?: number;
  amount?: number;
}

export const Stagger = ({
  children,
  className,
  as = "div",
  stagger = 0.08,
  delay = 0.05,
  amount = 0.2,
}: StaggerProps) => {
  const reduced = useReducedMotion() ?? false;
  const MotionTag = motion(as as any);
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: reduced
            ? {}
            : { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  preset?: Preset;
}

export const StaggerItem = ({
  children,
  className,
  as = "div",
  preset = "fade-up",
}: StaggerItemProps) => {
  const reduced = useReducedMotion() ?? false;
  const variants = buildVariants(preset, reduced);
  const MotionTag = motion(as as any);
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
};

export default Reveal;