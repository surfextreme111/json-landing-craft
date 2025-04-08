
import React, { useState } from 'react';
import { LandingPageConfig } from '../utils/types';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  config: LandingPageConfig;
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full py-4 px-6 md:px-12"
      style={{ backgroundColor: `${config.colors.background}` }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img src={config.images.logo} alt="Logo" className="h-8 md:h-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {config.links.menu.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300",
                )}
                style={{ 
                  color: config.colors.primary,
                  after: { backgroundColor: config.colors.primary }
                }}
              >
                {item.text}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: config.colors.primary }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: config.colors.primary }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 animate-fade-in">
            {config.links.menu.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-sm font-medium py-2 transition-colors duration-300"
                style={{ color: config.colors.primary }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
