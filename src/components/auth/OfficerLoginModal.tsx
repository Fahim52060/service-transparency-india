import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface OfficerLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfficerLoginModal: React.FC<OfficerLoginModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    officerId: '',
    email: '',
    password: ''
  });

  const handleLogin = () => {
    if (!credentials.officerId || !credentials.email || !credentials.password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    // Simulate officer authentication
    const userData = {
      id: credentials.officerId,
      email: credentials.email,
      role: 'officer' as const,
      name: 'Officer Smith',
      officerId: credentials.officerId
    };

    login(userData);
    toast({
      title: 'Login Successful',
      description: 'Welcome to Officer Portal!',
    });
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setCredentials({ officerId: '', email: '', password: '' });
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Officer Login</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="officerId">Officer ID</Label>
            <Input
              id="officerId"
              type="text"
              value={credentials.officerId}
              onChange={(e) => setCredentials(prev => ({ ...prev, officerId: e.target.value }))}
              placeholder="Enter your Officer ID"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="officer-email">Email Address</Label>
            <Input
              id="officer-email"
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              placeholder="Enter your password"
            />
          </div>

          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfficerLoginModal;