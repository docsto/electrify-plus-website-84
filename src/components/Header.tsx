import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Mail, Clock, Search, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import CostCalculationModal from './CostCalculationModal';

const Header = () => {
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Закрываем меню при клике на пункт
    }
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-background-dark text-white py-3 hidden lg:block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="animate-fade-in">Добро пожаловать в Электри+ - Строительство и Ремонт</span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Clock className="w-4 h-4 text-primary" />
                <span>Время работы: Пн - Сб: 8:00 - 15:00</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>Email: info@electri.kz</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-gray-200/50' 
            : 'bg-white/80 backdrop-blur-sm'
        }`} 
        style={{ 
          top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? (isScrolled ? '0' : '52px') : '0',
          transform: isScrolled ? 'translateY(0)' : 'translateY(0)'
        }}
      >
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
                className="relative text-gray-700 hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap font-medium group"
                style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
              >
                О нас
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#services" 
                onClick={() => scrollToSection('services')}
                className="relative text-gray-700 hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap font-medium group"
                style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
              >
                Услуги
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#advantages" 
                onClick={() => scrollToSection('advantages')}
                className="relative text-gray-700 hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap font-medium group"
                style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
              >
                Преимущества
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#projects" 
                onClick={() => scrollToSection('projects')}
                className="relative text-gray-700 hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap font-medium group"
                style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
              >
                Объекты
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#contact" 
                onClick={() => scrollToSection('contact')}
                className="relative text-gray-700 hover:text-primary transition-all duration-300 cursor-pointer whitespace-nowrap font-medium group"
                style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
              >
                Контакты
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Контакты и кнопка для десктопа */}
            <div className="hidden lg:flex items-center space-x-6">
              <a 
                href="tel:+77162000000" 
                className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-300 whitespace-nowrap group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-4 h-4 group-hover:text-white transition-colors" />
                </div>
                <span className="font-semibold" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>+7 (716) 200-00-00</span>
              </a>
              <Button 
                onClick={() => setIsCostModalOpen(true)}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap transform hover:scale-105 transition-all duration-300"
                style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
              >
                Рассчитать стоимость
              </Button>
            </div>

            {/* Мобильное меню */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
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
                      className="text-gray-700 hover:text-primary transition-colors"
                      style={{ fontSize: 'clamp(0.7rem, 4vw, 1rem)' }}
                    >
                      О нас
                    </a>
                    <a 
                      href="#services" 
                      onClick={() => scrollToSection('services')}
                      className="text-gray-700 hover:text-primary transition-colors"
                      style={{ fontSize: 'clamp(0.7rem, 4vw, 1rem)' }}
                    >
                      Услуги
                    </a>
                    <a 
                      href="#advantages" 
                      onClick={() => scrollToSection('advantages')}
                      className="text-gray-700 hover:text-primary transition-colors"
                      style={{ fontSize: 'clamp(0.7rem, 4vw, 1rem)' }}
                    >
                      Преимущества
                    </a>
                    <a 
                      href="#projects" 
                      onClick={() => scrollToSection('projects')}
                      className="text-gray-700 hover:text-primary transition-colors"
                      style={{ fontSize: 'clamp(0.7rem, 4vw, 1rem)' }}
                    >
                      Объекты
                    </a>
                    <a 
                      href="#contact" 
                      onClick={() => scrollToSection('contact')}
                      className="text-gray-700 hover:text-primary transition-colors"
                      style={{ fontSize: 'clamp(0.7rem, 4vw, 1rem)' }}
                    >
                      Контакты
                    </a>
                    
                    <div className="pt-4 border-t">
                      <a 
                        href="tel:+77162000000" 
                        className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-4"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="font-medium" style={{ fontSize: 'clamp(0.7rem, 4vw, 1rem)' }}>+7 (716) 200-00-00</span>
                      </a>
                      <Button 
                        onClick={() => setIsCostModalOpen(true)}
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        style={{ fontSize: 'clamp(0.7rem, 4vw, 1rem)' }}
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
      </header>
      
      <CostCalculationModal 
        isOpen={isCostModalOpen} 
        onClose={() => setIsCostModalOpen(false)} 
      />
    </>
  );
};

export default Header;