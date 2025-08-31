import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Wrench, Shield, Clock, Star, Zap, Tool, CheckCircle } from 'lucide-react';

const Repair = () => {
  const repairTypes = [
    {
      category: "LCD/LED мониторы",
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      services: [
        { name: "Замена матрицы", price: "от 3000 ₽", time: "1-2 дня" },
        { name: "Ремонт подсветки", price: "от 2000 ₽", time: "1 день" },
        { name: "Замена блока питания", price: "от 1500 ₽", time: "4-6 часов" },
        { name: "Ремонт платы управления", price: "от 2500 ₽", time: "1-2 дня" }
      ]
    },
    {
      category: "OLED мониторы",
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      services: [
        { name: "Замена OLED панели", price: "от 8000 ₽", time: "2-3 дня" },
        { name: "Ремонт драйверов", price: "от 4000 ₽", time: "1-2 дня" },
        { name: "Калибровка цветов", price: "от 2000 ₽", time: "2-4 часа" },
        { name: "Замена контроллера", price: "от 5000 ₽", time: "2-3 дня" }
      ]
    },
    {
      category: "Игровые мониторы",
      icon: <Star className="h-8 w-8 text-green-600" />,
      services: [
        { name: "Ремонт высокочастотной развертки", price: "от 3500 ₽", time: "1-2 дня" },
        { name: "Настройка G-Sync/FreeSync", price: "от 1500 ₽", time: "2-3 часа" },
        { name: "Замена портов DisplayPort/HDMI", price: "от 2000 ₽", time: "4-6 часов" },
        { name: "Ремонт системы охлаждения", price: "от 1800 ₽", time: "1 день" }
      ]
    }
  ];

  const repairProcess = [
    {
      step: 1,
      title: "Прием заявки",
      description: "Регистрация устройства и описание проблемы"
    },
    {
      step: 2,
      title: "Диагностика",
      description: "Полная диагностика для выявления всех неисправностей"
    },
    {
      step: 3,
      title: "Согласование",
      description: "Согласование стоимости и сроков ремонта с клиентом"
    },
    {
      step: 4,
      title: "Ремонт",
      description: "Выполнение ремонтных работ квалифицированными мастерами"
    },
    {
      step: 5,
      title: "Тестирование",
      description: "Проверка качества ремонта и всех функций устройства"
    },
    {
      step: 6,
      title: "Выдача",
      description: "Выдача отремонтированного монитора с гарантией"
    }
  ];

  const warranties = [
    { type: "Стандартная гарантия", period: "6 месяцев", description: "На все виды ремонтных работ" },
    { type: "Расширенная гарантия", period: "12 месяцев", description: "При замене основных компонентов" },
    { type: "Премиум гарантия", period: "24 месяца", description: "На дорогостоящие компоненты" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ремонт мониторов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональный ремонт мониторов всех типов и брендов. 
            Используем только оригинальные запчасти с гарантией до 24 месяцев.
          </p>
        </div>

        {/* Repair Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Виды ремонта</h2>
          <Tabs defaultValue="lcd" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="lcd">LCD/LED</TabsTrigger>
              <TabsTrigger value="oled">OLED</TabsTrigger>
              <TabsTrigger value="gaming">Игровые</TabsTrigger>
            </TabsList>
            
            {repairTypes.map((type, index) => (
              <TabsContent key={index} value={index === 0 ? "lcd" : index === 1 ? "oled" : "gaming"}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {type.icon}
                      <CardTitle className="text-2xl">{type.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {type.services.map((service, idx) => (
                        <div key={idx} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">{service.name}</h4>
                            <Badge variant="outline">{service.time}</Badge>
                          </div>
                          <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                          <Button size="sm" className="w-full">Заказать ремонт</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Repair Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Процесс ремонта</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {repairProcess.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Warranty Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Гарантийные условия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {warranties.map((warranty, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{warranty.type}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{warranty.period}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{warranty.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Repair */}
        <section className="bg-red-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <Clock className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Срочный ремонт</h2>
            <p className="text-xl text-gray-600 mb-6">
              Экстренный ремонт в течение 24 часов с доплатой 50% к стоимости работ
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Заказать срочный ремонт
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Готовы отремонтировать ваш монитор?</h2>
          <p className="text-xl mb-6">Свяжитесь с нами для бесплатной консультации и оценки стоимости</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Заказать ремонт
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Repair;