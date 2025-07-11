
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider } from '@/contexts/AuthContext';
import './i18n';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Landing from '@/pages/Landing';
import Apply from '@/pages/Apply';
import Track from '@/pages/Track';
import Dashboard from '@/pages/Dashboard';
import Officer from '@/pages/Officer';
import Audit from '@/pages/Audit';
import Heatmap from '@/pages/Heatmap';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

const App: React.FC = () => {
  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      import('./i18n').then(({ default: i18n }) => {
        i18n.changeLanguage(savedLanguage);
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/apply" element={<Apply />} />
                  <Route path="/track" element={<Track />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/officer" element={<Officer />} />
                  <Route path="/audit" element={<Audit />} />
                  <Route path="/heatmap" element={<Heatmap />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
