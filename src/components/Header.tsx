import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { site } from "@/config/appConfig";

const navLinks = [
  { label: "Browse Boxes", to: "/how-it-works" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Impact", to: "/impact" },
  { label: "Partners", to: "/partners" },
  { label: "About", to: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const padY = useTransform(scrollY, [0, 120], [14, 10]);
  const bgAlpha = useTransform(scrollY, [0, 120], [0.65, 0.95]);
  const blurPx = useTransform(scrollY, [0, 120], [18, 24]);
  const bg = useTransform(bgAlpha, (a) => `hsl(var(--background) / ${a})`);
  const backdrop = useTransform(blurPx, (b) => `blur(${b}px) saturate(160%)`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-6 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ backgroundColor: bg, backdropFilter: backdrop, WebkitBackdropFilter: backdrop, paddingTop: padY, paddingBottom: padY }}
        className={`pointer-events-auto mx-auto max-w-[1400px] rounded-full border border-foreground/10 px-4 sm:px-6 lg:px-8 transition-shadow duration-500 ${
          scrolled ? "shadow-[0_18px_48px_-20px_rgba(13,92,63,0.28)]" : "shadow-[0_8px_24px_-16px_rgba(13,92,63,0.18)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt={`${site.name} logo`} className="h-8 md:h-9 w-auto object-contain" />
            <span className="font-display font-extrabold text-lg md:text-xl text-foreground tracking-tight">{site.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`group relative px-3 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] origin-center scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground px-3 py-2 rounded-full transition-colors"
            >
              Log In
            </Link>
            <Link to="/partners">
              <Button size="sm" className="rounded-full px-5">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-foreground hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Nav drawer */}
      {mobileOpen && (
        <motion.nav
          id="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-auto mx-auto max-w-[1400px] mt-3 rounded-3xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-card px-4 py-4 space-y-1 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-foreground/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" className="w-full rounded-full">Log In</Button>
            </Link>
            <Link to="/partners" onClick={() => setMobileOpen(false)}>
              <Button className="w-full rounded-full">Get Started</Button>
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
