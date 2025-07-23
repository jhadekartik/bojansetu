import React from 'react';
import { ArrowLeft, Heart, Users, MapPin } from 'lucide-react';

interface GalleryProps {
  onBack: () => void;
  onDonate: () => void;
  onNeed: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onBack, onDonate, onNeed }) => {
  const galleryItems = [
    {
      id: 1,
      image: '/src/assets/village women with rice cheta with cute looks.webp',
      title: 'Village Women Sharing Rice',
      description: 'Beautiful moment of community sharing in rural India',
      location: 'Rural Maharashtra',
      people: '25 families',
      donor: 'Local Community Kitchen'
    },
    {
      id: 2,
      image: '/src/assets/A painting with a white background showing school .webp',
      title: 'School Children Meal Program',
      description: 'Nutritious meals reaching school children',
      location: 'Delhi Schools',
      people: '200 children',
      donor: 'Corporate Cafeteria'
    },
    {
      id: 3,
      image: '/src/assets/On a sunny morning in the village of vegetables.webp',
      title: 'Fresh Vegetable Distribution',
      description: 'Farm-fresh vegetables shared with community',
      location: 'Punjab Village',
      people: '50 families',
      donor: 'Local Farmers'
    },
    {
      id: 4,
      image: '/src/assets/A photo of a group of people giving food to a fami.webp',
      title: 'Community Food Distribution',
      description: 'Volunteers distributing meals to families in need',
      location: 'Urban Community Center',
      people: '100 people',
      donor: 'NGO Partnership'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Stories of Hope & Kindness
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the beautiful moments when surplus food transforms into smiles, 
            nourishment, and hope for communities across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} className="text-emerald-600" />
                    <span className="text-sm font-medium">{item.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={16} className="text-orange-600" />
                    <span className="text-sm font-medium">{item.people}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Heart size={16} className="text-red-500" />
                    <span className="text-sm font-medium">{item.donor}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Impact Story</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Heart
                          key={i}
                          size={12}
                          className="text-red-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
              Be Part of These Beautiful Stories
            </h2>
            <p className="text-gray-600 mb-6">
              Every donation creates a ripple of kindness. Share your surplus food and become part of these inspiring moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onDonate}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                Donate Food Now
              </button>
              <button 
                onClick={onNeed}
                className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                Request Food Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;