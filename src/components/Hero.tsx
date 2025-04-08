
import React from 'react';
import { LandingPageConfig } from '../utils/types';
import { cn } from '@/lib/utils';

interface HeroProps {
  config: LandingPageConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: config.colors.primary }}
            >
              {config.texts.title}
            </h1>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              {config.texts.description}
            </p>
            <button 
              className={cn(
                "px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
              )}
              style={{ 
                backgroundColor: config.colors.primary,
                color: 'white'
              }}
            >
              {config.texts.ctaButton}
            </button>
          </div>
          <div className="animate-fade-in">
            <img 
              src={config.images.hero} 
              alt="Hero Image" 
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
