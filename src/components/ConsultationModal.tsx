import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { validateName, validatePhone, sanitizeInput, checkRateLimit } from '@/lib/security';
import { Phone, Clock } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    question: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    const nameValidation = validateName(formData.name);
    if (!nameValidation.isValid) {
      newErrors.name = nameValidation.error || 'Некорректное имя';
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.error || 'Некорректный телефон';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkRateLimit('consultation')) {
      toast({
        title: "Ошибка",
        description: "Слишком много запросов. Попробуйте позже.",
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        phone: sanitizeInput(formData.phone),
        preferredTime: sanitizeInput(formData.preferredTime),
        question: sanitizeInput(formData.question),
      };

      const response = await fetch('https://formspree.io/f/xjkowjjz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...sanitizedData,
          subject: 'Заказ консультации',
          message: `Заявка на консультацию:
Имя: ${sanitizedData.name}
Телефон: ${sanitizedData.phone}
Предпочтительное время: ${sanitizedData.preferredTime || 'Не указано'}
Вопрос: ${sanitizedData.question || 'Не указан'}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время для консультации.",
        });
        setFormData({
          name: '',
          phone: '',
          preferredTime: '',
          question: '',
        });
        setErrors({});
        onClose();
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            Заказать консультацию
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-sm text-gray-600 mb-4">
          Оставьте ваши контакты и мы перезвоним в удобное для вас время
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="consultation-name">Ваше имя *</Label>
            <Input
              id="consultation-name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Введите ваше имя"
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="consultation-phone">Номер телефона *</Label>
            <Input
              id="consultation-phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+7 (999) 123-45-67"
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="consultation-time" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Удобное время для звонка
            </Label>
            <Input
              id="consultation-time"
              value={formData.preferredTime}
              onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
              placeholder="Например: с 10:00 до 18:00 в будни"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="consultation-question">Ваш вопрос</Label>
            <Textarea
              id="consultation-question"
              value={formData.question}
              onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
              placeholder="Кратко опишите ваш вопрос или проект..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;