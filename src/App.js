import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ContactSection from './components/sections/ContactSection';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsAndConditions from './components/legal/TermsAndConditions';
import RefundPolicy from './components/legal/RefundPolicy';
import BookSessionSection from './components/sections/BookSessionSection';
import { useEffect } from 'react';
import PaymentSection from './components/sections/PaymentSection';
import WorkshopsAndAwareness from './components/sections/WorkshopsAndAwareness';
import SpecialClinics from './components/sections/SpecialClinics';
import InternshipAndTraining from './components/sections/InternshipAndTraining';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, [pathname]);

    return null;
  };


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/services/workshop-and-awareness" element={<WorkshopsAndAwareness />} />
          <Route path="/services/internship-and-training" element={<InternshipAndTraining />} />
          <Route path="/services/special-clinics" element={<SpecialClinics />} />
          <Route path="/book-session" element={<BookSessionSection />} />
          <Route path="/book-session/payments" element={<PaymentSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
