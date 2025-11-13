import React from 'react';
import { Upload, Shield, FolderTree, FileText, Database, ChevronDown } from 'lucide-react';
import communityImage from 'figma:asset/e30bc5a54255e3d65ca9d13f2ca2e42afc70398d.png';

interface LandingPageProps {
  onNavigate: (view: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const scrollToModules = () => {
    const modulesSection = document.getElementById('modules-section');
    modulesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const modules = [
    {
      id: 'upload',
      title: 'Upload',
      description: 'Share stories, oral histories, research papers, and videos',
      icon: <Upload className="w-8 h-8" />
    },
    {
      id: 'verification',
      title: 'Verification',
      description: 'Community and expert review for authenticity',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'thematic',
      title: 'Thematic Organisation',
      description: 'Stories organised by Health, Architecture, Ecology, Nutrition, Culture',
      icon: <FolderTree className="w-8 h-8" />
    },
    {
      id: 'framework',
      title: 'Framework & Policy',
      description: 'Transform datasets into actionable frameworks and policy briefs',
      icon: <FileText className="w-8 h-8" />
    },
    {
      id: 'access',
      title: 'Access & Solutions',
      description: 'Curated data for innovators, architects, and policymakers',
      icon: <Database className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#00131f]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={communityImage} 
            alt="Community gathering under tree" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00131f]/70 via-[#042211]/80 to-[#00131f]" />
        </div>

        {/* Subtle African Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23c8ac1f' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-[#c8ac1f] text-6xl md:text-7xl lg:text-8xl mb-6" style={{ fontFamily: 'Boska, serif' }}>
              OURS
            </h1>
            <div className="w-32 h-1 bg-[#c8ac1f] mx-auto mb-8"></div>
          </div>
          <p className="text-white text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
            A Community-Based African AI Platform
          </p>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
            Preserving authentic stories, research, and history through collective wisdom
          </p>
          
          <button
            onClick={scrollToModules}
            className="px-10 py-4 bg-[#c8ac1f] text-[#042211] rounded-full hover:bg-[#c8ac1f]/90 transition-all shadow-2xl hover:shadow-[#c8ac1f]/20 hover:scale-105"
            style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}
          >
            Explore Platform
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToModules}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c8ac1f] hover:text-[#c8ac1f]/80 transition-all animate-bounce cursor-pointer bg-transparent border-none"
          aria-label="Scroll to modules"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Modules Section */}
      <section id="modules-section" className="relative py-24 px-6">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c8ac1f' fill-opacity='1'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Boska, serif' }}>
              Platform Modules
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              Five core pillars for collecting, verifying, organising, transforming, and sharing African knowledge
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => onNavigate(module.id)}
                className="group text-left bg-gradient-to-br from-[#042211]/40 to-[#042211]/20 backdrop-blur-sm rounded-3xl p-8 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/50 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#c8ac1f]/10 flex items-center justify-center mb-6 text-[#c8ac1f] group-hover:bg-[#c8ac1f] group-hover:text-[#042211] transition-all">
                  {module.icon}
                </div>
                <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'Boska, serif' }}>
                  {module.title}
                </h3>
                <p className="text-white/60 leading-relaxed" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                  {module.description}
                </p>
              </button>
            ))}
          </div>

          {/* Tree Symbol - Central Element */}
          <div className="text-center mt-20">
            <div className="inline-block relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#c8ac1f]/30">
                <img 
                  src={communityImage} 
                  alt="Community Tree"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#00131f] via-transparent to-transparent pointer-events-none"></div>
            </div>
            <p className="text-[#c8ac1f]/60 mt-6 italic text-sm" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              "Knowledge is like a baobab tree; no one individual can embrace it."
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 px-6 border-t border-[#c8ac1f]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-8" style={{ fontFamily: 'Boska, serif' }}>
            Our Vision
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[#c8ac1f]/10 flex items-center justify-center mx-auto mb-4 text-[#c8ac1f] text-2xl" style={{ fontFamily: 'Boska, serif' }}>
                1
              </div>
              <h3 className="text-white text-lg mb-3" style={{ fontFamily: 'Boska, serif' }}>Preserve</h3>
              <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                Safeguard indigenous knowledge for future generations
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[#c8ac1f]/10 flex items-center justify-center mx-auto mb-4 text-[#c8ac1f] text-2xl" style={{ fontFamily: 'Boska, serif' }}>
                2
              </div>
              <h3 className="text-white text-lg mb-3" style={{ fontFamily: 'Boska, serif' }}>Validate</h3>
              <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                Ensure authenticity through community collaboration
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[#c8ac1f]/10 flex items-center justify-center mx-auto mb-4 text-[#c8ac1f] text-2xl" style={{ fontFamily: 'Boska, serif' }}>
                3
              </div>
              <h3 className="text-white text-lg mb-3" style={{ fontFamily: 'Boska, serif' }}>Transform</h3>
              <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                Convert wisdom into actionable solutions for today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[#c8ac1f]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[#c8ac1f] text-2xl mb-4" style={{ fontFamily: 'Boska, serif' }}>OURS</h3>
          <p className="text-white/50 text-sm" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
            Rooted in African authenticity. Built for the future.
          </p>
        </div>
      </footer>
    </div>
  );
}
