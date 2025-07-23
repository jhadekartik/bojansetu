import React from 'react';
import { 
  Brain, 
  MapPin, 
  Users, 
  Heart, 
  BarChart3, 
  Truck, 
  Calendar, 
  Shield,
  Smartphone,
  Globe,
  Award,
  Camera
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Food Waste Tracker',
      description: 'Predicts excess food and alerts before spoilage using smart algorithms.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Real-Time Matching',
      description: 'Instantly connects food donors with nearby recipients using GPS routing.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Join thousands of donors, volunteers, and organizations making a difference.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Direct Donations',
      description: 'Donate food or money directly to verified NGOs and shelters.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: BarChart3,
      title: 'Impact Dashboard',
      description: 'Track your contributions, meals saved, and environmental impact.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Truck,
      title: 'Volunteer Delivery',
      description: 'Network of volunteers ready to pick up and deliver donated food.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Calendar,
      title: 'Scheduled Pickups',
      description: 'Set recurring donations for restaurants and regular food surplus.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Food Safety AI',
      description: 'Built-in AI analyzes food images to ensure safety and quality.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'SOS Alerts',
      description: 'Emergency food requests for travelers and those in immediate need.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Available worldwide with local language and organization support.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Gamified Experience',
      description: 'Earn badges, points, and recognition for your food rescue efforts.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Camera,
      title: 'Thank You Cards',
      description: 'Generate beautiful, shareable cards to celebrate your contributions.',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Powerful Features for Maximum Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology meets compassionate action to create the world's most effective food rescue platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;