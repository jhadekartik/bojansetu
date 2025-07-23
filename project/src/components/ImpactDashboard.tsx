import React from 'react';
import { ArrowLeft, TrendingUp, Users, Utensils, Leaf, Award, Calendar, MapPin, Heart } from 'lucide-react';

interface ImpactDashboardProps {
  onBack: () => void;
}

const ImpactDashboard: React.FC<ImpactDashboardProps> = ({ onBack }) => {
  const stats = [
    {
      icon: Utensils,
      label: 'Meals Rescued',
      value: '0',
      change: '+0%',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Users,
      label: 'People Fed',
      value: '0',
      change: '+0%',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Leaf,
      label: 'CO₂ Saved (kg)',
      value: '0',
      change: '+0%',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      label: 'Active Donors',
      value: '0',
      change: '+0%',
      color: 'from-red-500 to-red-600'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'donation',
      user: 'Community Member',
      action: 'donated meals',
      location: 'Adilabad',
      time: 'No activity yet',
      impact: 'Be the first to help'
    }
  ];

  const topContributors = [
    { name: 'Be the First', meals: 0, badge: 'Food Hero', avatar: '🏆' },
    { name: 'Join Community', meals: 0, badge: 'Community Champion', avatar: '🏪' },
    { name: 'Start Helping', meals: 0, badge: 'Delivery Star', avatar: '🚚' },
    { name: 'Make Impact', meals: 0, badge: 'Eco Warrior', avatar: '🌱' },
    { name: 'Spread Kindness', meals: 0, badge: 'Hope Bringer', avatar: '🤝' }
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
            Impact Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track the collective impact of our community in fighting food waste and hunger.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm font-medium">
                    <TrendingUp size={16} />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Recent Activities */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
              Recent Activities
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Heart className="text-white" size={16} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900">{activity.user}</span>
                      <span className="text-gray-600">{activity.action}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} />
                        <span>{activity.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-emerald-600 mt-1">
                      {activity.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
              Top Contributors
            </h2>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-xl">
                      {contributor.avatar}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">{contributor.name}</span>
                      <div className="flex items-center space-x-1">
                        <Award className="text-yellow-500" size={16} />
                        <span className="text-sm font-medium text-gray-600">#{index + 1}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{contributor.badge}</div>
                    <div className="text-sm font-medium text-emerald-600">
                      {contributor.meals} meals contributed
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Join the Movement
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Every meal you share creates a ripple of positive impact. Be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Start Donating
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;