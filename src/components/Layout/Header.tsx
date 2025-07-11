
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import LanguageSelector from '@/components/LanguageSelector';
import { useAuth } from '@/contexts/AuthContext';
import UserLoginModal from '@/components/auth/UserLoginModal';
import OfficerLoginModal from '@/components/auth/OfficerLoginModal';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showUserLogin, setShowUserLogin] = React.useState(false);
  const [showOfficerLogin, setShowOfficerLogin] = React.useState(false);

  // Role-based navigation
  const getNavigation = () => {
    if (!isAuthenticated) {
      return [
        { name: t('home'), href: '/' },
        { name: t('apply'), href: '/apply' },
        { name: t('track'), href: '/track' },
        { name: t('dashboard'), href: '/dashboard' },
        { name: t('auditWall'), href: '/audit' },
        { name: t('heatmap'), href: '/heatmap' }
      ];
    }
    
    if (user?.role === 'user') {
      return [
        { name: t('home'), href: '/' },
        { name: t('apply'), href: '/apply' },
        { name: t('track'), href: '/track' }
      ];
    }
    
    if (user?.role === 'officer') {
      return [
        { name: t('dashboard'), href: '/dashboard' },
        { name: t('auditWall'), href: '/audit' }
      ];
    }
    
    return [];
  };

  const navigation = getNavigation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">ServiceTransparency</h1>
              <p className="text-xs text-gray-600">Government of India</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            {!isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                    {t('login')} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setShowUserLogin(true)}>
                    User Login
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setShowOfficerLogin(true)}>
                    Officer Login
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                    {user?.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200">
                {!isAuthenticated ? (
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setShowUserLogin(true)}
                    >
                      User Login
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setShowOfficerLogin(true)}
                    >
                      Officer Login
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Login Modals */}
      <UserLoginModal 
        isOpen={showUserLogin} 
        onClose={() => setShowUserLogin(false)} 
      />
      <OfficerLoginModal 
        isOpen={showOfficerLogin} 
        onClose={() => setShowOfficerLogin(false)} 
      />
    </header>
  );
};

export default Header;
