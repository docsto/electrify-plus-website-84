
import React from 'react';
import { Zap, Wifi, Shield, Settings, Building, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Электромонтажные работы",
      description: "Монтаж силового электрооборудования, кабельных линий, систем освещения и заземления"
    },
    {
      icon: Wifi,
      title: "Сети связи и передачи данных",
      description: "Структурированные кабельные системы, оптоволоконные линии, телекоммуникационное оборудование"
    },
    {
      icon: Shield,
      title: "Системы безопасности",
      description: "Пожарная сигнализация, охранные системы, видеонаблюдение, контроль доступа"
    },
    {
      icon: Settings,
      title: "Автоматизация процессов",
      description: "АСУТП, диспетчеризация, системы управления технологическими процессами"
    },
    {
      icon: Building,
      title: "Инженерные системы зданий",
      description: "Вентиляция, кондиционирование, отопление, водоснабжение, канализация"
    },
    {
      icon: Wrench,
      title: "Техническое обслуживание",
      description: "Плановое ТО, диагностика, ремонт и модернизация инженерных систем"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Чем мы занимаемся</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный комплекс услуг по монтажу инженерных систем для промышленных и гражданских объектов
            </p>
          </div>

          {/* Сетка услуг */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
