
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { loadConfig } from '../utils/configLoader';
import { LandingPageConfig } from '../utils/types';

const Index = () => {
  const [config, setConfig] = useState<LandingPageConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        // You can pass a URL to a custom JSON config here if needed
        const loadedConfig = await loadConfig();
        setConfig(loadedConfig);
      } catch (error) {
        console.error('Error loading configuration:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  if (loading || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Cargando...</div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: config.colors.background }}>
      <Header config={config} />
      <Hero config={config} />
      <Benefits config={config} />
      {config.location && <LocationMap config={config} />}
      <Footer config={config} />
      {config.links.whatsapp && (
        <WhatsAppButton 
          whatsappNumber={config.links.whatsapp} 
          color={config.colors.secondary} 
        />
      )}
    </div>
  );
};

export default Index;
