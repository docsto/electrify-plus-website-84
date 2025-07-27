
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CostCalculationModal from './CostCalculationModal';
import ConsultationModal from './ConsultationModal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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

            {/* Правая колонка со слайдером */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 3000,
                      }),
                    ]}
                    className="w-full h-full"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent className="h-full">
                      <CarouselItem className="h-full">
                        <div className="relative h-full">
                          <img 
                            src="/lovable-uploads/86176baf-f814-4eb6-a15b-e006c6318450.png" 
                            alt="Профессиональный монтаж - планирование проекта"
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
                            <div className="text-white">
                              <div className="text-lg font-semibold mb-1">Профессиональный монтаж</div>
                              <div className="text-white/90 text-sm">Планирование и проектирование</div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full">
                        <div className="relative h-full">
                          <img 
                            src="/lovable-uploads/a7020336-d482-4bfe-bba3-4607e0673f46.png" 
                            alt="Профессиональный монтаж - электромонтажные работы"
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
                            <div className="text-white">
                              <div className="text-lg font-semibold mb-1">Профессиональный монтаж</div>
                              <div className="text-white/90 text-sm">Электромонтажные работы</div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full">
                        <div className="relative h-full">
                          <img 
                            src="/lovable-uploads/707fe5f6-dae7-43e5-a9a9-dba0aced7598.png" 
                            alt="Профессиональный монтаж - контроль качества"
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
                            <div className="text-white">
                              <div className="text-lg font-semibold mb-1">Профессиональный монтаж</div>
                              <div className="text-white/90 text-sm">Контроль качества работ</div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full">
                        <div className="relative h-full">
                          <img 
                            src="/lovable-uploads/f98501ae-cda5-4c43-bba6-db0073efd656.png" 
                            alt="Профессиональный монтаж - системы управления"
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
                            <div className="text-white">
                              <div className="text-lg font-semibold mb-1">Профессиональный монтаж</div>
                              <div className="text-white/90 text-sm">Системы управления и автоматизации</div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white" />
                  </Carousel>
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
