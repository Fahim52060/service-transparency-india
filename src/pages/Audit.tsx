
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Audit: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Audit Trail</h1>
          <p className="text-gray-600 mt-2">Track all system activities and changes</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <p className="font-medium">Application APP12345678 approved</p>
                  <p className="text-sm text-gray-600">Officer: John Smith - 2 hours ago</p>
                </div>
                <Badge variant="default">Approved</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <p className="font-medium">New application submitted</p>
                  <p className="text-sm text-gray-600">Applicant: Jane Doe - 3 hours ago</p>
                </div>
                <Badge variant="secondary">Submitted</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <p className="font-medium">Document verification completed</p>
                  <p className="text-sm text-gray-600">Officer: Mike Johnson - 5 hours ago</p>
                </div>
                <Badge variant="outline">Verified</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Audit;
