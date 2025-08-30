import { useLanguage } from "./LanguageContext";

// Sample translations for demonstration
const translations = {
  en: {
    welcome: "Welcome to AgriTools",
    description: "Modern Tools for Smart Farming",
    getStarted: "Get Started",
    signIn: "Sign In",
    home: "Home",
    tools: "Tools",
    about: "About",
    contact: "Contact",
    features: "Features",
    cropRotation: "Crop Rotation Planner",
    soilPH: "Soil pH Calculator",
    irrigation: "Irrigation Scheduler",
    weather: "Weather Tracker",
    fertilizer: "Fertilizer Calculator",
    pestControl: "Pest Identification"
  },
  hi: {
    welcome: "AgriTools में आपका स्वागत है",
    description: "स्मार्ट खेती के लिए आधुनिक उपकरण",
    getStarted: "शुरू करें",
    signIn: "साइन इन करें",
    home: "होम",
    tools: "उपकरण",
    about: "के बारे में",
    contact: "संपर्क",
    features: "विशेषताएं",
    cropRotation: "फसल चक्र योजनाकार",
    soilPH: "मिट्टी pH कैलकुलेटर",
    irrigation: "सिंचाई समय सारणी",
    weather: "मौसम ट्रैकर",
    fertilizer: "उर्वरक कैलकुलेटर",
    pestControl: "कीट पहचान"
  },
  mr: {
    welcome: "AgriTools मध्ये आपले स्वागत आहे",
    description: "स्मार्ट शेतीसाठी आधुनिक साधने",
    getStarted: "सुरुवात करा",
    signIn: "साइन इन करा",
    home: "होम",
    tools: "साधने",
    about: "बद्दल",
    contact: "संपर्क",
    features: "वैशिष्ट्ये",
    cropRotation: "पीक चक्र नियोजक",
    soilPH: "मातीचा pH कॅल्क्युलेटर",
    irrigation: "सिंचन वेळापत्रक",
    weather: "हवामान ट्रॅकर",
    fertilizer: "खत कॅल्क्युलेटर",
    pestControl: "कीड ओळख"
  }
};

interface TranslationDemoProps {
  textKey: keyof typeof translations.en;
}

export function TranslationDemo({ textKey }: TranslationDemoProps) {
  const { currentLanguage } = useLanguage();
  
  const currentTranslations = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  
  return <>{currentTranslations[textKey]}</>;
}

// Hook for easy translation access
export function useTranslation() {
  const { currentLanguage } = useLanguage();
  
  const t = (key: keyof typeof translations.en): string => {
    const currentTranslations = translations[currentLanguage.code as keyof typeof translations] || translations.en;
    return currentTranslations[key];
  };
  
  return { t };
}