import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

const CtaSection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/20 rotate-45"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Остались вопросы?
            <span className="block text-accent">Мы перезвоним!</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку и наш специалист свяжется с вами в течение 15 минут 
            для бесплатной консультации
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setIsConsultationModalOpen(true)}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Заказать звонок
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm opacity-90">минут</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">поддержка</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/90">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">+7 (495) 123-45-67</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="text-center">
              <div className="font-semibold">Время работы:</div>
              <div>Пн-Пт: 9:00-18:00, Сб-Вс: 10:00-16:00</div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </section>
  );
};

export default CtaSection;