
import { LandingPageConfig } from './types';
import defaultConfig from '../data/defaultConfig.json';

export const loadConfig = async (customConfigUrl?: string): Promise<LandingPageConfig> => {
  try {
    if (customConfigUrl) {
      const response = await fetch(customConfigUrl);
      if (!response.ok) {
        console.error('Error loading custom config, falling back to default');
        return defaultConfig as LandingPageConfig;
      }
      return await response.json();
    }
    return defaultConfig as LandingPageConfig;
  } catch (error) {
    console.error('Error loading config:', error);
    return defaultConfig as LandingPageConfig;
  }
};
