import { Button } from "./ui/button";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "./TranslationDemo";
import React from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="border-b border-green-800 bg-green-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/*<Leaf className="w-8 h-8 text-green-300" />*/}
          <img src="/logo.jpg" alt="KrishiMitra Logo" className="w-8 h-8 object-contain" style={{ width: '56px', height: '56px' }}/>
          <span className="text-xl font-semibold text-white">KrishiMitra
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-green-100 hover:text-green-300 transition-colors">{t('home')}</a>
          <a href="#tools" className="text-green-100 hover:text-green-300 transition-colors">{t('tools')}</a>
          <a href="#about" className="text-green-100 hover:text-green-300 transition-colors">{t('about')}</a>
          <a href="#contact" className="text-green-100 hover:text-green-300 transition-colors">{t('contact')}</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <Button variant="outline" className="border-green-300 text-green-100 hover:bg-green-800 hover:text-white">{t('signIn')}</Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">{t('getStarted')}</Button>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-green-100 hover:bg-green-800 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-green-800 bg-green-900">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="text-green-100 hover:text-green-300 transition-colors">{t('home')}</a>
            <a href="#tools" className="text-green-100 hover:text-green-300 transition-colors">{t('tools')}</a>
            <a href="#about" className="text-green-100 hover:text-green-300 transition-colors">{t('about')}</a>
            <a href="#contact" className="text-green-100 hover:text-green-300 transition-colors">{t('contact')}</a>
            <div className="flex flex-col gap-2 pt-2">
              <LanguageSelector />
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-green-300 text-green-100 hover:bg-green-800 hover:text-white">{t('signIn')}</Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">{t('getStarted')}</Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}