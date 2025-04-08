
export interface LandingPageConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
  texts: {
    title: string;
    description: string;
    ctaButton: string;
    benefitsTitle: string;
    benefits: {
      title: string;
      description: string;
      icon: string;
    }[];
    footerText: string;
    locationTitle?: string;
  };
  images: {
    logo: string;
    hero: string;
  };
  links: {
    menu: {
      text: string;
      url: string;
    }[];
    social: {
      platform: string;
      url: string;
      icon: string;
    }[];
    whatsapp?: string;
    email?: string;
    phone?: string;
  };
  location?: {
    address: string;
    lat: number;
    lng: number;
    zoom: number;
  };
}
