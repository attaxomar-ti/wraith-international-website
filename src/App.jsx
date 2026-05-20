import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Splash from './components/Splash';
import PageTransition from './components/PageTransition';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import RSS from './pages/RSS';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ITARCompliance from './pages/ITARCompliance';
import ExportControls from './pages/ExportControls';
import SmallArms from './pages/capabilities/SmallArms';
import FMS from './pages/capabilities/FMS';
import Tactical from './pages/capabilities/Tactical';
import Lodging from './pages/capabilities/Lodging';
import Training from './pages/capabilities/Training';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function Inner() {
  return (
    <>
      <ScrollToTop />
      <PageTransition />
      <ScrollProgress />
      <Routes>
        <Route path="/"                               element={<Layout><Home /></Layout>} />
        <Route path="/capabilities"                   element={<Layout><Capabilities /></Layout>} />
        <Route path="/capabilities/small-arms"        element={<Layout><SmallArms /></Layout>} />
        <Route path="/capabilities/fms"               element={<Layout><FMS /></Layout>} />
        <Route path="/capabilities/tactical"          element={<Layout><Tactical /></Layout>} />
        <Route path="/capabilities/lodging"           element={<Layout><Lodging /></Layout>} />
        <Route path="/capabilities/training"          element={<Layout><Training /></Layout>} />
        <Route path="/about"                          element={<Layout><About /></Layout>} />
        <Route path="/contact"                        element={<Layout><Contact /></Layout>} />
        <Route path="/news"                           element={<Layout><News /></Layout>} />
        <Route path="/privacy"                        element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms"                          element={<Layout><TermsOfUse /></Layout>} />
        <Route path="/itar"                           element={<Layout><ITARCompliance /></Layout>} />
        <Route path="/export-controls"                element={<Layout><ExportControls /></Layout>} />
        <Route path="/news/:slug"                     element={<Layout><NewsArticle /></Layout>} />
        <Route path="/rss"                            element={<RSS />} />
        <Route path="*"                               element={<Layout><Home /></Layout>} />
      </Routes>
    </>
  );
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('wraith_splash_seen')) setSplashDone(true);
  }, []);

  return (
    <BrowserRouter>
      <Cursor />
      {!splashDone && <Splash onComplete={() => setSplashDone(true)} />}
      <div style={{ opacity: splashDone ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <Inner />
      </div>
    </BrowserRouter>
  );
}
