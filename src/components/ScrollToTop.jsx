import { useEffect } from 'react';

/** Keep the browser from restoring scroll mid-transition. RouteTransition scrolls. */
export default function ScrollToTop() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  }, []);

  return null;
}
