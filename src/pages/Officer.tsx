
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Officer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Officer Portal</h1>
          <p className="text-gray-600 mt-2">Manage and process certificate applications</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">APP12345678</p>
                    <p className="text-sm text-gray-600">Income Certificate - John Doe</p>
                  </div>
                  <Button size="sm">Review</Button>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">APP12345679</p>
                    <p className="text-sm text-gray-600">Caste Certificate - Jane Smith</p>
                  </div>
                  <Button size="sm">Review</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Process Applications</Button>
              <Button className="w-full" variant="outline">Generate Reports</Button>
              <Button className="w-full" variant="outline">View Analytics</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Officer;
