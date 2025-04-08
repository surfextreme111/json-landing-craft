
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  whatsappNumber: string;
  color: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ whatsappNumber, color }) => {
  if (!whatsappNumber) return null;
  
  const cleanNumber = whatsappNumber.replace(/\+/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: color }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
