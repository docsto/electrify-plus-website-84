import React from 'react';
import { CheckCircle, Star, Shield, Users, Building, Clock, FileText } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Star,
      title: "Многолетний опыт и репутация",
      description: "Успешная работа на рынке монтажа инженерных систем"
    },
    {
      icon: Shield,
      title: "Лицензия и подтвержденная квалификация",
      description: "Все необходимые разрешения и сертификаты специалистов"
    },
    {
      icon: CheckCircle,
      title: "НДС и финансовая устойчивость",
      description: "Прозрачная работа с документооборотом"
    },
    {
      icon: Users,
      title: "Штатные инженеры и монтажники",
      description: "Собственная команда профессионалов"
    },
    {
      icon: Building,
      title: "Собственные отделы ПТО и снабжения",
      description: "Охраняемые склады и полная логистика"
    },
    {
      icon: FileText,
      title: "Монтаж + исполнительная документация в срок",
      description: "Полный пакет документов по завершении работ"
    },
    {
      icon: Clock,
      title: "Не затягиваем объекты",
      description: "Находим решения в трудных ситуациях, доводим до конца!"
    }
  ];

  return (
    <section id="advantages" className="py-24 relative overflow-hidden bg-background-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-20 bg-primary/20 rotate-45"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-primary/20 transform rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-2 h-16 bg-primary/25 rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-primary font-medium text-lg tracking-wider uppercase">Наши преимущества</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Почему нас выбирают
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Профессиональный подход, надежность и качество на каждом этапе работы
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 hover:bg-white/10 relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-500 group-hover:scale-110">
                      <advantage.icon className="w-10 h-10 text-primary group-hover:text-white transition-all duration-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 md:p-16 text-center border border-primary/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-primary/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Нас выбирают, когда нужен надёжный монтаж
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Государственные организации</h4>
                  <p className="text-gray-300">Квазигосударственные структуры</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Владельцы бизнеса</h4>
                  <p className="text-gray-300">Частные предприниматели</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Строительные организации</h4>
                  <p className="text-gray-300">Крупные подрядчики</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-xl text-gray-200 leading-relaxed">
                  <strong className="text-white">Все те, кому важны сроки и документация</strong>, кто ищет подрядчика, а не источник проблем! 
                  Если вы устали от подрядчиков, которые срывают сроки, игнорируют нормы и не сдают документы — 
                  <strong className="text-primary"> мы готовы к совместной плодотворной работе!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
