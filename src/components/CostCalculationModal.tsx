import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { validateName, validatePhone, sanitizeInput, checkRateLimit } from '@/lib/security';

interface CostCalculationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CostCalculationModal = ({ isOpen, onClose }: CostCalculationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    area: '',
    services: [] as string[],
    description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const serviceOptions = [
    'связи и передачи данных',
    'электропередач',
    'пожарной и охранной безопасности',
    'комплексной автоматизации инженерных систем',
    'производственных процессов'
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

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

    if (!formData.projectType) {
      newErrors.projectType = 'Выберите тип объекта';
    }

    if (!formData.area || isNaN(Number(formData.area)) || Number(formData.area) <= 0) {
      newErrors.area = 'Введите корректную площадь';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Выберите хотя бы одну услугу';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkRateLimit('costCalculation')) {
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
        email: sanitizeInput(formData.email),
        projectType: sanitizeInput(formData.projectType),
        area: sanitizeInput(formData.area),
        services: formData.services.map(sanitizeInput),
        description: sanitizeInput(formData.description),
      };

      const response = await fetch('https://formspree.io/f/xjkowjjz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...sanitizedData,
          subject: 'Запрос на расчет стоимости',
          services: sanitizedData.services.join(', '),
        }),
      });

      if (response.ok) {
        toast({
          title: "Запрос отправлен!",
          description: "Мы свяжемся с вами для расчета стоимости.",
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          area: '',
          services: [],
          description: '',
        });
        setErrors({});
        onClose();
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить запрос. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Расчет стоимости монтажа</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+7 (999) 123-45-67"
                className={errors.phone ? 'border-destructive' : ''}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Тип объекта *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
                <SelectTrigger className={errors.projectType ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Выберите тип объекта" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Офисное здание</SelectItem>
                  <SelectItem value="residential">Жилой комплекс</SelectItem>
                  <SelectItem value="industrial">Промышленный объект</SelectItem>
                  <SelectItem value="retail">Торговый центр</SelectItem>
                  <SelectItem value="warehouse">Склад</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && <p className="text-sm text-destructive">{errors.projectType}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="area">Площадь (м²) *</Label>
              <Input
                id="area"
                type="number"
                value={formData.area}
                onChange={(e) => setFormData(prev => ({ ...prev, area: e.target.value }))}
                placeholder="1000"
                className={errors.area ? 'border-destructive' : ''}
              />
              {errors.area && <p className="text-sm text-destructive">{errors.area}</p>}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Требуемые услуги *</Label>
            <div className="grid grid-cols-1 gap-3">
              {serviceOptions.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={formData.services.includes(service)}
                    onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                  />
                  <Label htmlFor={service} className="text-sm font-normal">{service}</Label>
                </div>
              ))}
            </div>
            {errors.services && <p className="text-sm text-destructive">{errors.services}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Дополнительная информация</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Опишите особенности проекта, сроки, дополнительные требования..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
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

export default CostCalculationModal;