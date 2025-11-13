import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { UploadModule } from './components/UploadModule';
import { VerificationModule } from './components/VerificationModule';
import { ThematicModule } from './components/ThematicModule';
import { FrameworkModule } from './components/FrameworkModule';
import { AccessModule } from './components/AccessModule';

type View = 'home' | 'upload' | 'verification' | 'thematic' | 'framework' | 'access';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderView = () => {
    switch (currentView) {
      case 'upload':
        return <UploadModule onBack={() => setCurrentView('home')} />;
      case 'verification':
        return <VerificationModule onBack={() => setCurrentView('home')} />;
      case 'thematic':
        return <ThematicModule onBack={() => setCurrentView('home')} />;
      case 'framework':
        return <FrameworkModule onBack={() => setCurrentView('home')} />;
      case 'access':
        return <AccessModule onBack={() => setCurrentView('home')} />;
      default:
        return <LandingPage onNavigate={(view) => setCurrentView(view as View)} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderView()}
    </div>
  );
}
