
import React, { useState } from 'react';
import { Play, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';
import heroImage from '@/assets/hero-construction.jpg';

const HeroSection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        marginTop: typeof window !== 'undefined' && window.innerWidth >= 1024 ? '40px' : '0'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
          <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">Мы строим, вы процветаете</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Качественный монтаж
              <span className="block text-primary">долговечные впечатления</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Компании по монтажу предлагают широкий спектр услуг, включая предварительное планирование, 
              управление проектами, проектирование и архитектурные услуги.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsConsultationModalOpen(true)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 text-lg group"
              >
                Узнать больше
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              >
                Наши услуги
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right side - Play button */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <Button 
                size="lg"
                className="w-24 h-24 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl"
              >
                <Play className="w-8 h-8 fill-current" />
              </Button>
              <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-primary animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Shape */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 transform rotate-45 translate-x-48 translate-y-48 hidden lg:block"></div>
      
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
