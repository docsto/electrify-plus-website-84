import React, { useState } from 'react';
import { Phone, ArrowRight, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

const CtaSection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background with Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-accent/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-primary/20 rotate-45"></div>
        <div className="absolute bottom-1/4 left-10 w-4 h-4 bg-accent/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Subtitle with Icon */}
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-6 h-0.5 bg-accent mr-3"></div>
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Call To Action
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Остались вопросы? 
              <span className="text-primary"> Давайте поговорим прямо сейчас!</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Все больше специалистов по монтажу сосредотачиваются на устойчивых и экологически чистых методах установки.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <span className="text-muted-foreground font-medium">Звоните в любое время:</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+74951234567" className="text-xl font-bold text-primary hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 mt-4">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Email нас:</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <a href="mailto:info@montazh.com" className="text-primary font-semibold hover:text-accent transition-colors">
                  info@montazh.com
                </a>
              </div>
            </div>

            <Button 
              onClick={() => setIsConsultationModalOpen(true)}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-4 text-lg group shadow-lg"
            >
              Больше о нас
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Quote Form */}
          <div className="bg-card rounded-lg shadow-xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Запросить расчет
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя *"
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон *"
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    required
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                    <option value="">Выберите услугу *</option>
                    <option value="construction">Монтаж конструкций</option>
                    <option value="real-estate">Недвижимость</option>
                    <option value="industry">Промышленность</option>
                    <option value="renovation">Ремонт</option>
                  </select>
                </div>
              </div>
              
              <div>
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent/90 font-semibold py-3 text-lg"
              >
                Отправить сообщение
              </Button>
            </form>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Ответим в течение 15 минут</span>
              </div>
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