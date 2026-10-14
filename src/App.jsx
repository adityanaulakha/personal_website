import { Route, Routes, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import SiteNav from './components/SiteNav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className="pb-16">
        <div className="mx-auto max-w-2xl px-4 pt-8">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-[60px] bg-gradient-to-t from-background to-transparent"
      />
      <Footer />
    </div>
  );
}
