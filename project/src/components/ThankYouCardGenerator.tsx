import React, { useState, useRef } from 'react';
import { Download, Share2, X, Sparkles, Heart } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ThankYouCardGeneratorProps {
  uploadedImage: string;
  onClose: () => void;
}

const ThankYouCardGenerator: React.FC<ThankYouCardGeneratorProps> = ({ uploadedImage, onClose }) => {
  const [donorName, setDonorName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const thankYouMessages = [
    "🌟 Thank you, {name}, for spreading kindness!",
    "🙏 {name}, you helped feed hungry hearts today!",
    "👏 {name}, your generosity inspires us all!",
    "💝 {name}, you're a true food rescue hero!",
    "✨ {name}, your compassion makes the world better!"
  ];

  const [selectedMessage, setSelectedMessage] = useState(0);

  const handleGenerateCard = () => {
    if (!donorName.trim()) {
      alert('Please enter your name to generate the thank-you card.');
      return;
    }
    setShowNameInput(false);
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true
      });
      
      const link = document.createElement('a');
      link.download = `bhojansetu-thankyou-${donorName.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Error generating card:', error);
      alert('Error generating card. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const shareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'BhojanSetu - Food Donation',
          text: `I just donated food through BhojanSetu! Join me in fighting food waste. #BhojanSetuHero #FoodRescue`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = `I just donated food through BhojanSetu! Join me in fighting food waste. #BhojanSetuHero #FoodRescue ${window.location.href}`;
      navigator.clipboard.writeText(text);
      alert('Share text copied to clipboard!');
    }
  };

  if (showNameInput) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <Sparkles className="mx-auto text-emerald-600 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
              Create Your Thank-You Card
            </h3>
            <p className="text-gray-600">
              Would you like your name to appear on a beautiful thank-you card?
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your name or nickname"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Message Style
              </label>
              <div className="space-y-2">
                {thankYouMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMessage(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedMessage === index
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {message.replace('{name}', donorName || 'Friend')}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Skip
              </button>
              <button
                onClick={handleGenerateCard}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
              >
                Generate Card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Merriweather, serif' }}>
            Your Thank-You Card
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Thank You Card */}
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-emerald-100 via-orange-100 to-blue-100 rounded-2xl p-8 mb-6 overflow-hidden"
          style={{ aspectRatio: '16/10' }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl">🌟</div>
            <div className="absolute top-8 right-8 text-4xl">🙏</div>
            <div className="absolute bottom-4 left-8 text-5xl">💚</div>
            <div className="absolute bottom-8 right-4 text-3xl">✨</div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/ChatGPT Image Jun 29, 2025, 07_14_28 PM.png" 
                  alt="BhojanSetu Logo" 
                  className="h-12 w-12 rounded-full shadow-md"
                />
                <div>
                  <h1 className="text-xl font-bold text-emerald-800" style={{ fontFamily: 'Merriweather, serif' }}>
                    BhojanSetu
                  </h1>
                  <p className="text-sm text-orange-600 font-medium">भोजनसेतु</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Food Rescue Hero</div>
                <div className="text-xs text-gray-500">{new Date().toLocaleDateString()}</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center">
              <div className="w-1/2 pr-6">
                <img
                  src={uploadedImage}
                  alt="Donated food"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                    {thankYouMessages[selectedMessage].replace('{name}', donorName)}
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                    <div className="text-sm text-gray-600 mb-2">Your Impact Today:</div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-emerald-600">20</div>
                        <div className="text-xs text-gray-600">People Fed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">5kg</div>
                        <div className="text-xs text-gray-600">CO₂ Saved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <div className="text-sm text-gray-600 mb-2">
                #BhojanSetuHero #FoodRescue #ZeroWaste
              </div>
              <div className="text-xs text-gray-500">
                Join the movement at bhojansetu.com
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={downloadCard}
            disabled={isGenerating}
            className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            <Download size={20} />
            <span>{isGenerating ? 'Generating...' : 'Download Card'}</span>
          </button>
          
          <button
            onClick={shareCard}
            className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
          >
            <Share2 size={20} />
            <span>Share</span>
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          Share your card on social media to inspire others to join the food rescue movement!
        </div>
      </div>
    </div>
  );
};

export default ThankYouCardGenerator;