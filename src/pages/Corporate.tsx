import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building, Users, Shield, Clock, Star, CheckCircle, Phone, FileText, Truck, Settings } from 'lucide-react';

const Corporate = () => {
  const corporateServices = [
    {
      title: "Абонентское обслуживание",
      description: "Регулярное техническое обслуживание парка мониторов",
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      features: [
        "Плановые профилактические работы",
        "Приоритетное обслуживание",
        "Скидка до 30% на запчасти",
        "Персональный менеджер"
      ],
      price: "от 5000 ₽/мес"
    },
    {
      title: "Выездное обслуживание",
      description: "Ремонт и обслуживание на территории клиента",
      icon: <Truck className="h-8 w-8 text-green-600" />,
      features: [
        "Ремонт на месте",
        "Диагностика в офисе",
        "Установка и настройка",
        "Обучение персонала"
      ],
      price: "от 2000 ₽/выезд"
    },
    {
      title: "Комплексные решения",
      description: "Полный цикл работ с мониторным парком",
      icon: <Building className="h-8 w-8 text-purple-600" />,
      features: [
        "Аудит существующего оборудования",
        "Рекомендации по модернизации",
        "Поставка нового оборудования",
        "Утилизация старой техники"
      ],
      price: "по запросу"
    }
  ];

  const clientTypes = [
    {
      type: "Малый бизнес",
      description: "До 50 мониторов",
      benefits: ["Скидка 10%", "Гибкий график", "Быстрое реагирование"],
      minContract: "от 10000 ₽/мес"
    },
    {
      type: "Средний бизнес",
      description: "50-200 мониторов",
      benefits: ["Скидка 20%", "Персональный менеджер", "Приоритетная поддержка"],
      minContract: "от 25000 ₽/мес",
      popular: true
    },
    {
      type: "Крупные предприятия",
      description: "200+ мониторов",
      benefits: ["Скидка 30%", "Индивидуальные условия", "SLA соглашение"],
      minContract: "от 50000 ₽/мес"
    }
  ];

  const advantages = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Быстрое реагирование",
      description: "Выезд специалиста в течение 4 часов"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Расширенная гарантия",
      description: "До 24 месяцев гарантии на корпоративные контракты"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Команда экспертов",
      description: "Сертифицированные специалисты с опытом работы в корпоративном секторе"
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: "Индивидуальный подход",
      description: "Персональные решения под специфику вашего бизнеса"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Корпоративное обслуживание</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональное обслуживание мониторного парка для бизнеса. 
            Индивидуальные условия, расширенная гарантия и приоритетная поддержка.
          </p>
        </div>

        {/* Corporate Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Корпоративные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  <Button className="w-full">Получить предложение</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Client Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Тарифные планы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${client.popular ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader className="text-center">
                  {client.popular && (
                    <Badge className="w-fit mx-auto mb-4">Популярный</Badge>
                  )}
                  <CardTitle className="text-xl">{client.type}</CardTitle>
                  <CardDescription>{client.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600">{client.minContract}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {client.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Выбрать план</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Преимущества работы с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Запрос коммерческого предложения</CardTitle>
              <CardDescription>Заполните форму и получите индивидуальное предложение</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Название компании" />
                <Input placeholder="Контактное лицо" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Телефон" />
                <Input placeholder="Email" />
              </div>
              <Input placeholder="Количество мониторов" />
              <Textarea placeholder="Дополнительная информация о ваших потребностях" rows={4} />
              <Button className="w-full">Отправить запрос</Button>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Готовы обсудить сотрудничество?</h2>
          <p className="text-xl mb-6">Свяжитесь с нами для получения персонального предложения</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Связаться с менеджером
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <FileText className="h-5 w-5 mr-2" />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Corporate;