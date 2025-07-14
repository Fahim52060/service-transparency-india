import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface UserLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserLoginModal: React.FC<UserLoginModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [loginType, setLoginType] = useState<'email' | 'mobile'>('email');
  const [credentials, setCredentials] = useState({
    email: '',
    mobile: '',
    otp: ''
  });

  const handleSendOTP = () => {
    if (loginType === 'email' && !credentials.email) {
      toast({
        title: 'Error',
        description: 'Please enter your email address',
        variant: 'destructive'
      });
      return;
    }
    if (loginType === 'mobile' && !credentials.mobile) {
      toast({
        title: 'Error',
        description: 'Please enter your mobile number',
        variant: 'destructive'
      });
      return;
    }

    // Simulate OTP sending
    toast({
      title: 'OTP Sent',
      description: `OTP sent to your ${loginType}`,
    });
    setStep('otp');
  };

  const handleLogin = () => {
    if (!credentials.otp) {
      toast({
        title: 'Error',
        description: 'Please enter the OTP',
        variant: 'destructive'
      });
      return;
    }

    // Simulate OTP verification
    const userData = {
      id: '1',
      email: credentials.email || `+91${credentials.mobile}`,
      role: 'user' as const,
      name: 'John Doe',
      mobile: credentials.mobile
    };

    login(userData);
    toast({
      title: 'Login Successful',
      description: 'Welcome back!',
    });
    onClose();
    resetForm();
    // Optional: Redirect to apply page after user login
    setTimeout(() => {
      if (window.location.pathname === '/') {
        window.location.href = '/apply';
      }
    }, 1000);
  };

  const resetForm = () => {
    setStep('credentials');
    setCredentials({ email: '', mobile: '', otp: '' });
    setLoginType('email');
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Login</DialogTitle>
        </DialogHeader>

        {step === 'credentials' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Login with</Label>
              <Select value={loginType} onValueChange={(value: 'email' | 'mobile') => setLoginType(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="mobile">Mobile Number</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {loginType === 'email' ? (
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={credentials.mobile}
                  onChange={(e) => setCredentials(prev => ({ ...prev, mobile: e.target.value }))}
                  placeholder="Enter your mobile number"
                />
              </div>
            )}

            <Button onClick={handleSendOTP} className="w-full">
              Send OTP
            </Button>
          </div>
        )}

        {step === 'otp' && (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                OTP sent to {loginType === 'email' ? credentials.email : credentials.mobile}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                type="text"
                value={credentials.otp}
                onChange={(e) => setCredentials(prev => ({ ...prev, otp: e.target.value }))}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
              />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep('credentials')} className="flex-1">
                Back
              </Button>
              <Button onClick={handleLogin} className="flex-1">
                Verify & Login
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserLoginModal;