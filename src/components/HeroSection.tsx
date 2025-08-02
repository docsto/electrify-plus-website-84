
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ConsultationModal from './ConsultationModal';

const HeroSection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const images = [
    '/lovable-uploads/0571061b-ea97-4ce8-b291-d1421b94ead4.png',
    '/lovable-uploads/16a8e9a1-d634-47a2-99e6-11df23c55e76.png',
    '/lovable-uploads/3d2379cc-e5aa-4b7d-ad74-5d3d2b69c5f7.png',
    '/lovable-uploads/707fe5f6-dae7-43e5-a9a9-dba0aced7598.png',
    '/lovable-uploads/86176baf-f814-4eb6-a15b-e006c6318450.png',
    '/lovable-uploads/a7020336-d482-4bfe-bba3-4607e0673f46.png',
    '/lovable-uploads/f98501ae-cda5-4c43-bba6-db0073efd656.png'
  ];

  return (
    <>
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${images[0]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          marginTop: typeof window !== 'undefined' && window.innerWidth >= 1024 ? '40px' : '0'
        }}
      >
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <div className="flex flex-col space-y-4 ml-8">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium">МЫ СТРОИМ, ВЫ ПРОЦВЕТАЕТЕ</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">КАЧЕСТВЕННОЕ</span>
              <br />
              <span className="text-white">СТРОИТЕЛЬСТВО</span>
              <br />
              <span className="text-primary">ДОЛГОВЕЧНЫЕ</span>{' '}
              <span className="text-primary">ВПЕЧАТЛЕНИЯ</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Профессиональные электромонтажные работы, строительство и ремонт. 
              Создаем надежные решения для вашего комфорта и безопасности.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsConsultationModalOpen(true)}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Получить консультацию
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-background-dark px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Projects Gallery Section - hidden on mobile and tablet */}
      <section className="py-16 bg-gray-50 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Левая колонка с текстом */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Наши успешные проекты
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Более 10 лет опыта в сфере электромонтажных работ и строительства. 
                Доверьте свой проект профессионалам.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-gray-600">Завершенных проектов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>

            {/* Правая колонка со слайдером */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full h-full"
                  >
                    <CarouselContent>
                      {images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="h-full">
                            <img 
                              src={image} 
                              alt={`Проект ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
