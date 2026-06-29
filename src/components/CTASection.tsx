import { Button } from "@/components/ui/button";
import { MessageCircle, Store, Sprout, Leaf, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { waUrl } from "@/lib/whatsapp";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const decor = [
    { Icon: Sprout, top: "10%", left: "8%", depth: 30 },
    { Icon: Leaf, top: "20%", right: "10%", depth: 45 },
    { Icon: ShoppingBag, bottom: "15%", left: "12%", depth: 20 },
    { Icon: Store, bottom: "18%", right: "8%", depth: 38 },
  ];

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-card overflow-hidden">
      {decor.map(({ Icon, depth, ...pos }, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="absolute text-primary/15 pointer-events-none"
          style={pos as React.CSSProperties}
          animate={{ x: mouse.x * depth, y: mouse.y * depth }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        >
          <Icon className="w-16 h-16 lg:w-20 lg:h-20" />
        </motion.div>
      ))}
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <Reveal preset="scale" className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
          
          <div className="relative bg-background rounded-3xl p-12 lg:p-16 shadow-card">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Ready to enjoy more and waste less?
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                Join the WhatsApp channel to discover quality products from local bakeries, cake shops and supermarkets near you. Free to join, no app needed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href={waUrl("cta-block", { campaign: "homepage_cta" })} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="xl" className="group min-h-[48px] w-full sm:w-auto">
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    Get Started
                  </Button>
                </a>
                <Link to="/partners">
                  <Button variant="whatsapp-outline" size="lg" className="min-h-[48px] w-full sm:w-auto">
                    <Store className="w-5 h-5" aria-hidden="true" />
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
