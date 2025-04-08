
import React from 'react';
import { LandingPageConfig } from '../utils/types';
import { 
  Users, Check, Clock, Heart, Star, Shield, 
  ThumbsUp, Gift, Settings, Target, Zap
} from 'lucide-react';

interface BenefitsProps {
  config: LandingPageConfig;
}

const Benefits: React.FC<BenefitsProps> = ({ config }) => {
  // Map of icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="w-12 h-12" />,
    check: <Check className="w-12 h-12" />,
    clock: <Clock className="w-12 h-12" />,
    heart: <Heart className="w-12 h-12" />,
    star: <Star className="w-12 h-12" />,
    shield: <Shield className="w-12 h-12" />,
    thumbsUp: <ThumbsUp className="w-12 h-12" />,
    gift: <Gift className="w-12 h-12" />,
    settings: <Settings className="w-12 h-12" />,
    target: <Target className="w-12 h-12" />,
    zap: <Zap className="w-12 h-12" />
  };

  return (
    <section 
      id="benefits" 
      className="py-20 px-6 md:px-12"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: config.colors.primary }}
        >
          {config.texts.benefitsTitle}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {config.texts.benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:shadow-xl"
              style={{ 
                backgroundColor: 'white', 
                transform: `translateY(${index * 10}px)`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div 
                className="mb-4 p-4 rounded-full transition-transform duration-300 hover:scale-110"
                style={{ color: config.colors.secondary }}
              >
                {iconMap[benefit.icon] || <Star className="w-12 h-12" />}
              </div>
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: config.colors.primary }}
              >
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
