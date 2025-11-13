import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Database, MapPin, Target, Sparkles } from 'lucide-react';
import communityImage from 'figma:asset/e30bc5a54255e3d65ca9d13f2ca2e42afc70398d.png';

interface AccessModuleProps {
  onBack: () => void;
}

export function AccessModule({ onBack }: AccessModuleProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const datasets = [
    {
      title: 'Traditional Healing Practices Database',
      description: 'Comprehensive collection of indigenous medicine and wellness practices across West Africa',
      country: 'Ghana',
      category: 'Health',
      records: 1247,
      contributors: 89,
      verified: true
    },
    {
      title: 'Sustainable Architecture Repository',
      description: 'Earth building techniques and climate-responsive design from various African regions',
      country: 'Nigeria',
      category: 'Architecture',
      records: 856,
      contributors: 62,
      verified: true
    },
    {
      title: 'Indigenous Food Systems Collection',
      description: 'Agricultural practices, crop varieties, and nutritional knowledge systems',
      country: 'Kenya',
      category: 'Nutrition',
      records: 1532,
      contributors: 124,
      verified: true
    },
    {
      title: 'Community Forest Management',
      description: 'Traditional ecological knowledge and biodiversity conservation practices',
      country: 'Ethiopia',
      category: 'Ecology',
      records: 943,
      contributors: 71,
      verified: true
    },
    {
      title: 'Oral Literature Archive',
      description: 'Stories, proverbs, and oral histories preserving cultural heritage',
      country: 'Senegal',
      category: 'Culture',
      records: 2156,
      contributors: 187,
      verified: true
    },
    {
      title: 'Water Harvesting Systems',
      description: 'Traditional water management and conservation techniques',
      country: 'Tanzania',
      category: 'Ecology',
      records: 678,
      contributors: 54,
      verified: true
    }
  ];

  const countries = ['all', 'Ghana', 'Nigeria', 'Kenya', 'Ethiopia', 'Senegal', 'Tanzania'];
  const categories = ['all', 'Health', 'Architecture', 'Nutrition', 'Ecology', 'Culture'];

  const filteredDatasets = datasets.filter(dataset => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || dataset.country === selectedCountry;
    const matchesCategory = selectedCategory === 'all' || dataset.category === selectedCategory;
    return matchesSearch && matchesCountry && matchesCategory;
  });

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

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c8ac1f' stroke-width='1'%3E%3Cpath d='M0 25h50M25 0v50'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px'
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
            <Database className="w-8 h-8 text-[#c8ac1f]" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Boska, serif' }}>
            Access & Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
            Curated datasets for innovators, architects, and policymakers to design culturally rooted solutions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search datasets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#042211]/30 backdrop-blur-sm text-white placeholder:text-white/40 pl-14 pr-6 py-4 rounded-full border border-[#c8ac1f]/20 focus:border-[#c8ac1f]/40 focus:outline-none transition-all"
              style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#c8ac1f]" />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-[#042211]/40 text-white px-5 py-3 rounded-full border border-[#c8ac1f]/20 focus:border-[#c8ac1f]/40 focus:outline-none cursor-pointer"
                style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}
              >
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country === 'all' ? 'All Countries' : country}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#c8ac1f]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#042211]/40 text-white px-5 py-3 rounded-full border border-[#c8ac1f]/20 focus:border-[#c8ac1f]/40 focus:outline-none cursor-pointer"
                style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20">
            <Database className="w-6 h-6 text-[#c8ac1f] mb-2" />
            <p className="text-3xl text-white mb-1" style={{ fontFamily: 'Boska, serif' }}>6</p>
            <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>Total Datasets</p>
          </div>
          <div className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20">
            <Target className="w-6 h-6 text-[#c8ac1f] mb-2" />
            <p className="text-3xl text-white mb-1" style={{ fontFamily: 'Boska, serif' }}>7,412</p>
            <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>Total Records</p>
          </div>
          <div className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20">
            <Sparkles className="w-6 h-6 text-[#c8ac1f] mb-2" />
            <p className="text-3xl text-white mb-1" style={{ fontFamily: 'Boska, serif' }}>587</p>
            <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>Contributors</p>
          </div>
          <div className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20">
            <MapPin className="w-6 h-6 text-[#c8ac1f] mb-2" />
            <p className="text-3xl text-white mb-1" style={{ fontFamily: 'Boska, serif' }}>6</p>
            <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>Countries</p>
          </div>
        </div>

        {/* Datasets Grid */}
        <div className="space-y-6">
          {filteredDatasets.map((dataset, index) => (
            <div
              key={index}
              className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-[#c8ac1f]/10 flex items-center justify-center flex-shrink-0">
                      <Database className="w-7 h-7 text-[#c8ac1f]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl mb-2" style={{ fontFamily: 'Boska, serif' }}>
                        {dataset.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                        {dataset.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                    <span className="flex items-center gap-1 text-white/60">
                      <MapPin className="w-4 h-4" />
                      {dataset.country}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#c8ac1f]/10 text-[#c8ac1f]">
                      {dataset.category}
                    </span>
                    <span className="text-white/60">{dataset.records.toLocaleString()} records</span>
                    <span className="text-white/60">{dataset.contributors} contributors</span>
                    {dataset.verified && (
                      <span className="text-[#c8ac1f]">✓ Verified</span>
                    )}
                  </div>
                </div>

                <div className="flex lg:flex-col gap-3">
                  <button className="px-8 py-3 bg-[#c8ac1f] text-[#042211] rounded-xl hover:bg-[#c8ac1f]/90 transition-all shadow-lg hover:shadow-xl whitespace-nowrap" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                    Use this dataset
                  </button>
                  <button className="px-8 py-3 bg-[#042211]/50 text-white rounded-xl hover:bg-[#042211]/70 transition-all border border-[#c8ac1f]/20 whitespace-nowrap" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDatasets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/40 text-lg" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              No datasets found matching your criteria
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
