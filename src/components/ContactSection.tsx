
import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Левая колонка с контактной информацией */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Наши контакты</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">Адрес офиса</div>
                      <div className="text-gray-600">
                        г. Петропавловск, проезд А. Шажимбаева, 10, офис 201
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">Телефон</div>
                      <a 
                        href="tel:+77162000000" 
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        +7 (716) 200-00-00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">WhatsApp</div>
                      <a 
                        href="https://wa.me/77162000000" 
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +7 (716) 200-00-00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">Email</div>
                      <a 
                        href="mailto:elevator_sko@mail.ru" 
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        elevator_sko@mail.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">Время работы</div>
                      <div className="text-gray-600">
                        <div>Пн-Пт: 9:00 - 18:00</div>
                        <div>Сб: 9:00 - 15:00</div>
                        <div>Вс: выходной</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Как до нас добраться</h4>
                <div className="text-gray-600 space-y-2">
                  <p>• Остановка общественного транспорта "Шажимбаева"</p>
                  <p>• Парковка рядом с офисом</p>
                  <p>• Вход с торца здания, 2-й этаж</p>
                </div>
              </div>
            </div>

            {/* Правая колонка с картой */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Мы на карте</h3>
                
                {/* Карта-заглушка */}
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto" />
                    <div className="text-gray-600">
                      <div className="font-medium">г. Петропавловск</div>
                      <div className="text-sm">проезд А. Шажимбаева, 10, офис 201</div>
                    </div>
                    <button 
                      onClick={() => window.open('https://maps.google.com/?q=Петропавловск проезд Шажимбаева 10', '_blank')}
                      className="text-blue-600 hover:text-blue-700 text-sm underline"
                    >
                      Открыть в Google Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* Быстрые действия */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+77162000000"
                  className="bg-blue-600 text-white p-6 rounded-xl text-center hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold">Позвонить</div>
                </a>
                
                <a 
                  href="https://wa.me/77162000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-6 rounded-xl text-center hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold">WhatsApp</div>
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
