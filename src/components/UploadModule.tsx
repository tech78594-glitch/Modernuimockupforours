import React, { useState } from 'react';
import { ArrowLeft, FileText, Mic, Video, Upload, Plus } from 'lucide-react';
import communityImage from 'figma:asset/e30bc5a54255e3d65ca9d13f2ca2e42afc70398d.png';

interface UploadModuleProps {
  onBack: () => void;
}

export function UploadModule({ onBack }: UploadModuleProps) {
  const [dragActive, setDragActive] = useState(false);

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

      {/* Adinkra Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c8ac1f' stroke-width='1'%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Cpath d='M40 20v40M20 40h40M28 28l24 24M52 28L28 52'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
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
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c8ac1f]/10 mb-6">
            <Upload className="w-8 h-8 text-[#c8ac1f]" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Boska, serif' }}>Upload Stories</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
            Share oral histories, research papers, or videos that preserve African knowledge and wisdom
          </p>
        </div>

        {/* Upload Card */}
        <div
          className={`bg-gradient-to-br from-[#042211]/40 to-[#042211]/20 backdrop-blur-sm rounded-3xl p-12 border-2 border-dashed transition-all ${
            dragActive ? 'border-[#c8ac1f] bg-[#c8ac1f]/5' : 'border-[#c8ac1f]/30'
          }`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => setDragActive(false)}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#c8ac1f]/10 mb-6">
              <Upload className="w-12 h-12 text-[#c8ac1f]" />
            </div>
            <h3 className="text-white text-2xl mb-3" style={{ fontFamily: 'Boska, serif' }}>
              Drop files here or click to browse
            </h3>
            <p className="text-white/60 mb-8 text-lg" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              Supported formats: Documents, Audio files, Video files
            </p>

            <button className="inline-flex items-center gap-3 px-10 py-4 bg-[#c8ac1f] text-[#042211] rounded-full hover:bg-[#c8ac1f]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              <Plus className="w-6 h-6" />
              <span className="text-lg">Add Story</span>
            </button>
          </div>
        </div>

        {/* Upload Types Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Text Upload */}
          <div className="bg-[#042211]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/40 transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-[#c8ac1f]/10 flex items-center justify-center mb-6 group-hover:bg-[#c8ac1f]/20 transition-all">
              <FileText className="w-8 h-8 text-[#c8ac1f]" />
            </div>
            <h4 className="text-white text-xl mb-3" style={{ fontFamily: 'Boska, serif' }}>Text Stories</h4>
            <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              Upload research papers, written histories, and documents
            </p>
          </div>

          {/* Audio Upload */}
          <div className="bg-[#042211]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/40 transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-[#c8ac1f]/10 flex items-center justify-center mb-6 group-hover:bg-[#c8ac1f]/20 transition-all">
              <Mic className="w-8 h-8 text-[#c8ac1f]" />
            </div>
            <h4 className="text-white text-xl mb-3" style={{ fontFamily: 'Boska, serif' }}>Oral Histories</h4>
            <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              Record or upload audio narratives and testimonies
            </p>
          </div>

          {/* Video Upload */}
          <div className="bg-[#042211]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#c8ac1f]/20 hover:border-[#c8ac1f]/40 transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-[#c8ac1f]/10 flex items-center justify-center mb-6 group-hover:bg-[#c8ac1f]/20 transition-all">
              <Video className="w-8 h-8 text-[#c8ac1f]" />
            </div>
            <h4 className="text-white text-xl mb-3" style={{ fontFamily: 'Boska, serif' }}>Video Content</h4>
            <p className="text-white/60" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
              Share visual stories and documentary footage
            </p>
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="mt-16">
          <h3 className="text-white text-2xl mb-6" style={{ fontFamily: 'Boska, serif' }}>Recent Uploads</h3>
          <div className="space-y-4">
            {[
              { name: 'Traditional Medicine Practices in Ghana', type: 'Document', status: 'Processing' },
              { name: 'Elder Kofi\'s Story on Agricultural Wisdom', type: 'Audio', status: 'Uploaded' },
              { name: 'Ancient Architecture Documentation', type: 'Video', status: 'Uploaded' }
            ].map((item, index) => (
              <div key={index} className="bg-[#042211]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#c8ac1f]/10 flex items-center justify-between hover:border-[#c8ac1f]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#c8ac1f]/10 flex items-center justify-center">
                    {item.type === 'Document' && <FileText className="w-7 h-7 text-[#c8ac1f]" />}
                    {item.type === 'Audio' && <Mic className="w-7 h-7 text-[#c8ac1f]" />}
                    {item.type === 'Video' && <Video className="w-7 h-7 text-[#c8ac1f]" />}
                  </div>
                  <div>
                    <p className="text-white text-lg" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>{item.name}</p>
                    <p className="text-white/50" style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>{item.type}</p>
                  </div>
                </div>
                <span className={`px-5 py-2 rounded-full ${
                  item.status === 'Processing' ? 'bg-[#c8ac1f]/20 text-[#c8ac1f]' : 'bg-[#042211]/50 text-white/70'
                }`} style={{ fontFamily: 'Apfel Grotesk, sans-serif' }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
