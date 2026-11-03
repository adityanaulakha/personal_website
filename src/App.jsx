import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import SiteNav from './components/SiteNav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { RouteTransition } from './components/PageTransition';
import Home from './pages/Home';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import NotFound from './pages/NotFound';
import usePageMeta from './hooks/usePageMeta';

export default function App() {
  const location = useLocation();
  usePageMeta();

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Analytics />
      <SpeedInsights />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-bg-elevated focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 sm:px-6">
        <SiteNav />
        <main id="main" className="flex-1 pt-8 pb-16">
          <RouteTransition routeKey={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </RouteTransition>
        </main>
        <Footer />
      </div>
    </>
  );
}
