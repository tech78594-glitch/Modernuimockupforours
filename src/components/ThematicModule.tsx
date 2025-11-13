import React, { useState } from 'react';
import { ArrowLeft, Heart, Building2, Trees, Utensils, Palette, ChevronRight } from 'lucide-react';
import communityImage from 'figma:asset/e30bc5a54255e3d65ca9d13f2ca2e42afc70398d.png';

interface ThematicModuleProps {
  onBack: () => void;
}

export function ThematicModule({ onBack }: ThematicModuleProps) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const themes = [
    {
      id: 'health',
      title: 'Health',
      icon: <Heart className="w-10 h-10" />,
      description: 'Traditional medicine, healing practices, and wellness systems',
      count: 234,
      color: 'from-red-500/20 to-red-500/5',
      datasets: [
        'Traditional Akan Healing Practices',
        'Herbal Medicine in West Africa',
        'Community Health Systems',
        'Mental Wellness Traditions'
      ]
    },
    {
      id: 'architecture',
      title: 'Architecture',
      icon: <Building2 className="w-10 h-10" />,
      description: 'Indigenous building techniques and urban planning wisdom',
      count: 156,
      color: 'from-amber-500/20 to-amber-500/5',
      datasets: [
        'Earth Architecture Techniques',
        'Sacred Space Design',
        'Sustainable Building Methods',
        'Urban Settlement Patterns'
      ]
    },
    {
      id: 'ecology',
      title: 'Ecology',
      icon: <Trees className="w-10 h-10" />,
      description: 'Environmental stewardship, biodiversity, and conservation',
      count: 189,
      color: 'from-green-500/20 to-green-500/5',
      datasets: [
        'Forest Management Practices',
        'Water Conservation Systems',
        'Indigenous Climate Knowledge',
        'Biodiversity Protection'
      ]
    },
    {
      id: 'nutrition',
      title: 'Nutrition',
      icon: <Utensils className="w-10 h-10" />,
      description: 'Food systems, agricultural practices, and dietary traditions',
      count: 167,
      color: 'from-orange-500/20 to-orange-500/5',
      datasets: [
        'Indigenous Crop Varieties',
        'Fermentation Techniques',
        'Seasonal Food Calendars',
        'Nutritional Wisdom'
      ]
    },
    {
      id: 'culture',
      title: 'Culture',
      icon: <Palette className="w-10 h-10" />,
      description: 'Arts, languages, ceremonies, and cultural expressions',
      count: 298,
      color: 'from-purple-500/20 to-purple-500/5',
      datasets: [
        'Oral Literature Traditions',
        'Textile Arts & Symbolism',
        'Musical Heritage',
        'Ceremonial Practices'
      ]
    }
  ];

  const selectedThemeData = themes.find(t => t.id === selectedTheme);

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

      {/* Mudcloth Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c8ac1f' stroke-width='2'%3E%3Cline x1='0' y1='20' x2='100' y2='20'/%3E%3Cline x1='0' y1='40' x2='100' y2='40'/%3E%3Cline x1='0' y1='60' x2='100' y2='60'/%3E%3Cline x1='0' y1='80' x2='100' y2='80'/%3E%3Cline x1='20' y1='0' x2='20' y2='100'/%3E%3Cline x1='40' y1='0' x2='40' y2='100'/%3E%3Cline x1='60' y1='0' x2='60' y2='100'/%3E%3Cline x1='80' y1='0' x2='80' y2='100'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }} />

      {/* Header */}
      <header className="relative z-10 border-b border-[#c8ac1f]/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={() => selectedTheme ? setSelectedTheme(null) : onBack()}
            className="flex items-center gap-2 text-[#c8ac1f] hover:text-[#c8ac1f]/80 transition-colors"
            style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{selectedTheme ? 'Back to Themes' : 'Back to Home'}</span>
          </button>
          <h1 className="text-[#c8ac1f] text-2xl" style={{ fontFamily: 'Boska, serif' }}>OURS</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {!selectedTheme ? (
          <>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c8ac1f]/10 mb-6">
                <Trees className="w-8 h-8 text-[#c8ac1f]" />
              </div>
              <h2 className="text-white text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Boska, serif' }}>Thematic Organisation</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                Explore curated knowledge organised by themes reflecting African priorities and wisdom
              </p>
            </div>

            {/* Themes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className="text-left bg-[#042211]/30 backdrop-blur-sm rounded-3xl p-8 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/50 transition-all group cursor-pointer hover:scale-105"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${theme.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-[#c8ac1f]`}>
                    {theme.icon}
                  </div>
                  <h3 className="text-white text-2xl mb-3" style={{ fontFamily: 'Boska, serif' }}>
                    {theme.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                    {theme.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#c8ac1f]" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                      {theme.count} datasets
                    </span>
                    <ChevronRight className="w-5 h-5 text-[#c8ac1f] group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Selected Theme View */}
            <div className="mb-12">
              <div className="flex items-center gap-6 mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedThemeData?.color} flex items-center justify-center text-[#c8ac1f]`}>
                  {selectedThemeData?.icon}
                </div>
                <div>
                  <h2 className="text-white text-4xl md:text-5xl" style={{ fontFamily: 'Boska, serif' }}>
                    {selectedThemeData?.title}
                  </h2>
                  <p className="text-white/60 text-lg mt-2" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                    {selectedThemeData?.count} curated datasets
                  </p>
                </div>
              </div>
              <p className="text-white/70 text-lg" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                {selectedThemeData?.description}
              </p>
            </div>

            {/* Datasets List */}
            <div className="space-y-4">
              {selectedThemeData?.datasets.map((dataset, index) => (
                <div
                  key={index}
                  className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/40 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex-1">
                    <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'Boska, serif' }}>
                      {dataset}
                    </h3>
                    <div className="flex items-center gap-4 text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                      <span>{Math.floor(Math.random() * 50) + 10} stories</span>
                      <span>•</span>
                      <span>{Math.floor(Math.random() * 20) + 5} contributors</span>
                      <span>•</span>
                      <span className="text-[#c8ac1f]">Verified</span>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-[#c8ac1f] group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
