
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Overview of all applications and system metrics</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,247</p>
              <p className="text-sm text-gray-600">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">89</p>
              <p className="text-sm text-gray-600">Requires attention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Completed Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">34</p>
              <p className="text-sm text-gray-600">On track</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
