/**
 * Analytics stub. Reads IDs from Vite env vars — nothing loads if unset.
 *
 * Configure by adding to `.env`:
 *   VITE_GA4_ID=G-XXXXXXX
 *   VITE_GTM_ID=GTM-XXXX
 *   VITE_CLARITY_ID=xxxxxxxxxx
 *   VITE_META_PIXEL_ID=1234567890
 *
 * Call `initAnalytics()` once from `main.tsx` after the app mounts.
 */

const env = import.meta.env;

const inject = (src: string, attrs: Record<string, string> = {}) => {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
};

const injectInline = (code: string) => {
  const s = document.createElement("script");
  s.text = code;
  document.head.appendChild(s);
};

export function initAnalytics() {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  const ga = env.VITE_GA4_ID as string | undefined;
  if (ga) {
    inject(`https://www.googletagmanager.com/gtag/js?id=${ga}`);
    injectInline(`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}',{anonymize_ip:true});`);
  }

  // Google Tag Manager
  const gtm = env.VITE_GTM_ID as string | undefined;
  if (gtm) {
    injectInline(`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`);
  }

  // Microsoft Clarity
  const clarity = env.VITE_CLARITY_ID as string | undefined;
  if (clarity) {
    injectInline(`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`);
  }

  // Meta Pixel
  const pixel = env.VITE_META_PIXEL_ID as string | undefined;
  if (pixel) {
    injectInline(`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixel}');fbq('track','PageView');`);
  }
}

/** Fire a lightweight event to GA4 / GTM if present. */
export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  w.dataLayer?.push({ event: name, ...params });
  w.gtag?.("event", name, params);
}