import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Target, Wrench, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutBackground from '@/assets/about-background.jpg';

const AboutSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="about" 
      className="relative py-20 bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${aboutBackground})`
      }}
    >
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBackground})`,
          willChange: 'transform'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">О нашей компании</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              О нашей 
              <span className="text-primary block">компании</span>
            </h2>

            <p className="text-white/90 mb-8 leading-relaxed text-lg">
              Мы специализируемся на полном цикле монтажных работ климатического оборудования. 
              Наша команда профессионалов с многолетним опытом гарантирует качество и надежность.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Сертифицированные специалисты с опытом 10+ лет",
                "Использование современного оборудования",
                "Гарантия на все виды работ",
                "Индивидуальный подход к каждому проекту"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 group">
              Узнать больше
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "500+", label: "Завершенных проектов", icon: Award },
              { number: "15+", label: "Лет на рынке", icon: Target },
              { number: "300+", label: "Довольных клиентов", icon: Users },
              { number: "100%", label: "Гарантия качества", icon: Shield }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/30 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl hidden lg:block" />
    </section>
  );
};

export default AboutSection;