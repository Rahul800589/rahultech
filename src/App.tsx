


import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProvenTrackRecord from "./components/ProvenTrackRecord";
import TechnologyServices from "./components/TechnologyServices";
import TechnologyStack from "./components/TechnologyStack";
import FeaturedSuccessStories from "./components/FeaturedSuccessStories";
import ClientTestimonials from "./components/ClientTestimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import InnovationJourney from "./components/InnovationJourney";
import ContactSection from "./components/ContactSection";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import Solution from "./components/Solution";
import Industries from "./components/Industries";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import TeamMembers from "./components/TeamMembers";
import AadarshProfile from "./components/AadarshProfile";
import Profile from "./components/Profile";
import RajSinghShekhawatProfile from "./components/RajSinghShekhawatProfile";
import AiPage from "./components/AiPage";
import SecureBankingApp from "./components/SecureBankingApp";
import EnterpriseCloudMigration from "./components/EnterpriseCloudMigration";
import HealthcareAnalyticsPlatform from "./components/HealthcareAnalyticsPlatform";
import FinTechMobileBankingApp from "./components/FinTechMobileBankingApp";
import SaaSAnalyticsDashboard from "./components/SaaSAnalyticsDashboard";
import TravelBookingPlatform from "./components/TravelBookingPlatform";
import AIChatAssistant from "./components/AIChatAssistant";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

function App() {
  const [openModal, setOpenModal] = useState(false);

  // ✅ Auto open only once per refresh (check localStorage)
  useEffect(() => {
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      const timer = setTimeout(() => {
        setOpenModal(true);
        localStorage.setItem("modalShown", "true");
      }, 5000); // open after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  // ✅ Allow manual open from HeroSection button
  useEffect(() => {
    const handleOpenModal = () => setOpenModal(true);
    window.addEventListener("openContactModal", handleOpenModal);
    return () => window.removeEventListener("openContactModal", handleOpenModal);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProvenTrackRecord />
                  <TechnologyServices />
                  <TechnologyStack />
                  <FeaturedSuccessStories />
                  <ClientTestimonials />
                  <WhyChooseUs />
                  <InnovationJourney />
                  <ContactSection />
                  <CallToAction />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/team-members" element={<TeamMembers />} />
            <Route path="/team-members2" element={<AadarshProfile />} />
            <Route path="/team-members3" element={<Profile />} />
            <Route path="/team-members4" element={<RajSinghShekhawatProfile />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/services/mobile" element={<Solution />} />
            <Route path="/services/industries" element={<Industries />} />
            <Route path="/products" element={<Products />} />
            <Route path="/work/projects" element={<Projects />} />
            <Route path="/work/portfolio" element={<Portfolio />} />
            <Route path="/work/case-studies" element={<CaseStudies />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-page" element={<AiPage />} />
            <Route path="/secure-page" element={<SecureBankingApp />} />
            <Route path="/cloud-page" element={<EnterpriseCloudMigration />} />
            <Route path="/health-page" element={<HealthcareAnalyticsPlatform />} />
            <Route path="/fintech-page" element={<FinTechMobileBankingApp />} />
            <Route path="/saas-page" element={<SaaSAnalyticsDashboard />} />
            <Route path="/travel-page" element={<TravelBookingPlatform />} />
            <Route path="/aichat-page" element={<AIChatAssistant />} />
             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />

        {/* ✅ Modal only shows once per refresh */}
        <ContactModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </Router>
  );
}

export default App;
