
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">ServiceTransparency</h2>
                <p className="text-sm text-gray-400">Government of India</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering citizens with transparent, efficient government services. 
              Apply for certificates, track progress, and stay informed with real-time updates.
            </p>
            <div className="flex space-x-4">
              <img src="/placeholder.svg" alt="Digital India" className="h-12 opacity-80" />
              <img src="/placeholder.svg" alt="Government of India" className="h-12 opacity-80" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/apply" className="text-gray-300 hover:text-white transition-colors">Apply for Certificate</a></li>
              <li><a href="/track" className="text-gray-300 hover:text-white transition-colors">Track Application</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Citizen Dashboard</a></li>
              <li><a href="/audit" className="text-gray-300 hover:text-white transition-colors">Public Audit</a></li>
              <li><a href="/heatmap" className="text-gray-300 hover:text-white transition-colors">Service Analytics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">support@servicetransparency.gov.in</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Department of Administrative Reforms<br />
                  Government of India, New Delhi
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ServiceTransparency. All rights reserved. Government of India.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
