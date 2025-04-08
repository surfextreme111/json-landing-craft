
import React, { useEffect, useRef } from 'react';
import { LandingPageConfig } from '../utils/types';
import { MapPin, Navigation } from 'lucide-react';

interface LocationMapProps {
  config: LandingPageConfig;
}

const LocationMap: React.FC<LocationMapProps> = ({ config }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!config.location || !mapRef.current) return;

    // We're using a static map image to avoid requiring API keys
    const { lat, lng, zoom } = config.location;
    const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+${config.colors.primary.replace('#', '')}(${lng},${lat})/${lng},${lat},${zoom},0/600x300@2x?access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2xvY2F0aW9uIn0.bWFwVXNvdmFwcGFyYW0xa2V5`;
    
    // Create and set the map image
    const img = document.createElement('img');
    img.src = mapUrl;
    img.alt = "Mapa de ubicación";
    img.className = "w-full h-full object-cover rounded-lg";
    
    // Clear the map container and append the image
    mapRef.current.innerHTML = '';
    mapRef.current.appendChild(img);
  }, [config]);

  if (!config.location) return null;

  const openMapsApp = () => {
    const { lat, lng } = config.location!;
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="location" className="py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          style={{ color: config.colors.primary }}
        >
          {config.texts.locationTitle || "Dónde estamos"}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-[300px]">
            <div ref={mapRef} className="w-full h-full bg-gray-200"></div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: config.colors.primary }} />
              <div>
                <h3 className="text-lg font-semibold mb-1">Dirección</h3>
                <p className="text-gray-600">{config.location.address}</p>
              </div>
            </div>
            
            {config.links.phone && (
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: config.colors.primary }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                  <a 
                    href={`tel:${config.links.phone}`} 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {config.links.phone}
                  </a>
                </div>
              </div>
            )}
            
            {config.links.email && (
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: config.colors.primary }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a 
                    href={`mailto:${config.links.email}`} 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {config.links.email}
                  </a>
                </div>
              </div>
            )}
            
            <button
              onClick={openMapsApp}
              className="mt-6 flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-transform duration-300 transform hover:scale-105"
              style={{ backgroundColor: config.colors.secondary }}
            >
              <Navigation className="w-5 h-5" />
              <span>Cómo llegar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
