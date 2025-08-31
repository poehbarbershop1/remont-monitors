import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Car } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Телефон",
      primary: "+7 (495) 123-45-67",
      secondary: "Основной номер",
      description: "Ежедневно с 9:00 до 21:00"
    },
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "Экстренная служба",
      primary: "+7 (495) 123-45-68",
      secondary: "Круглосуточно",
      description: "Для срочных случаев 24/7"
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "Email",
      primary: "info@monitorservice.ru",
      secondary: "Основная почта",
      description: "Ответим в течение 2 часов"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-purple-600" />,
      title: "Онлайн чат",
      primary: "Чат на сайте",
      secondary: "Мгновенные ответы",
      description: "Ежедневно с 9:00 до 22:00"
    }
  ];

  const locations = [
    {
      name: "Главный офис",
      address: "Москва, ул. Примерная, 123",
      metro: "м. Примерная",
      phone: "+7 (495) 123-45-67",
      hours: "Пн-Вс: 9:00-21:00",
      services: ["Все виды ремонта", "Диагностика", "Запчасти", "Консультации"]
    },
    {
      name: "Филиал на севере",
      address: "Москва, ул. Северная, 45",
      metro: "м. Северная",
      phone: "+7 (495) 123-45-69",
      hours: "Пн-Сб: 10:00-20:00",
      services: ["Базовый ремонт", "Диагностика", "Выдача устройств"]
    },
    {
      name: "Филиал на юге",
      address: "Москва, ул. Южная, 78",
      metro: "м. Южная",
      phone: "+7 (495) 123-45-70",
      hours: "Пн-Сб: 10:00-20:00",
      services: ["Базовый ремонт", "Диагностика", "Выдача устройств"]
    }
  ];

  const workingHours = [
    { day: "Понедельник", hours: "9:00 - 21:00" },
    { day: "Вторник", hours: "9:00 - 21:00" },
    { day: "Среда", hours: "9:00 - 21:00" },
    { day: "Четверг", hours: "9:00 - 21:00" },
    { day: "Пятница", hours: "9:00 - 21:00" },
    { day: "Суббота", hours: "10:00 - 20:00" },
    { day: "Воскресенье", hours: "10:00 - 20:00" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь 
            с ремонтом и обслуживанием ваших мониторов.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Способы связи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {contact.icon}
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-gray-900 mb-1">{contact.primary}</div>
                  <div className="text-sm text-blue-600 mb-2">{contact.secondary}</div>
                  <div className="text-sm text-gray-600">{contact.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" />
                <Input placeholder="Модель монитора" />
                <Textarea placeholder="Опишите проблему" rows={4} />
                <Button className="w-full">Отправить заявку</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Режим работы</CardTitle>
                <CardDescription>График работы наших офисов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-600">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Экстренная служба: 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Locations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши офисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="text-sm text-blue-600">{location.metro}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-600" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="text-sm">{location.hours}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Услуги:</h4>
                      <div className="space-y-1">
                        {location.services.map((service, idx) => (
                          <div key={idx} className="text-sm text-gray-600">• {service}</div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      <Navigation className="h-4 w-4 mr-2" />
                      Построить маршрут
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Как нас найти</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p>Интерактивная карта с нашими офисами</p>
                  <p className="text-sm mt-2">Здесь будет встроена Яндекс.Карта</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Transport */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <Car className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как добраться</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">На автомобиле</h3>
                <p className="text-sm text-gray-600">Бесплатная парковка рядом с офисом</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">На метро</h3>
                <p className="text-sm text-gray-600">5 минут пешком от станции метро</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">На общественном транспорте</h3>
                <p className="text-sm text-gray-600">Автобусы 123, 456 до остановки "Примерная"</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;