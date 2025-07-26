
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CostCalculationModal from './CostCalculationModal';
import ConsultationModal from './ConsultationModal';

const HeroSection = () => {
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-muted via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Левая колонка с текстом */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Монтируем 
                  <span className="text-primary block">как надо</span>
                </h1>
                
                <div className="text-xl text-gray-600 leading-relaxed">
                  <p className="mb-4">Монтаж инженерных систем и сетей:</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>связи и передачи данных</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>электропередач</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>пожарной и охранной безопасности</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>комплексной автоматизации инженерных систем и производственных процессов</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                >
                  Заказать консультацию
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsCostModalOpen(true)}
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
                >
                  Рассчитать стоимость
                </Button>
              </div>
            </div>

            {/* Правая колонка с изображением */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-3xl font-bold">Э+</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-gray-800">Профессиональный монтаж</div>
                      <div className="text-primary font-medium">Лицензии • НДС • Документооборот</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <CostCalculationModal 
        isOpen={isCostModalOpen} 
        onClose={() => setIsCostModalOpen(false)} 
      />
      
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
