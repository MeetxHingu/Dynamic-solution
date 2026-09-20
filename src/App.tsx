import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConsolePreview } from './components/ConsolePreview';
import { SeoAuditTool } from './components/SeoAuditTool';
import { InteractiveImageShowcase } from './components/InteractiveImageShowcase';
import { ServicesSection } from './components/ServicesSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { SeoArticlesSection } from './components/SeoArticlesSection';
import { LocalSeoCoverage } from './components/LocalSeoCoverage';
import { ProcessSection } from './components/ProcessSection';
import { TechStackGrid } from './components/TechStackGrid';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactModal } from './components/ContactModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { Footer } from './components/Footer';
import { ServiceItem, PricingPlan } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<PricingPlan | null>(null);
  const [estimatorSummaryForContact, setEstimatorSummaryForContact] = useState<{
    platform: string;
    features: string[];
    timeline: string;
    estimatedCost: string;
    estimatedWeeks: string;
    squadRecommendation: string;
  } | null>(null);
  
  const [selectedServiceForEstimator, setSelectedServiceForEstimator] = useState<ServiceItem | null>(null);

  // Handlers
  const handleOpenContact = () => {
    setSelectedPlanForContact(null);
    setEstimatorSummaryForContact(null);
    setIsContactOpen(true);
  };

  const handleOpenEstimator = () => {
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForScope = (service: ServiceItem) => {
    setSelectedServiceForEstimator(service);
    handleOpenEstimator();
  };

  const handleProceedToInquiryFromEstimator = (summary: {
    platform: string;
    features: string[];
    timeline: string;
    estimatedCost: string;
    estimatedWeeks: string;
    squadRecommendation: string;
  }) => {
    setSelectedPlanForContact(null);
    setEstimatorSummaryForContact(summary);
    setIsContactOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setEstimatorSummaryForContact(null);
    setSelectedPlanForContact(plan);
    setIsContactOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        setIsAdminOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090b0e] text-[#e2e8f0] flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Navigation */}
      <Navbar
        onOpenEstimator={handleOpenEstimator}
        onOpenContact={handleOpenContact}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenEstimator={handleOpenEstimator}
          onOpenContact={handleOpenContact}
        />

        {/* 2. Interactive Console Preview (Verified Revenue & Invoice Ledger) */}
        <ConsolePreview
          onSelectService={(serviceId) => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenContact={handleOpenContact}
        />

        {/* 3. Interactive Free SEO & Health Audit Tool (High-Traffic Lead Magnet) */}
        <SeoAuditTool
          onOpenContact={handleOpenContact}
        />

        {/* 4. Interactive Image & Architecture Visualizer */}
        <InteractiveImageShowcase />

        {/* 5. Full-Cycle Capabilities & Services */}
        <ServicesSection
          onSelectServiceForScope={handleSelectServiceForScope}
        />

        {/* 6. Interactive Project Scope & Cost Estimator (₹ INR & $ USD) */}
        <ProjectEstimator
          initialService={selectedServiceForEstimator}
          onProceedToInquiry={handleProceedToInquiryFromEstimator}
        />

        {/* 7. Production Case Studies (Santram Hospital, WhatsApp Bot, Bug Fixes) */}
        <CaseStudiesSection
          onOpenContact={handleOpenContact}
        />

        {/* 8. In-Depth SEO Knowledge Hub & Client Guides */}
        <SeoArticlesSection
          onOpenContact={handleOpenContact}
        />

        {/* 9. Local & Global Geographic Coverage Hub */}
        <LocalSeoCoverage
          onOpenContact={handleOpenContact}
        />

        {/* 10. The 4-Stage Execution Sprint Process */}
        <ProcessSection
          onOpenContact={handleOpenContact}
        />

        {/* 11. Modern Tech Stack Showcase */}
        <TechStackGrid />

        {/* 12. Pricing & Transparent Engagement Models */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* 13. Founder Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 14. Frequently Asked Questions */}
        <FaqSection
          onOpenContact={handleOpenContact}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenEstimator={handleOpenEstimator}
        onOpenContact={handleOpenContact}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Contact & Sprint Scoping Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        selectedPlan={selectedPlanForContact}
        estimatorSummary={estimatorSummaryForContact}
      />

      {/* Founder Admin Panel & Leads Database Modal */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}
