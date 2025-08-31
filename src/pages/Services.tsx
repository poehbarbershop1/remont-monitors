import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Wrench, Shield, Clock, Star, Zap, Settings, Tool } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "Диагностика мониторов",
      description: "Комплексная диагностика с использованием профессионального оборудования",
      price: "от 500 ₽",
      time: "30 мин",
      features: ["Тестирование матрицы", "Проверка блока питания", "Диагностика платы управления"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      title: "Ремонт LCD/LED мониторов",
      description: "Профессиональный ремонт жидкокристаллических мониторов",
      price: "от 2000 ₽",
      time: "1-3 дня",
      features: ["Замена матрицы", "Ремонт подсветки", "Замена конденсаторов"]
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Ремонт OLED мониторов",
      description: "Специализированный ремонт OLED дисплеев",
      price: "от 5000 ₽",
      time: "2-5 дней",
      features: ["Замена OLED панели", "Калибровка цветов", "Ремонт драйверов"]
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: "Настройка и калибровка",
      description: "Профессиональная настройка цветопередачи и калибровка",
      price: "от 1500 ₽",
      time: "1-2 часа",
      features: ["Калибровка цветов", "Настройка яркости", "Профилирование"]
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Профилактическое обслуживание",
      description: "Регулярное техническое обслуживание для продления срока службы",
      price: "от 800 ₽",
      time: "1 час",
      features: ["Чистка от пыли", "Проверка соединений", "Обновление ПО"]
    },
    {
      icon: <Tool className="h-8 w-8 text-orange-600" />,
      title: "Замена комплектующих",
      description: "Замена неисправных деталей на оригинальные запчасти",
      price: "от 1000 ₽",
      time: "2-4 часа",
      features: ["Оригинальные запчасти", "Проверка совместимости", "Тестирование"]
    }
  ];

  const additionalServices = [
    "Выездной ремонт на дом или в офис",
    "Корпоративное обслуживание",
    "Обучение персонала",
    "Консультации по выбору мониторов",
    "Установка и настройка",
    "Утилизация старой техники"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по ремонту, диагностике и обслуживанию мониторов всех типов и брендов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <div className="text-right">
                    <Badge variant="secondary">{service.time}</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">Заказать услугу</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Нужна консультация?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Наши специалисты помогут выбрать оптимальное решение для вашего случая
          </p>
          <Button size="lg">
            <Phone className="h-5 w-5 mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;