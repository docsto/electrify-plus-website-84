
import React from 'react';
import { Building, Factory, Home, Shield } from 'lucide-react';

const ProjectsSection = () => {
  const clients = [
    "АО «НК «КазМунайГаз»",
    "ТОО «КазТрансОйл»",
    "АО «KEGOC»",
    "ТОО «Петропавловск-Водоканал»",
    "Акимат СКО",
    "АО «СевКазЭнерго»",
    "ТОО «Казахстанская Медная Компания»",
    "ТОО «Костанайские Минералы»"
  ];

  const projects = [
    {
      icon: Factory,
      title: "Промышленные объекты",
      description: "Нефтегазовые предприятия, энергетические объекты, горнодобывающие комплексы",
      count: "150+ объектов"
    },
    {
      icon: Building,
      title: "Коммерческие здания",
      description: "Офисные центры, торговые комплексы, гостиницы, складские помещения",
      count: "200+ объектов"
    },
    {
      icon: Shield,
      title: "Государственные объекты",
      description: "Административные здания, социальные учреждения, объекты инфраструктуры",
      count: "80+ объектов"
    },
    {
      icon: Home,
      title: "Жилые комплексы",
      description: "Многоквартирные дома, коттеджные поселки, инженерные сети",
      count: "120+ объектов"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">С нами работают</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Крупнейшие предприятия и организации доверяют нам монтаж инженерных систем
            </p>
          </div>

          {/* Клиенты */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Наши клиенты</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-sm font-medium text-gray-700">{client}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Типы объектов */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-12">Наши объекты</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-primary mb-2">{project.count}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{project.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Призыв к действию */}
          <div className="mt-16 text-center bg-primary text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Готовы стать нашим следующим успешным проектом?</h3>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Присоединяйтесь к списку довольных клиентов, которые доверили нам монтаж инженерных систем
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
