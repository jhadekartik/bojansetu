import React, { useState } from 'react';
import { ArrowLeft, Camera, MapPin, Clock, Users, Upload, CheckCircle } from 'lucide-react';
import ThankYouCardGenerator from './ThankYouCardGenerator';

interface DonateFoodProps {
  onBack: () => void;
}

const DonateFood: React.FC<DonateFoodProps> = ({ onBack }) => {
  const [step, setStep] = useState<'form' | 'upload' | 'success'>('form');
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    location: '',
    pickupTime: '',
    description: '',
    contactInfo: ''
  });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showThankYouCard, setShowThankYouCard] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setStep('success');
        setShowThankYouCard(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('upload');
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="mx-auto text-emerald-600 mb-4" size={64} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                Thank You for Your Generosity! 🙏
              </h2>
              <p className="text-xl text-gray-600">
                Your food donation has been registered and nearby organizations have been notified.
              </p>
            </div>

            {uploadedImage && (
              <div className="mb-8">
                <img 
                  src={uploadedImage} 
                  alt="Donated food" 
                  className="max-w-md mx-auto rounded-xl shadow-lg"
                />
              </div>
            )}

            {showThankYouCard && uploadedImage && (
              <ThankYouCardGenerator 
                uploadedImage={uploadedImage}
                onClose={() => setShowThankYouCard(false)}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-emerald-50 rounded-xl p-6">
                <Users className="text-emerald-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-emerald-800 mb-2">People Notified</h3>
                <p className="text-2xl font-bold text-emerald-600">12</p>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6">
                <Clock className="text-orange-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-orange-800 mb-2">Estimated Pickup</h3>
                <p className="text-lg font-semibold text-orange-600">30 mins</p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <MapPin className="text-blue-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-blue-800 mb-2">Nearest NGO</h3>
                <p className="text-lg font-semibold text-blue-600">2.3 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'upload') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-blue-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setStep('form')}
            className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Form</span>
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <Camera className="mx-auto text-emerald-600 mb-4" size={48} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                Share Your Kindness
              </h2>
              <p className="text-gray-600">
                Upload a photo of your donated food to inspire others and create your thank-you card!
              </p>
            </div>

            <div className="border-2 border-dashed border-emerald-300 rounded-xl p-12 text-center hover:border-emerald-400 transition-colors">
              <Upload className="mx-auto text-emerald-500 mb-4" size={48} />
              <p className="text-lg font-medium text-gray-700 mb-2">
                Click to upload your photo
              </p>
              <p className="text-gray-500 mb-6">
                PNG, JPG up to 10MB
              </p>
              
              <label className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer hover:bg-emerald-700 transition-colors">
                <Camera size={20} />
                <span>Choose Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-blue-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
              Donate Food & Save Lives
            </h2>
            <p className="text-gray-600">
              Every meal you share can feed someone in need. Let's make a difference together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Food Type *
                </label>
                <select
                  required
                  value={formData.foodType}
                  onChange={(e) => setFormData({...formData, foodType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="">Select food type</option>
                  <option value="cooked-meals">Cooked Meals</option>
                  <option value="fresh-produce">Fresh Produce</option>
                  <option value="packaged-food">Packaged Food</option>
                  <option value="dairy">Dairy Products</option>
                  <option value="bakery">Bakery Items</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity (People it can feed) *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="e.g., 10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter your address"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Pickup Time *
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="datetime-local"
                  required
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Any additional details about the food..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Information *
              </label>
              <input
                type="tel"
                required
                value={formData.contactInfo}
                onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Your phone number"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Continue to Photo Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateFood;