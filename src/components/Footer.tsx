
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Левая колонка - информация о компании */}
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/16a8e9a1-d634-47a2-99e6-11df23c55e76.png" 
                alt="Электри+" 
                className="h-12 w-auto"
              />
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Профессиональный монтаж инженерных систем и сетей. 
                Лицензии, НДС, полная документация в срок.
              </p>
              
              <div className="space-y-2 text-sm text-gray-400">
                <div><strong>БИН:</strong> 150640011294</div>
                <div><strong>ТОО "Элестри Плюс"</strong></div>
              </div>
            </div>

            {/* Средняя колонка - контакты */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Контакты</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    г. Петропавловск, проезд А. Шажимбаева, 10, офис 201
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+77162000000" 
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    +7 (716) 200-00-00
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:elevator_sko@mail.ru" 
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    elevator_sko@mail.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Правая колонка - услуги */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Услуги</h3>
              
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Электромонтажные работы</li>
                <li>• Сети связи и передачи данных</li>
                <li>• Системы безопасности</li>
                <li>• Автоматизация процессов</li>
                <li>• Инженерные системы зданий</li>
                <li>• Техническое обслуживание</li>
              </ul>
            </div>
          </div>

          {/* Разделитель */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Нижняя часть */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Элестри Плюс. Все права защищены.
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="tel:+77162000000"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Позвонить
              </a>
              <a 
                href="https://wa.me/77162000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:elevator_sko@mail.ru"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
