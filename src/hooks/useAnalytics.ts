import { useEffect } from 'react';
import { saveUTMParams, trackScrollDepth, trackTimeOnPage } from '../utils/analytics';

export const useAnalytics = () => {
  useEffect(() => {
    saveUTMParams();

    let scrollTracked = {
      25: false,
      50: false,
      75: false,
      100: false,
    };

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent >= 25 && !scrollTracked[25]) {
        trackScrollDepth(25);
        scrollTracked[25] = true;
      }
      if (scrollPercent >= 50 && !scrollTracked[50]) {
        trackScrollDepth(50);
        scrollTracked[50] = true;
      }
      if (scrollPercent >= 75 && !scrollTracked[75]) {
        trackScrollDepth(75);
        scrollTracked[75] = true;
      }
      if (scrollPercent >= 95 && !scrollTracked[100]) {
        trackScrollDepth(100);
        scrollTracked[100] = true;
      }
    };

    const startTime = Date.now();
    const trackTime = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeOnPage);
    };

    window.addEventListener('scroll', handleScroll);
    const timeInterval = setInterval(trackTime, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
      trackTime();
    };
  }, []);
};
