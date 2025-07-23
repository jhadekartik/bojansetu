import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DonateFood from './components/DonateFood';
import NeedFood from './components/NeedFood';
import Gallery from './components/Gallery';
import ImpactDashboard from './components/ImpactDashboard';
import FoodRequestsList from './components/FoodRequestsList';
import Footer from './components/Footer';

export interface FoodRequest {
  id: string;
  organizationType: string;
  organizationName: string;
  contactPerson: string;
  phoneNumber: string;
  location: string;
  peopleCount: string;
  urgency: string;
  description: string;
  preferredTime: string;
  timestamp: Date;
}

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'donate' | 'need' | 'gallery' | 'impact' | 'requests'>('home');
  const [foodRequests, setFoodRequests] = useState<FoodRequest[]>([]);

  const addFoodRequest = (request: Omit<FoodRequest, 'id' | 'timestamp'>) => {
    const newRequest: FoodRequest = {
      ...request,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    setFoodRequests(prev => [newRequest, ...prev]);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'donate':
        return <DonateFood onBack={() => setCurrentView('home')} />;
      case 'need':
        return <NeedFood onBack={() => setCurrentView('home')} onSubmit={addFoodRequest} />;
      case 'gallery':
        return <Gallery onBack={() => setCurrentView('home')} onDonate={() => setCurrentView('donate')} onNeed={() => setCurrentView('need')} />;
      case 'impact':
        return <ImpactDashboard onBack={() => setCurrentView('home')} />;
      case 'requests':
        return <FoodRequestsList onBack={() => setCurrentView('home')} requests={foodRequests} />;
      default:
        return (
          <>
            <Hero onDonate={() => setCurrentView('donate')} onNeed={() => setCurrentView('need')} />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-blue-50">
      <Header 
        currentView={currentView} 
        onNavigate={setCurrentView}
        requestsCount={foodRequests.length}
      />
      {renderCurrentView()}
      <Footer />
    </div>
  );
}

export default App;