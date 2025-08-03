
import React from 'react';
import { Users, Award, FileCheck, Building } from 'lucide-react';
import aboutMainImage from '@/assets/about-main.jpg';
import aboutExperienceImage from '@/assets/about-experience.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Опытная команда",
      description: "Электрики, связисты, слаботочники, сварщики с многолетним опытом"
    },
    {
      icon: Award,
      title: "Лицензии и сертификаты",
      description: "Полный пакет разрешительных документов и квалификационных сертификатов"
    }
  ];

  const counters = [
    { number: "500+", label: "Проектов завершено" },
    { number: "50+", label: "Членов команды" },
    { number: "400+", label: "Довольных клиентов" },
    { number: "15+", label: "Наград получено" }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main About Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left side - Images */}
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10">
                <img 
                  src={aboutMainImage} 
                  alt="Строительная команда Элестри Плюс" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-hero"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-8 -left-8 z-20 bg-primary text-white p-8 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm font-medium leading-tight">
                    Лет опыта в<br />
                    строительной сфере
                  </div>
                </div>
              </div>
              
              {/* Secondary image */}
              <div className="absolute top-8 -right-8 z-10">
                <img 
                  src={aboutExperienceImage} 
                  alt="Строительный объект" 
                  className="w-48 h-48 object-cover rounded-2xl shadow-card"
                />
              </div>
              
              {/* Decorative shape */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-primary"></div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    О нашей компании
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Мы всегда думаем о ваших мечтах
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">ТОО "Элестри Плюс"</strong> — современная строительная компания, 
                  специализирующаяся на устойчивых строительных практиках. Мы используем экологически чистые материалы, 
                  энергоэффективные системы и экологически сознательные проекты для снижения воздействия на окружающую среду.
                </p>
              </div>
              
              {/* Feature grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Узнать больше о нас
                </button>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-card rounded-2xl p-8 shadow-card">
            {counters.map((counter, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-primary" />
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
    </section>
  );
};

export default AboutSection;
