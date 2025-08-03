
import React, { useEffect, useState } from 'react';
import { Users, Award, FileCheck, Building } from 'lucide-react';
import aboutParallaxMain from '@/assets/about-parallax-main.jpg';
import aboutParallaxSecondary from '@/assets/about-parallax-secondary.jpg';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Мировые услуги",
      description: "Мы предоставляем клиентам прозрачные сметы расходов и придерживаемся согласованных"
    },
    {
      icon: Award,
      title: "Победитель награды лучшей компании",
      description: "Надежная строительная компания умело управляет бюджетами и сроками эффективно"
    }
  ];

  const counters = [
    { number: "500+", label: "Завершенных проектов", icon: FileCheck },
    { number: "50+", label: "Члены команды", icon: Users },
    { number: "400+", label: "Довольных клиентов", icon: Award },
    { number: "15+", label: "Побед в наградах", icon: Building }
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Parallax Background Section */}
      <div 
        className="relative h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutParallaxMain})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <div className="mb-4">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  О нашей компании
                </span>
              </div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Мы всегда думаем о ваших мечтах
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Многие современные строительные компании сосредотачиваются на устойчивых строительных практиках, 
              включая экологически чистые материалы, энергоэффективные системы и экологически сознательные проекты 
              для снижения воздействия на окружающую среду.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Main About Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left side - Images */}
              <div className="relative">
                {/* Main image */}
                <div className="relative z-10">
                  <img 
                    src={aboutParallaxSecondary} 
                    alt="Электромонтажные работы Элестри Плюс" 
                    className="w-full h-[500px] object-cover rounded-2xl shadow-hero"
                  />
                </div>
                
                {/* Experience badge */}
                <div className="absolute -bottom-8 -left-8 z-20 bg-primary text-white p-8 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-sm font-medium leading-tight">
                      Лет опыта в<br />
                      строительной компании
                    </div>
                  </div>
                </div>
                
                {/* Decorative shape */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
                <div className="absolute -top-8 -right-8 w-48 h-48 border border-primary/20 rounded-2xl -z-10"></div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                    ТОО "Элестри Плюс"
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Современная строительная компания, специализирующаяся на устойчивых строительных практиках. 
                    Мы используем экологически чистые материалы, энергоэффективные системы и экологически 
                    сознательные проекты для снижения воздействия на окружающую среду.
                  </p>
                </div>
                
                {/* Feature grid */}
                <div className="grid grid-cols-1 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    Больше о нас
                  </button>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {counters.map((counter, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <counter.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {counter.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {counter.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
