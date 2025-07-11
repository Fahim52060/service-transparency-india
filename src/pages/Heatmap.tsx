
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Heatmap: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Service Heatmap</h1>
          <p className="text-gray-600 mt-2">Visual representation of service demand and performance</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Volume by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Heatmap visualization will be displayed here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Processing Time Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Income Certificate</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">3.2 days avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Caste Certificate</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">5.8 days avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Domicile Certificate</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">2.1 days avg</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Heatmap;
