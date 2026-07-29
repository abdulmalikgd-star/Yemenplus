import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { VideoSection } from './components/VideoSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StartProjectModal } from './components/StartProjectModal';

export default function App() {
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenStartModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsStartModalOpen(true);
  };

  const handleDiscoverMore = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-600 selection:text-white font-['Cairo',sans-serif] overflow-x-hidden dir-rtl">
      {/* Header Navigation Bar */}
      <Navbar onOpenStartModal={() => handleOpenStartModal()} />

      {/* Hero Section */}
      <Hero 
        onOpenStartModal={() => handleOpenStartModal()}
        onDiscoverMore={handleDiscoverMore}
      />

      {/* Section 1: About The Company */}
      <AboutUs onDiscoverMore={handleDiscoverMore} />

      {/* Section 2: Our Projects */}
      <Portfolio />

      {/* Section 3: Our Services */}
      <Services onOpenStartModal={handleOpenStartModal} />

      {/* Section 4: Meet Our Team */}
      <Team onDiscoverMore={handleDiscoverMore} />

      {/* Section 5: Our Process / Methodology */}
      <VideoSection />

      {/* Section 6: Contact */}
      <Contact />

      {/* Section 7: Footer & Newsletter */}
      <Footer />

      {/* Interactive Project Kickoff Modal ("ابدأ الآن") */}
      <StartProjectModal
        isOpen={isStartModalOpen}
        onClose={() => setIsStartModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
