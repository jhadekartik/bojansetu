import React from 'react';
import { ArrowLeft, MapPin, Users, Clock, Phone, AlertCircle, Calendar } from 'lucide-react';
import { FoodRequest } from '../App';

interface FoodRequestsListProps {
  onBack: () => void;
  requests: FoodRequest[];
}

const FoodRequestsList: React.FC<FoodRequestsListProps> = ({ onBack, requests }) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'today':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'tomorrow':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'immediate':
        return '🚨';
      case 'today':
        return '⏰';
      case 'tomorrow':
        return '📅';
      default:
        return '📋';
    }
  };

  const formatTime = (timestamp: Date) => {
    return new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(timestamp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Food Requests Near You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help your community by responding to food requests from organizations and individuals in need.
          </p>
        </div>

        {requests.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-6">🍽️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
              No Food Requests Yet
            </h2>
            <p className="text-gray-600 mb-8">
              Be the first to make a difference! When organizations and individuals submit food requests, 
              they'll appear here for generous donors like you to help.
            </p>
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-800 mb-2">How it works:</h3>
              <ul className="text-left text-emerald-700 space-y-2">
                <li>• Organizations submit food requests through the app</li>
                <li>• Requests appear here with all necessary details</li>
                <li>• You can contact them directly to coordinate food donation</li>
                <li>• Make a real impact in your community!</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {requests.map((request) => (
              <div
                key={request.id}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{request.organizationName}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(request.urgency)}`}>
                        {getUrgencyIcon(request.urgency)} {request.urgency.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{request.organizationType.replace('-', ' ').toUpperCase()}</p>
                    <p className="text-gray-500 text-xs">Requested {formatTime(request.timestamp)}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Users size={16} className="text-orange-600" />
                    <span className="text-sm">
                      <strong>{request.peopleCount} people</strong> need food
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin size={16} className="text-emerald-600" />
                    <span className="text-sm">{request.location}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone size={16} className="text-blue-600" />
                    <span className="text-sm">{request.phoneNumber}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar size={16} className="text-purple-600" />
                    <span className="text-sm">Contact: {request.contactPerson}</span>
                  </div>

                  {request.preferredTime && (
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Clock size={16} className="text-indigo-600" />
                      <span className="text-sm">
                        Preferred: {new Date(request.preferredTime).toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}
                </div>

                {request.description && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Additional Details:</h4>
                    <p className="text-gray-600 text-sm bg-gray-50 rounded-lg p-3">
                      {request.description}
                    </p>
                  </div>
                )}

                <div className="flex space-x-3">
                  <a
                    href={`tel:${request.phoneNumber}`}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                  
                  <a
                    href={`sms:${request.phoneNumber}?body=Hi ${request.contactPerson}, I saw your food request on BhojanSetu and would like to help. When would be a good time to coordinate food donation?`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>💬</span>
                    <span>SMS</span>
                  </a>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Help make a difference in your community! 🤝
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {requests.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
              Thank You for Caring! 🙏
            </h2>
            <p className="text-lg opacity-90">
              Every call you make, every meal you share creates a ripple of kindness in our community.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodRequestsList;