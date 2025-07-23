import React from 'react';
import { Heart, Home, Camera, BarChart3, Menu, X, Bell } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: 'home' | 'donate' | 'need' | 'gallery' | 'impact' | 'requests') => void;
  requestsCount: number;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, requestsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'impact', label: 'Impact', icon: BarChart3 },
    { id: 'requests', label: 'Food Requests', icon: Bell },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <img 
              src="/ChatGPT Image Jun 29, 2025, 07_14_28 PM.png" 
              alt="BhojanSetu Logo" 
              className="h-10 w-10 rounded-full shadow-md"
            />
            <div>
              <h1 className="text-xl font-bold text-emerald-800" style={{ fontFamily: 'Merriweather, serif' }}>
                BhojanSetu
              </h1>
              <p className="text-xs text-orange-600 font-medium">भोजनसेतु</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as any)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 relative ${
                    currentView === item.id
                      ? 'bg-emerald-100 text-emerald-800 shadow-sm'
                      : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                  {item.id === 'requests' && requestsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {requestsCount > 9 ? '9+' : requestsCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            {requestsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {requestsCount > 9 ? '9+' : requestsCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id as any);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      currentView === item.id
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.id === 'requests' && requestsCount > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {requestsCount > 9 ? '9+' : requestsCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;