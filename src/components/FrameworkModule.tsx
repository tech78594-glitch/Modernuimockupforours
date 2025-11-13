import React, { useState } from 'react';
import { ArrowLeft, FileText, BookOpen, Building, Download, Eye } from 'lucide-react';
import communityImage from 'figma:asset/e30bc5a54255e3d65ca9d13f2ca2e42afc70398d.png';

interface FrameworkModuleProps {
  onBack: () => void;
}

type TabType = 'frameworks' | 'policy' | 'briefs';

export function FrameworkModule({ onBack }: FrameworkModuleProps) {
  const [activeTab, setActiveTab] = useState<TabType>('frameworks');

  const documents = {
    frameworks: [
      {
        title: 'Traditional Medicine Integration Framework',
        description: 'Guidelines for integrating traditional healing practices into modern healthcare systems',
        pages: 45,
        date: 'October 2025',
        category: 'Health'
      },
      {
        title: 'Sustainable Architecture Design Framework',
        description: 'Framework for incorporating indigenous building techniques into contemporary architecture',
        pages: 38,
        date: 'September 2025',
        category: 'Architecture'
      },
      {
        title: 'Community Forest Management Framework',
        description: 'Collaborative approach to ecosystem preservation based on ancestral knowledge',
        pages: 52,
        date: 'November 2025',
        category: 'Ecology'
      }
    ],
    policy: [
      {
        title: 'Indigenous Knowledge Protection Policy',
        description: 'Policy recommendations for protecting and preserving traditional knowledge systems',
        pages: 28,
        date: 'October 2025',
        category: 'Culture'
      },
      {
        title: 'Urban Heritage Conservation Policy',
        description: 'Policy brief on maintaining cultural identity in urban development',
        pages: 22,
        date: 'September 2025',
        category: 'Architecture'
      },
      {
        title: 'Food Sovereignty Policy Brief',
        description: 'Recommendations for policy makers on indigenous food systems and nutrition',
        pages: 31,
        date: 'November 2025',
        category: 'Nutrition'
      }
    ],
    briefs: [
      {
        title: 'Climate Adaptation Design Brief',
        description: 'Design guidelines based on traditional environmental management practices',
        pages: 18,
        date: 'October 2025',
        category: 'Ecology'
      },
      {
        title: 'Community Health Center Design Brief',
        description: 'Design specifications integrating traditional and modern healing spaces',
        pages: 24,
        date: 'September 2025',
        category: 'Health'
      },
      {
        title: 'Cultural Center Architecture Brief',
        description: 'Design principles for spaces celebrating African heritage and community',
        pages: 20,
        date: 'November 2025',
        category: 'Culture'
      }
    ]
  };

  const getIcon = (tab: TabType) => {
    switch (tab) {
      case 'frameworks':
        return <FileText className="w-5 h-5" />;
      case 'policy':
        return <Building className="w-5 h-5" />;
      case 'briefs':
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#00131f] relative overflow-hidden">
      {/* Tree Image Background - Subtle */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden opacity-20">
        <img 
          src={communityImage} 
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00131f]/50 to-[#00131f]"></div>
      </div>

      {/* Blueprint Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c8ac1f' stroke-width='0.5'%3E%3Cpath d='M0 10h100M0 20h100M0 30h100M0 40h100M0 50h100M0 60h100M0 70h100M0 80h100M0 90h100M10 0v100M20 0v100M30 0v100M40 0v100M50 0v100M60 0v100M70 0v100M80 0v100M90 0v100'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }} />

      {/* Header */}
      <header className="relative z-10 border-b border-[#c8ac1f]/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#c8ac1f] hover:text-[#c8ac1f]/80 transition-colors"
            style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-[#c8ac1f] text-2xl" style={{ fontFamily: 'Boska, serif' }}>OURS</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c8ac1f]/10 mb-6">
            <FileText className="w-8 h-8 text-[#c8ac1f]" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Boska, serif' }}>
            Framework & Policy
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
            Transform authentic African knowledge into actionable frameworks and policy recommendations
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {(['frameworks', 'policy', 'briefs'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-[#c8ac1f] text-[#042211]'
                  : 'bg-[#042211]/40 text-white/70 hover:bg-[#042211]/60 border border-[#c8ac1f]/10'
              }`}
              style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}
            >
              {getIcon(tab)}
              <span className="capitalize">{tab}</span>
            </button>
          ))}
        </div>

        {/* Document Grid */}
        <div className="space-y-6">
          {documents[activeTab].map((doc, index) => (
            <div
              key={index}
              className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-[#c8ac1f]/10 flex items-center justify-center flex-shrink-0 text-[#c8ac1f]">
                      {getIcon(activeTab)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'Boska, serif' }}>
                        {doc.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed mb-3" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                        {doc.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-white/50" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                        <span>{doc.pages} pages</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                        <span>•</span>
                        <span className="px-3 py-1 rounded-full bg-[#c8ac1f]/10 text-[#c8ac1f]">
                          {doc.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-5 py-3 bg-[#042211]/50 text-white hover:bg-[#042211]/70 rounded-xl transition-all border border-[#c8ac1f]/20" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center gap-2 px-5 py-3 bg-[#c8ac1f] text-[#042211] hover:bg-[#c8ac1f]/90 rounded-xl transition-all shadow-lg" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Document Viewer Preview */}
        <div className="mt-12 bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#c8ac1f]/20">
          <h3 className="text-white text-xl mb-6" style={{ fontFamily: 'Boska, serif' }}>Document Preview</h3>
          <div className="bg-white/5 rounded-xl p-8 min-h-[400px] border border-[#c8ac1f]/5">
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-5/6"></div>
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-2/3"></div>
              <div className="mt-8 h-4 bg-white/10 rounded w-1/2"></div>
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-4/5"></div>
            </div>
            <p className="text-center text-white/40 mt-12" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              Select a document to view its full content
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
