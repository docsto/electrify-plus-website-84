import React from 'react';
import { FaCheckCircle, FaTools, FaUsers, FaClock } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCheckCircle className="icon" />,
      title: "Гарантия качества",
      description: "Все работы выполняются согласно ГОСТ и СНиП с официальной гарантией до 5 лет"
    },
    {
      icon: <FaTools className="icon" />,
      title: "Современное оборудование",
      description: "Используем профессиональный инструмент и материалы ведущих мировых брендов"
    },
    {
      icon: <FaUsers className="icon" />,
      title: "Опытные специалисты",
      description: "Команда аттестованных электриков со стажем от 10 лет"
    },
    {
      icon: <FaClock className="icon" />,
      title: "Соблюдение сроков",
      description: "Четкое планирование работ и гарантированное выполнение в оговоренные сроки"
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Нас выбирают когда нужен надежный монтаж</h2>
          <p>Более 500 довольных клиентов и 10 лет на рынке электромонтажных услуг</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
