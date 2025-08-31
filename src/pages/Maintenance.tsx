import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Shield, Settings, Wrench, CheckCircle, Clock, Star } from 'lucide-react';

const Maintenance = () => {
  const maintenancePlans = [
    {
      title: "Базовое обслуживание",
      price: "1500 ₽",
      period: "раз в 6 месяцев",
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      features: [
        "Внешняя чистка корпуса",
        "Проверка кабелей и соединений",
        "Базовая диагностика",
        "Обновление драйверов",
        "Проверка настроек"
      ]
    },
    {
      title: "Стандартное обслуживание",
      price: "2500 ₽",
      period: "раз в 4 месяца",
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      features: [
        "Все услуги базового пакета",
        "Внутренняя чистка от пыли",
        "Проверка температурного режима",
        "Калибровка цветов",
        "Профилактика компонентов",
        "Отчет о состоянии"
      ],
      popular: true
    },
    {
      title: "Премиум обслуживание",
      price: "4000 ₽",
      period: "раз в 3 месяца",
      icon: <Star className="h-8 w-8 text-purple-600" />,
      features: [
        "Все услуги стандартного пакета",
        "Глубокая диагностика компонентов",
        "Замена термопасты",
        "Проверка всех разъемов",
        "Настройка профилей",
        "Приоритетная поддержка",
        "Выездное обслуживание"
      ]
    }
  ];

  const maintenanceServices = [
    {
      title: "Профилактическая чистка",
      description: "Удаление пыли и загрязнений из внутренних компонентов",
      price: "800 ₽",
      time: "30 мин"
    },
    {
      title: "Калибровка дисплея",
      description: "Настройка цветопередачи и яркости для оптимального изображения",
      price: "1200 ₽",
      time: "45 мин"
    },
    {
      title: "Обновление прошивки",
      description: "Установка последних версий микропрограмм",
      price: "600 ₽",
      time: "20 мин"
    },
    {
      title: "Проверка температурного режима",
      description: "Контроль нагрева и работы системы охлаждения",
      price: "500 ₽",
      time: "15 мин"
    },
    {
      title: "Настройка профилей",
      description: "Создание пользовательских профилей для разных задач",
      price: "1000 ₽",
      time: "30 мин"
    },
    {
      title: "Проверка портов и кабелей",
      description: "Диагностика всех соединений и разъемов",
      price: "400 ₽",
      time: "15 мин"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Продление срока службы",
      description: "Регулярное обслуживание увеличивает срок работы монитора на 40-60%"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Предотвращение поломок",
      description: "Выявление потенциальных проблем до их критического развития"
    },
    {
      icon: <Star className="h-8 w-8 text-purple-600" />,
      title: "Оптимальная производительность",
      description: "Поддержание максимального качества изображения и функций"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Экономия средств",
      description: "Профилактика дешевле капитального ремонта в 3-5 раз"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Техническое обслуживание мониторов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Регулярное профессиональное обслуживание для поддержания оптимальной работы 
            ваших мониторов и предотвращения дорогостоящих поломок.
          </p>
        </div>

        {/* Maintenance Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Планы обслуживания</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader className="text-center">
                  {plan.popular && (
                    <Badge className="w-fit mx-auto mb-4">Популярный</Badge>
                  )}
                  <div className="mx-auto mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                  <CardDescription>{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Выбрать план</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Individual Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Отдельные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <Badge variant="outline">{service.time}</Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  <Button className="w-full">Заказать услугу</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Преимущества регулярного обслуживания</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Schedule Section */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <div className="text-center">
            <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Запланировать обслуживание</h2>
            <p className="text-xl text-gray-600 mb-6">
              Выберите удобное время для планового технического обслуживания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Записаться на обслуживание
              </Button>
              <Button size="lg" variant="outline">
                Заказать выезд мастера
              </Button>
            </div>
          </div>
        </section>

        {/* Corporate Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Корпоративное обслуживание</h2>
            <p className="text-xl mb-6">
              Специальные условия для организаций: договоры на обслуживание, 
              скидки от 15%, приоритетное обслуживание
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Узнать условия для организаций
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Maintenance;