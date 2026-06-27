import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sprout, Store, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site, whatsapp } from "@/config/appConfig";
import heroBakery from "@/assets/hero-bakery.jpg";

// Free, hot-linkable bakery/food background loop. Swap with a self-hosted file later.
const HERO_VIDEO_SRC =
  "https://videos.pexels.com/video-files/4253687/4253687-uhd_2560_1440_25fps.mp4";

const EASE = [0.22, 1, 0.36, 1] as const;

// Per-line mask reveal for the headline
const HeadlineLine = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <span className="block overflow-hidden">
    <motion.span
      initial={{ y: "110%", filter: "blur(12px)", opacity: 0 }}
      animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className="block"
    >
      {children}
    </motion.span>
  </span>
);

const stats = [
  { icon: Sprout, label: "Now live in Idukki, Kerala" },
  { icon: Store, label: "Bakeries · Cake shops · Supermarkets" },
  { icon: Leaf, label: "Free for partners during pilot" },
];

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative -mt-24 min-h-[100svh] w-full overflow-hidden flex items-center"
    >
      {/* Background video */}
      <motion.div className="absolute inset-0 -z-10" style={{ opacity: videoOpacity }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroBakery}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ scale: contentScale, opacity: contentOpacity }}
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-28 lg:pt-44 lg:pb-36"
      >
        {/* Badge */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/15 backdrop-blur-md border border-background/25 text-background text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <Sprout className="w-4 h-4 text-primary" aria-hidden="true" />
          Saving food across India
        </motion.div>

        {/* Headline */}
        <h1 className="mt-7 font-display font-extrabold text-background text-[clamp(2.75rem,7vw,5.75rem)] leading-[1.02] tracking-[-0.035em] max-w-4xl">
          <HeadlineLine delay={0.6}>Save great food.</HeadlineLine>
          <HeadlineLine delay={0.78}>Spend less.</HeadlineLine>
          <HeadlineLine delay={0.96}>
            <span className="text-primary">Waste nothing.</span>
          </HeadlineLine>
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
          className="mt-6 text-lg lg:text-xl text-background/85 max-w-xl leading-relaxed"
        >
          {site.name} connects you with quality products from local bakeries, cake shops and
          supermarkets in Kerala — at great value, before they go unsold.
        </motion.p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 22, delay: 1.5 }}
            whileHover={{ y: -2 }}
          >
            <a href={whatsapp.channelUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full min-h-[52px] px-7 group">
                <MessageCircle className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                Find Nearby Boxes
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 22, delay: 1.6 }}
            whileHover={{ y: -2 }}
          >
            <Link to="/partners">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full min-h-[52px] px-7 border-background/40 bg-background/5 text-background backdrop-blur hover:bg-background/15 hover:text-background"
              >
                Become a Partner
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats strip (honest, pilot-stage) */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.8 }}
          className="mt-12 inline-flex flex-wrap items-stretch gap-2 p-2 rounded-2xl bg-background/10 border border-background/20 backdrop-blur-md"
        >
          {stats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-background/10 text-background"
            >
              <Icon className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium whitespace-nowrap">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
