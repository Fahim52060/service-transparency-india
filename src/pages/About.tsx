
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  Smartphone,
  Globe,
  Award
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About: React.FC = () => {
  const { t } = useTranslation();

  const goals = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize government service delivery by providing transparent, efficient, and citizen-centric digital solutions that eliminate bureaucratic delays and enhance public trust.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Built with enterprise-grade security measures, ensuring your personal data and documents are protected with the highest standards of digital privacy and authentication.'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Reduce processing times from weeks to days through automated workflows, digital verification, and streamlined approval processes across all government departments.'
    },
    {
      icon: Users,
      title: 'Citizen First',
      description: 'Designed with citizens at the center, providing multilingual support, mobile-friendly interfaces, and 24/7 access to government services from anywhere.'
    }
  ];

  const services = [
    'Birth Certificate Registration & Updates',
    'Death Certificate Registration & Updates', 
    'Income Certificate Applications',
    'Caste Certificate Verification',
    'Domicile Certificate Processing',
    'Character Certificate Requests',
    'Marriage Certificate Services',
    'Educational Certificate Verification'
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: 'Digital First',
      description: 'Apply and track from your mobile device'
    },
    {
      icon: Globe,
      title: 'Multi-language',
      description: 'Available in English, Hindi, Tamil and more'
    },
    {
      icon: CheckCircle,
      title: 'Real-time Updates',
      description: 'SMS and email notifications at every step'
    },
    {
      icon: Award,
      title: 'QR Verification',
      description: 'Instant certificate verification with QR codes'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About ServiceTransparency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
          >
            Transforming government services through digital innovation, transparency, and citizen empowerment
          </motion.p>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Goals & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a transparent, efficient, and accessible government service ecosystem for every citizen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <goal.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {goal.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive government certificate services at your fingertips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ServiceTransparency?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of modern digital governance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply Online', desc: 'Fill out digital forms with required documents' },
              { step: '2', title: 'Real-time Tracking', desc: 'Monitor your application progress with live updates' },
              { step: '3', title: 'Officer Review', desc: 'Government officials review and process your application' },
              { step: '4', title: 'Digital Certificate', desc: 'Receive your certificate with QR verification' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Initiative */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                Government Digital Initiative
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ServiceTransparency is part of the government's broader digital transformation initiative 
                aimed at making public services more accessible, transparent, and efficient. This platform 
                represents our commitment to Digital India and citizen-centric governance.
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">2,45,678</div>
                  <div className="text-sm text-gray-600">Certificates Issued</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">96%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">3.5 days</div>
                  <div className="text-sm text-gray-600">Avg. Processing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
