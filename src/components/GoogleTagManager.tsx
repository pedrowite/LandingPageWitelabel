import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export function GoogleTagManager() {
  useEffect(() => {
    // Initialize dataLayer for Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'AW-17736948122');

    // Initialize Meta Pixel
    if (!window.fbq) {
      const n: any = function() {
        if (n.callMethod) {
          n.callMethod.apply(n, arguments);
        } else {
          n.queue.push(arguments);
        }
      };
      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      window.fbq = n;
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
      
      window.fbq('init', '857753330036729');
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17736948122"></script>
      </Helmet>

      {/* Meta Pixel (noscript) */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=857753330036729&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}

declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    _fbq: any;
  }
}
