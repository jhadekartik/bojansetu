import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/ChatGPT Image Jun 29, 2025, 07_14_28 PM.png" 
                alt="BhojanSetu Logo" 
                className="h-12 w-12 rounded-full shadow-md"
              />
              <div>
                <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Merriweather, serif' }}>
                  BhojanSetu
                </h1>
                <p className="text-orange-400 font-medium">भोजनसेतु</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting surplus food with hungry hearts. Join our mission to end food waste 
              and hunger through the power of community and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Donate Food</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Request Food</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Become Volunteer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Impact Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-gray-300">jhadekartik@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-gray-300">+91 94943 13054</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-gray-300">Adilabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2025 BhojanSetu. All rights reserved. Made with <Heart className="inline text-red-500" size={16} /> by 
              <span className="font-semibold text-emerald-400 ml-1">Jhade Kartik</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;