
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Baby, Heart, FileText, Edit3, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BirthDeathModuleProps {
  onBack: () => void;
}

const BirthDeathModule: React.FC<BirthDeathModuleProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<'birth' | 'death' | null>(null);

  const birthOptions = [
    {
      id: 'birth-registration',
      title: 'Birth Registration',
      description: 'Register a new birth and obtain official birth certificate',
      icon: Baby,
      processingTime: '3-5 days'
    },
    {
      id: 'birth-updation',
      title: 'Birth Certificate Updation',
      description: 'Update existing birth certificate details',
      icon: Edit3,
      processingTime: '2-3 days'
    }
  ];

  const deathOptions = [
    {
      id: 'death-registration',
      title: 'Death Registration',
      description: 'Register a death and obtain official death certificate',
      icon: Heart,
      processingTime: '2-4 days'
    },
    {
      id: 'death-updation',
      title: 'Death Certificate Updation', 
      description: 'Update existing death certificate details',
      icon: Edit3,
      processingTime: '2-3 days'
    }
  ];

  if (selectedCategory) {
    const options = selectedCategory === 'birth' ? birthOptions : deathOptions;
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory(null)}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {selectedCategory} Certificate Services
            </h1>
            <p className="text-gray-600 mt-2">
              Choose the service you need for {selectedCategory} certificate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <option.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-center text-xl">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">
                      {option.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Processing Time:</span>
                      <div className="text-sm font-medium text-green-600">
                        {option.processingTime}
                      </div>
                    </div>
                    <Button className="w-full" onClick={() => window.location.href = `/apply?type=${option.id}`}>
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Required Documents Info */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Birth Registration:</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Hospital birth certificate (if applicable)</li>
                      <li>• Parents' Aadhaar cards</li>
                      <li>• Parents' marriage certificate</li>
                      <li>• Address proof</li>
                      <li>• Affidavit (if required)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Death Registration:</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Medical certificate of cause of death</li>
                      <li>• Deceased's identity proof</li>
                      <li>• Informant's identity proof</li>
                      <li>• Cremation/burial certificate</li>
                      <li>• Address proof</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="outline" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Main
          </Button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Birth & Death Registration
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Register births and deaths, or update existing certificates with our streamlined digital process
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card 
              className="h-full hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setSelectedCategory('birth')}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Baby className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Birth Certificate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Register new births or update existing birth certificates. 
                  Essential for school admissions, passport applications, and legal documentation.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-500">Available Services:</div>
                  <div className="text-sm">
                    <div>• New Birth Registration</div>
                    <div>• Birth Certificate Updates</div>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-blue-600 transition-colors">
                  Choose Birth Services
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card 
              className="h-full hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setSelectedCategory('death')}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Heart className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Death Certificate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Register deaths or update existing death certificates. 
                  Required for insurance claims, property transfers, and legal proceedings.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-500">Available Services:</div>
                  <div className="text-sm">
                    <div>• New Death Registration</div>
                    <div>• Death Certificate Updates</div>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 transition-colors">
                  Choose Death Services
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Information Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">3-5 Days</div>
                  <div className="text-sm text-gray-600">Average Processing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Online Application Access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">SMS + Email</div>
                  <div className="text-sm text-gray-600">Real-time Updates</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BirthDeathModule;
