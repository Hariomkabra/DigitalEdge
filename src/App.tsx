import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebDesignPage from './pages/services/WebDesignPage';
import SEOPage from './pages/services/SEOPage';
import PPCPage from './pages/services/PPCPage';
import SocialMediaPage from './pages/services/SocialMediaPage';
import EmailMarketingPage from './pages/services/EmailMarketingPage';
import AnalyticsPage from './pages/services/AnalyticsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/web-design" element={<WebDesignPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/ppc" element={<PPCPage />} />
        <Route path="/services/social-media" element={<SocialMediaPage />} />
        <Route path="/services/email" element={<EmailMarketingPage />} />
        <Route path="/services/analytics" element={<AnalyticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;