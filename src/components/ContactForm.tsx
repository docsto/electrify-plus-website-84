
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Phone, User, Send, AlertCircle } from 'lucide-react';
import { validateName, validatePhone, sanitizeInput, RateLimiter } from '@/lib/security';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!RateLimiter.canSubmit()) {
      const remainingTime = Math.ceil(RateLimiter.getRemainingTime() / 1000);
      toast({
        title: "Слишком много попыток",
        description: `Попробуйте снова через ${remainingTime} секунд`,
        variant: "destructive"
      });
      return;
    }
    
    // Validate inputs
    const nameValidation = validateName(formData.name);
    const phoneValidation = validatePhone(formData.phone);
    
    const newErrors = {
      name: nameValidation.error || '',
      phone: phoneValidation.error || ''
    };
    
    setErrors(newErrors);
    
    if (!nameValidation.isValid || !phoneValidation.isValid) {
      toast({
        title: "Ошибка валидации",
        description: "Пожалуйста, исправьте ошибки в форме",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    // Sanitize data before processing
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      phone: sanitizeInput(formData.phone)
    };

    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы перезвоним вам в течение 30 минут",
      });
      setFormData({ name: '', phone: '' });
      setErrors({ name: '', phone: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section className="py-20" style={{backgroundColor: '#e8e8e8'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Левая колонка с информацией */}
            <div className="text-gray-800 space-y-6">
              <h2 className="text-4xl font-bold mb-6">Остались вопросы? Мы перезвоним!</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>Получите бесплатную консультацию по вашему проекту</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Выезд специалиста на объект</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Составление сметы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Расчет сроков выполнения</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Подбор оптимального решения</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-xl">
                <p className="text-lg font-medium mb-2 text-white">Время работы:</p>
                <p className="text-gray-200">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-gray-200">Сб: 9:00 - 15:00</p>
                <p className="text-gray-200 mt-3 text-sm">Звонок и консультация бесплатно!</p>
              </div>
            </div>

            {/* Правая колонка с формой */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Заказать звонок</h3>
                  <p className="text-gray-600">Оставьте заявку и мы свяжемся с вами</p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={50}
                      className={`pl-12 py-3 text-lg border-gray-300 focus:border-primary ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <div className="flex items-center mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={20}
                      className={`pl-12 py-3 text-lg border-gray-300 focus:border-primary ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                    />
                    {errors.phone && (
                      <div className="flex items-center mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    "Отправляем..."
                  ) : (
                    <>
                      Заказать звонок
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
