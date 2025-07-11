
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, QrCode, Bell, Clock, User, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProgressTimeline from '@/components/ProgressTimeline';
import StatusBadge from '@/components/StatusBadge';
import { toast } from '@/hooks/use-toast';

interface ApplicationData {
  id: string;
  type: string;
  applicantName: string;
  submissionDate: string;
  status: 'submitted' | 'inProgress' | 'completed' | 'delayed' | 'rejected';
  currentStep: number;
  estimatedCompletion: string;
  currentOfficer: {
    name: string;
    designation: string;
    contact: string;
    email: string;
  };
}

const Track: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);

  // Mock data for demonstration
  const mockApplicationData: ApplicationData = {
    id: 'APP12345678',
    type: 'Income Certificate',
    applicantName: 'Priya Sharma',
    submissionDate: '2024-01-15',
    status: 'inProgress',
    currentStep: 3,
    estimatedCompletion: '2024-01-20',
    currentOfficer: {
      name: 'Rajesh Kumar',
      designation: 'Village Revenue Officer',
      contact: '+91-9876543210',
      email: 'rajesh.kumar@gov.in'
    }
  };

  const timelineSteps = [
    {
      id: 1,
      title: 'Application Submitted',
      description: 'Your application has been successfully submitted and assigned a unique ID.',
      status: 'completed' as const,
      timestamp: '2024-01-15 10:30 AM',
      officer: 'System Generated'
    },
    {
      id: 2,
      title: 'Document Verification',
      description: 'Village officer is verifying the submitted documents for completeness.',
      status: 'completed' as const,
      timestamp: '2024-01-16 02:15 PM',
      officer: 'Rajesh Kumar (VRO)'
    },
    {
      id: 3,
      title: 'MRO Review',
      description: 'Application is under review by Mandal Revenue Officer for approval.',
      status: 'current' as const,
      timestamp: undefined,
      officer: 'Sanjay Reddy (MRO)'
    },
    {
      id: 4,
      title: 'Tahsildar Approval',
      description: 'Pending final approval from Tahsildar office.',
      status: 'pending' as const,
      timestamp: undefined,
      officer: 'Pending Assignment'
    },
    {
      id: 5,
      title: 'Certificate Generation',
      description: 'Digital certificate will be generated with official signatures.',
      status: 'pending' as const,
      timestamp: undefined,
      officer: 'System Process'
    },
    {
      id: 6,
      title: 'Quality Check',
      description: 'Final quality verification and digital signature application.',
      status: 'pending' as const,
      timestamp: undefined,
      officer: 'QC Officer'
    },
    {
      id: 7,
      title: 'Certificate Delivered',
      description: 'Certificate will be delivered via email and available for download.',
      status: 'pending' as const,
      timestamp: undefined,
      officer: 'System Delivery'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'SMS',
      message: 'Your application APP12345678 has been submitted successfully.',
      timestamp: '2024-01-15 10:30 AM',
      status: 'delivered'
    },
    {
      id: 2,
      type: 'Email',
      message: 'Document verification completed for your Income Certificate application.',
      timestamp: '2024-01-16 02:15 PM',
      status: 'delivered'
    },
    {
      id: 3,
      type: 'WhatsApp',
      message: 'Your application is now under MRO review. Expected completion: 2 days.',
      timestamp: '2024-01-17 09:00 AM',
      status: 'delivered'
    }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: 'Search Required',
        description: 'Please enter an application ID to track.',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (searchQuery.toUpperCase().includes('APP')) {
      setApplicationData(mockApplicationData);
      toast({
        title: 'Application Found',
        description: 'Application details loaded successfully.',
      });
    } else {
      toast({
        title: 'Application Not Found',
        description: 'Please check your application ID and try again.',
        variant: 'destructive'
      });
    }
    
    setIsLoading(false);
  };

  const handleQRScan = () => {
    toast({
      title: 'QR Scanner',
      description: 'QR code scanning feature will be available soon.',
    });
  };

  const resendNotification = (type: string) => {
    toast({
      title: 'Notification Sent',
      description: `${type} notification has been resent to your registered contact.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Track Your Application</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter Application ID (e.g., APP12345678)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-center text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSearch} disabled={isLoading} className="flex items-center gap-2">
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                  {isLoading ? 'Searching...' : 'Track'}
                </Button>
                <Button variant="outline" onClick={handleQRScan} className="flex items-center gap-2">
                  <QrCode className="h-4 w-4" />
                  Scan QR
                </Button>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-3">
              You can find your Application ID in the confirmation receipt or SMS
            </p>
          </CardContent>
        </Card>

        {/* Application Details */}
        {applicationData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Status Overview */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{applicationData.type}</CardTitle>
                    <p className="text-gray-600">Application ID: {applicationData.id}</p>
                  </div>
                  <StatusBadge status={applicationData.status} size="lg" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Applicant Details</h3>
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        {applicationData.applicantName}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        Submitted: {new Date(applicationData.submissionDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Current Officer</h3>
                    <div className="space-y-1 text-sm">
                      <p className="font-medium">{applicationData.currentOfficer.name}</p>
                      <p className="text-gray-600">{applicationData.currentOfficer.designation}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-gray-500" />
                        <span className="text-xs">{applicationData.currentOfficer.contact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Timeline</h3>
                    <div className="space-y-1 text-sm">
                      <p>Step {applicationData.currentStep} of 7</p>
                      <p className="text-gray-600">
                        Estimated completion: {new Date(applicationData.estimatedCompletion).toLocaleDateString()}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(applicationData.currentStep / 7) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Application Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressTimeline steps={timelineSteps} />
              </CardContent>
            </Card>

            {/* Notifications History */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Notification History</CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Bell className="h-3 w-3" />
                    {notifications.length} notifications
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={notification.type === 'SMS' ? 'default' : notification.type === 'Email' ? 'secondary' : 'outline'}>
                            {notification.type}
                          </Badge>
                          <span className="text-xs text-gray-500">{notification.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-700">{notification.message}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => resendNotification(notification.type)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        Resend
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Notification Preferences</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">SMS Only</Button>
                    <Button variant="outline" size="sm">Email Only</Button>
                    <Button variant="outline" size="sm">All Channels</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Contact Current Officer</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Phone className="h-4 w-4 mr-2" />
                        Call: {applicationData.currentOfficer.contact}
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Mail className="h-4 w-4 mr-2" />
                        Email: {applicationData.currentOfficer.email}
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">General Support</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Phone className="h-4 w-4 mr-2" />
                        Helpline: 1800-XXX-XXXX
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Mail className="h-4 w-4 mr-2" />
                        support@servicetransparency.gov.in
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Track;
