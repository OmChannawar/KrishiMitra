import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ToolsSection } from "./components/ToolsSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <ToolsSection />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}