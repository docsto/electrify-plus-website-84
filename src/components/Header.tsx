
import React, { useState } from 'react';
import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CostCalculationModal from './CostCalculationModal';

const Header = () => {
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a186bb1a-59cc-48e9-8c7c-b2bb7022cf01.png" 
              alt="Электри+" 
              className="h-12 w-auto"
            />
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              О нас
            </a>
            <a 
              href="#services" 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Услуги
            </a>
            <a 
              href="#advantages" 
              onClick={() => scrollToSection('advantages')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Преимущества
            </a>
            <a 
              href="#projects" 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Объекты
            </a>
            <a 
              href="#contact" 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Контакты
            </a>
          </nav>

          {/* Контакты и кнопка */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+77162000000" 
              className="hidden md:flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+7 (716) 200-00-00</span>
            </a>
            <Button 
              onClick={() => setIsCostModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2"
            >
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
      
      <CostCalculationModal 
        isOpen={isCostModalOpen} 
        onClose={() => setIsCostModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
