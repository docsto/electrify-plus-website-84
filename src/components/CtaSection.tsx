import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

const CtaSection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Geometric Elements */}
        <div className="absolute top-10 right-20 w-32 h-32 border-2 border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 bg-white/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <span className="text-sm font-medium">ОСТАЛИСЬ ВОПРОСЫ?</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Мы перезвоним!
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Получите бесплатную консультацию по вашему проекту
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/90">Выезд специалиста на объект</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/90">Составление сметы</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/90">Расчет сроков выполнения</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/90">Подбор оптимального решения</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+74951234567" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>

            <Button 
              onClick={() => setIsConsultationModalOpen(true)}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg group shadow-lg"
            >
              Заказать звонок
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Бесплатная консультация
              </h3>
              <p className="text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя *"
                  className="w-full px-4 py-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Телефон *"
                  className="w-full px-4 py-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <select className="w-full px-4 py-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                  <option value="">Выберите услугу *</option>
                  <option value="construction">Монтаж конструкций</option>
                  <option value="real-estate">Недвижимость</option>
                  <option value="industry">Промышленность</option>
                  <option value="renovation">Ремонт</option>
                </select>
              </div>
              
              <div>
                <textarea
                  placeholder="Опишите ваш проект"
                  rows={4}
                  className="w-full px-4 py-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground resize-none"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-4 text-lg"
              >
                Получить консультацию
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">15 минут ответ</span>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">500+ клиентов</span>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Гарантия качества</span>
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