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
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Почему нас выбирают</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный подход, надежность и качество на каждом этапе работы
            </p>
          </div>

          {/* Сетка преимуществ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group text-center p-8 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
                    <advantage.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Дополнительный призыв к действию */}
          <div className="mt-16 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 min-h-[400px]">
              {/* Левая часть - логотип на оранжевом фоне */}
              <div className="bg-orange-500 flex items-center justify-center p-12">
                <div className="w-48 h-48 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/3d2379cc-e5aa-4b7d-ad74-5d3d2b69c5f7.png" 
                    alt="Электри+ логотип" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Правая часть - текст на черном фоне */}
              <div className="bg-black flex items-center justify-center p-8">
                <div className="text-center max-w-lg">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Нас выбирают, когда нужен надёжный монтаж
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="text-center">
                      <div className="font-semibold text-white mb-2">Государственные и квазигосударственные организации</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-white mb-2">Владельцы бизнеса</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-white mb-2">Строительные организации</div>
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
