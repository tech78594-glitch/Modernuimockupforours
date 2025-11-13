import React, { useState } from 'react';
import { ArrowLeft, Shield, Clock, CheckCircle, Users, Feather } from 'lucide-react';
import communityImage from 'figma:asset/e30bc5a54255e3d65ca9d13f2ca2e42afc70398d.png';

interface VerificationModuleProps {
  onBack: () => void;
}

type FilterType = 'all' | 'pending' | 'verified' | 'review';

export function VerificationModule({ onBack }: VerificationModuleProps) {
  const [filter, setFilter] = useState<FilterType>('all');

  const stories = [
    {
      title: 'Traditional Healing Practices of the Akan People',
      author: 'Dr. Akosua Mensah',
      status: 'verified',
      reviews: 12,
      expertBadge: true,
      date: 'Oct 15, 2025'
    },
    {
      title: 'Oral History: The Great Migration of 1952',
      author: 'Elder Emmanuel Osei',
      status: 'review',
      reviews: 3,
      expertBadge: false,
      date: 'Nov 8, 2025'
    },
    {
      title: 'Ancient Water Harvesting Systems',
      author: 'Prof. Amara Diallo',
      status: 'pending',
      reviews: 0,
      expertBadge: false,
      date: 'Nov 12, 2025'
    },
    {
      title: 'Indigenous Agricultural Calendar Research',
      author: 'Dr. Chidi Okonkwo',
      status: 'verified',
      reviews: 18,
      expertBadge: true,
      date: 'Oct 28, 2025'
    },
    {
      title: 'Mudcloth Symbolism and Cultural Meaning',
      author: 'Fatima Keita',
      status: 'review',
      reviews: 5,
      expertBadge: false,
      date: 'Nov 10, 2025'
    },
    {
      title: 'Community Forest Management Practices',
      author: 'Kwame Nkrumah Jr.',
      status: 'pending',
      reviews: 1,
      expertBadge: false,
      date: 'Nov 13, 2025'
    }
  ];

  const filteredStories = stories.filter(story => {
    if (filter === 'all') return true;
    return story.status === filter;
  });

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'verified':
        return {
          icon: <Shield className="w-5 h-5" />,
          label: 'Verified',
          color: 'text-[#c8ac1f] bg-[#c8ac1f]/10 border-[#c8ac1f]/30'
        };
      case 'review':
        return {
          icon: <Users className="w-5 h-5" />,
          label: 'In Review',
          color: 'text-blue-400 bg-blue-400/10 border-blue-400/30'
        };
      default:
        return {
          icon: <Feather className="w-5 h-5" />,
          label: 'Pending',
          color: 'text-white/50 bg-white/5 border-white/10'
        };
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

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15L30 0zm0 30l15 15-15 15-15-15 15-15z' fill='none' stroke='%23c8ac1f' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
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
            <Shield className="w-8 h-8 text-[#c8ac1f]" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Boska, serif' }}>Verification</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
            Community and expert review ensures authenticity and accuracy of shared knowledge
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-6 h-6 text-[#c8ac1f]" />
              <span className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>Verified</span>
            </div>
            <p className="text-4xl text-white" style={{ fontFamily: 'Boska, serif' }}>2</p>
          </div>

          <div className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>In Review</span>
            </div>
            <p className="text-4xl text-white" style={{ fontFamily: 'Boska, serif' }}>2</p>
          </div>

          <div className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-white/50" />
              <span className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>Pending</span>
            </div>
            <p className="text-4xl text-white" style={{ fontFamily: 'Boska, serif' }}>2</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {(['all', 'verified', 'review', 'pending'] as FilterType[]).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-8 py-3 rounded-full transition-all whitespace-nowrap ${
                filter === status
                  ? 'bg-[#c8ac1f] text-[#042211]'
                  : 'bg-[#042211]/40 text-white/70 hover:bg-[#042211]/60 border border-[#c8ac1f]/10'
              }`}
              style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="space-y-4">
          {filteredStories.map((story, index) => {
            const statusConfig = getStatusConfig(story.status);
            return (
              <div
                key={index}
                className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'Boska, serif' }}>
                      {story.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                      <span>{story.author}</span>
                      <span>•</span>
                      <span>{story.date}</span>
                      {story.expertBadge && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-[#c8ac1f]">
                            <CheckCircle className="w-4 h-4" />
                            Expert
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-center px-4">
                      <p className="text-white text-xl" style={{ fontFamily: 'Boska, serif' }}>{story.reviews}</p>
                      <p className="text-white/50 text-xs" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>Reviews</p>
                    </div>
                    <div className={`flex items-center gap-2 px-5 py-2 rounded-full border ${statusConfig.color}`} style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                      {statusConfig.icon}
                      <span>{statusConfig.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
