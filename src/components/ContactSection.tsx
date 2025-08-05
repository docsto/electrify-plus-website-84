
import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const ContactSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acd9c23d157a45d27282c5c6d7cca3dfad68972b5014576da846fa403fe819e10&width=530&height=369&lang=ru_RU&scroll=true';
    
    const mapContainer = document.getElementById('yandex-map-container');
    if (mapContainer) {
      // Очищаем контейнер перед добавлением скрипта
      mapContainer.innerHTML = '';
      mapContainer.appendChild(script);
    }

    return () => {
      if (mapContainer) {
        mapContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/5 to-transparent rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">Контакты</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Левая колонка с контактной информацией */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-10 shadow-elegant border border-gray-100 transform hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Наши контакты</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow transition-all duration-500 group-hover:shadow-glow">
                      <MapPin className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2 text-lg">Адрес офиса</div>
                      <div className="text-gray-600 leading-relaxed">
                        г. Петропавловск, проезд А. Шажимбаева, 10, офис 201
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow transition-all duration-500 group-hover:shadow-glow">
                      <Phone className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2 text-lg">Телефон</div>
                      <a 
                        href="tel:+77162000000" 
                        className="text-gray-800 hover:text-primary transition-colors duration-300 font-semibold text-lg"
                      >
                        +7 (716) 200-00-00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow transition-all duration-500 group-hover:shadow-glow">
                      <MessageCircle className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2 text-lg">WhatsApp</div>
                      <a 
                        href="https://wa.me/77162000000" 
                        className="text-gray-800 hover:text-primary transition-colors duration-300 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +7 (716) 200-00-00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow transition-all duration-500 group-hover:shadow-glow">
                      <Mail className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2 text-lg">Email</div>
                      <a 
                        href="mailto:elevator_sko@mail.ru" 
                        className="text-gray-800 hover:text-primary transition-colors duration-300 font-semibold"
                      >
                        elevator_sko@mail.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow transition-all duration-500 group-hover:shadow-glow">
                      <Clock className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2 text-lg">Время работы</div>
                      <div className="text-gray-600 space-y-1 leading-relaxed">
                        <div>Пн-Пт: 9:00 - 18:00</div>
                        <div>Сб: 9:00 - 15:00</div>
                        <div>Вс: выходной</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-6">Как до нас добраться</h4>
                <div className="text-gray-700 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>Остановка общественного транспорта "Шажимбаева"</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>Парковка рядом с офисом</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p>Вход с торца здания, 2-й этаж</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка с картой */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-10 shadow-elegant border border-gray-100 transform hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Мы на карте</h3>
                
                {/* Яндекс карта */}
                <div 
                  id="yandex-map-container" 
                  className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-gray-200"
                ></div>
              </div>

              {/* Быстрые действия */}
              <div className="grid grid-cols-2 gap-6">
                <a 
                  href="tel:+77162000000"
                  className="group text-white p-8 rounded-2xl text-center bg-gradient-to-br from-primary to-primary-glow hover:shadow-glow transform hover:scale-105 transition-all duration-500"
                >
                  <Phone className="w-10 h-10 mx-auto mb-4 group-hover:animate-pulse" />
                  <div className="font-bold text-lg">Позвонить</div>
                </a>
                
                <a 
                  href="https://wa.me/77162000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-white p-8 rounded-2xl text-center bg-gradient-to-br from-green-500 to-green-600 hover:shadow-lg transform hover:scale-105 transition-all duration-500"
                >
                  <MessageCircle className="w-10 h-10 mx-auto mb-4 group-hover:animate-pulse" />
                  <div className="font-bold text-lg">WhatsApp</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
