
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { TruthSlider, LocationSlider } from './components/SlidingText';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load page components
const Home = lazy(() => import('./App'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Publications = lazy(() => import('./pages/Publications'));
const Team = lazy(() => import('./pages/Team'));
const Gallery = lazy(() => import('./pages/Gallery'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-lg text-blue-600">Loading...</p>
    </div>
  </div>
);

// Shared layout wrapping all pages with common header and footer
const Layout = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <TruthSlider />
    <LocationSlider />
    <Navigation />
    <Outlet />
    <Footer />
  </div>
);

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;

