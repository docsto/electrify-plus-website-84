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
    <section id="advantages" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
                Почему нас выбирают
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Профессиональный подход, надежность и качество на каждом этапе работы
            </p>
          </div>

          {/* Сетка преимуществ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Градиентный фон при ховере */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                      <advantage.icon className="w-10 h-10 text-primary group-hover:text-white transition-all duration-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Дополнительный призыв к действию */}
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-background-dark to-gray-900 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="grid md:grid-cols-2 min-h-[500px]">
              {/* Левая часть - логотип на градиентном фоне */}
              <div className="bg-gradient-to-br from-primary via-primary-glow to-orange-400 flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="w-56 h-56 flex items-center justify-center relative z-10 group">
                  <img 
                    src="/lovable-uploads/3d2379cc-e5aa-4b7d-ad74-5d3d2b69c5f7.png" 
                    alt="Электри+ логотип" 
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Правая часть - текст на темном фоне */}
              <div className="bg-gradient-to-br from-background-dark to-gray-900 flex items-center justify-center p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
                <div className="text-center max-w-lg relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-8 leading-tight">
                    Нас выбирают, когда нужен надёжный монтаж
                  </h3>
                  <div className="space-y-6 mb-10">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <div className="font-semibold text-white">Государственные и квазигосударственные организации</div>
                    </div>
                    <div className="flex items-center space-x-4 text-left">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <div className="font-semibold text-white">Владельцы бизнеса</div>
                    </div>
                    <div className="flex items-center space-x-4 text-left">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <div className="font-semibold text-white">Строительные организации</div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Все те, кому важны сроки и документация, кто ищет подрядчика, а не источник проблем! 
                    Если вы устали от подрядчиков, которые срывают сроки, игнорируют нормы и не сдают документы — 
                    мы готовы к совместной плодотворной работе!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
