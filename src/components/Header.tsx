
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/a186bb1a-59cc-48e9-8c7c-b2bb7022cf01.png" 
                alt="Электри+" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </button>
          </div>

          {/* Навигация */}
          <nav className="hidden sm:hidden md:hidden lg:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
            >
              О нас
            </a>
            <a 
              href="#services" 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
            >
              Услуги
            </a>
            <a 
              href="#advantages" 
              onClick={() => scrollToSection('advantages')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
            >
              Преимущества
            </a>
            <a 
              href="#projects" 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
            >
              Объекты
            </a>
            <a 
              href="#contact" 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
            >
              Контакты
            </a>
          </nav>

          {/* Контакты и кнопка для десктопа */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+77162000000" 
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+7 (716) 200-00-00</span>
            </a>
            <Button 
              onClick={() => setIsCostModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 whitespace-nowrap"
            >
              Рассчитать стоимость
            </Button>
          </div>

          {/* Планшетное меню */}
          <div className="hidden sm:flex md:flex lg:hidden items-center space-x-4">
            <nav className="flex items-center space-x-3 h-12">
              <a 
                href="#about" 
                onClick={() => scrollToSection('about')}
                className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
              >
                О нас
              </a>
              <a 
                href="#services" 
                onClick={() => scrollToSection('services')}
                className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
              >
                Услуги
              </a>
              <a 
                href="#advantages" 
                onClick={() => scrollToSection('advantages')}
                className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
              >
                Преимущества
              </a>
              <a 
                href="#projects" 
                onClick={() => scrollToSection('projects')}
                className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
              >
                Объекты
              </a>
              <a 
                href="#contact" 
                onClick={() => scrollToSection('contact')}
                className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
              >
                Контакты
              </a>
            </nav>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-6">
                  <a 
                    href="#about" 
                    onClick={() => scrollToSection('about')}
                    className="text-lg text-gray-700 hover:text-primary transition-colors"
                  >
                    О нас
                  </a>
                  <a 
                    href="#services" 
                    onClick={() => scrollToSection('services')}
                    className="text-lg text-gray-700 hover:text-primary transition-colors"
                  >
                    Услуги
                  </a>
                  <a 
                    href="#advantages" 
                    onClick={() => scrollToSection('advantages')}
                    className="text-lg text-gray-700 hover:text-primary transition-colors"
                  >
                    Преимущества
                  </a>
                  <a 
                    href="#projects" 
                    onClick={() => scrollToSection('projects')}
                    className="text-lg text-gray-700 hover:text-primary transition-colors"
                  >
                    Объекты
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => scrollToSection('contact')}
                    className="text-lg text-gray-700 hover:text-primary transition-colors"
                  >
                    Контакты
                  </a>
                  
                  <div className="pt-4 border-t">
                    <a 
                      href="tel:+77162000000" 
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-4"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">+7 (716) 200-00-00</span>
                    </a>
                    <Button 
                      onClick={() => setIsCostModalOpen(true)}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Рассчитать стоимость
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
