
import React from 'react';
import { Users, Award, FileCheck, Building, Truck, Clock } from 'lucide-react';

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
    },
    {
      icon: FileCheck,
      title: "НДС и финансовая устойчивость",
      description: "Прозрачная работа с полным документооборотом"
    },
    {
      icon: Building,
      title: "Собственные отделы",
      description: "ПТО, снабжение и охраняемые склады для оборудования"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Основной контент */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Левая колонка с текстом */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">О компании</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-800">ТОО "Элестри Плюс"</strong> — команда специалистов инженерных систем.
                  </p>
                  
                  <p>
                    Мы работаем на объектах промышленного и гражданского назначения, строго по проекту и нормативам. 
                    В штате — опытные электрики, связисты, слаботочники, сварщики.
                  </p>
                  
                  <p>
                    У нас есть лицензия на производимые работы, квалификационные сертификаты на каждого сотрудника. 
                    Собственный отдел ПТО и снабжение, склады для надежного хранения оборудования и материалов.
                  </p>
                  
                  <p>
                    Мы плательщики НДС с положительной финансовой устойчивостью, а это значит что у нас есть всё, 
                    что нужно для стабильной, законной и прозрачной работы.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 font-medium">
                  Наша задача — выполнить монтаж быстро и профессионально, без оттягивания сроков, 
                  с полным комплектом документации. Мы сделаем хорошо там, где другим будет сложно! 
                  Нас привлекают туда, где важен результат!
                </p>
              </div>
            </div>

            {/* Правая колонка с особенностями */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
