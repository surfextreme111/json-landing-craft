
import React from 'react';
import { LandingPageConfig } from '../utils/types';
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  config: LandingPageConfig;
}

const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer 
      id="footer" 
      className="py-12 px-6 md:px-12"
      style={{ backgroundColor: config.colors.primary, color: 'white' }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src={config.images.logo} alt="Logo" className="h-10 mb-4" />
            <p className="text-sm opacity-80">
              {config.texts.footerText}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              {config.links.email && (
                <a 
                  href={`mailto:${config.links.email}`} 
                  className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  {config.links.email}
                </a>
              )}
              
              {config.links.phone && (
                <a 
                  href={`tel:${config.links.phone}`} 
                  className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  {config.links.phone}
                </a>
              )}
              
              {config.links.whatsapp && (
                <a 
                  href={`https://wa.me/${config.links.whatsapp.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {config.links.social.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="opacity-80 hover:opacity-100 transition-opacity transform hover:scale-110"
                  aria-label={social.platform}
                >
                  <span className="sr-only">{social.platform}</span>
                  {/* Using simplified social icon representation */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20">
                    {social.platform.charAt(0)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
