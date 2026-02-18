import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopRestoration from './components/ScrollToTopRestoration';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BrandPage from './pages/BrandPage';
import { TermsPage, PrivacyPage } from './pages/LegalPages';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <ScrollToTopRestoration />
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
};

export default App;
