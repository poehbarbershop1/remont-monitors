import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MessageCircle, Video, Clock, CheckCircle, Star, Users, Headphones } from 'lucide-react';

const Consultation = () => {
  const consultationTypes = [
    {
      title: "Телефонная консультация",
      description: "Быстрая помощь по телефону для решения простых вопросов",
      price: "Бесплатно",
      time: "5-15 мин",
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      features: ["Диагностика по симптомам", "Советы по устранению", "Рекомендации по ремонту"]
    },
    {
      title: "Онлайн консультация",
      description: "Видеосвязь с демонстрацией проблемы",
      price: "500 ₽",
      time: "15-30 мин",
      icon: <Video className="h-8 w-8 text-green-600" />,
      features: ["Визуальная диагностика", "Пошаговые инструкции", "Запись консультации"],
      popular: true
    },
    {
      title: "Персональная консультация",
      description: "Индивидуальная встреча с экспертом в сервисе",
      price: "1000 ₽",
      time: "30-60 мин",
      icon: <Users className="h-8 w-8 text-purple-600" />,
      features: ["Детальный осмотр", "Профессиональные рекомендации", "План ремонта", "Смета работ"]
    }
  ];

  const expertAreas = [
    {
      name: "Игровые мониторы",
      expert: "Алексей Петров",
      experience: "8 лет",
      specialization: "High refresh rate, G-Sync/FreeSync, HDR",
      rating: 4.9
    },
    {
      name: "Профессиональные дисплеи",
      expert: "Мария Сидорова",
      experience: "12 лет",
      specialization: "Цветокоррекция, калибровка, графический дизайн",
      rating: 4.8
    },
    {
      name: "OLED технологии",
      expert: "Дмитрий Козлов",
      experience: "6 лет",
      specialization: "OLED панели, выгорание пикселей, HDR",
      rating: 4.9
    },
    {
      name: "Ультраширокие мониторы",
      expert: "Елена Волкова",
      experience: "10 лет",
      specialization: "Curved дисплеи, многомониторные системы",
      rating: 4.7
    }
  ];

  const consultationTopics = [
    "Выбор монитора для конкретных задач",
    "Настройка цветопередачи",
    "Решение проблем с изображением",
    "Совместимость с видеокартами",
    "Калибровка для профессиональной работы",
    "Настройка игровых функций",
    "Проблемы с подключением",
    "Оптимизация рабочего места"
  ];

  const supportSchedule = [
    { time: "9:00 - 18:00", type: "Все виды консультаций", availability: "Полная поддержка" },
    { time: "18:00 - 22:00", type: "Телефон и онлайн", availability: "Дежурный специалист" },
    { time: "22:00 - 9:00", type: "Только экстренные случаи", availability: "По предварительной записи" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Консультации по мониторам</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получите профессиональную консультацию от наших экспертов. 
            Поможем решить любые вопросы, связанные с мониторами и дисплеями.
          </p>
        </div>

        {/* Quick Contact */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardContent className="p-8">
              <div className="text-center">
                <Headphones className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Бесплатная консультация</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Позвоните прямо сейчас и получите бесплатную консультацию по вашей проблеме
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="h-5 w-5 mr-2" />
                    +7 (495) 123-45-67
                  </Button>
                  <Button size="lg" variant="outline">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Написать в чат
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Consultation Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Виды консультаций</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${consultation.popular ? 'ring-2 ring-green-500' : ''}`}>
                <CardHeader className="text-center">
                  {consultation.popular && (
                    <Badge className="w-fit mx-auto mb-4 bg-green-600">Популярная</Badge>
                  )}
                  <div className="mx-auto mb-4">
                    {consultation.icon}
                  </div>
                  <CardTitle className="text-xl">{consultation.title}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{consultation.price}</div>
                  <Badge variant="outline">{consultation.time}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{consultation.description}</CardDescription>
                  <ul className="space-y-2 mb-6">
                    {consultation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Expert Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши эксперты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertAreas.map((expert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{expert.name}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600">
                        {expert.expert}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-semibold">{expert.rating}</span>
                      </div>
                      <Badge variant="outline">{expert.experience}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Специализация:</h4>
                    <p className="text-gray-600">{expert.specialization}</p>
                  </div>
                  <Button className="w-full">Записаться к эксперту</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Consultation Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Популярные темы консультаций</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {consultationTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <div className="font-medium">{topic}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">График работы поддержки</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {supportSchedule.map((schedule, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">{schedule.time}</div>
                        <div className="text-sm text-gray-600">{schedule.type}</div>
                      </div>
                    </div>
                    <Badge variant="outline">{schedule.availability}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Consultation Form */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Записаться на консультацию</CardTitle>
              <CardDescription>Заполните форму и мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
              </div>
              <Input placeholder="Email" />
              <Input placeholder="Модель монитора" />
              <Textarea placeholder="Опишите вашу проблему или вопрос" rows={4} />
              <Button className="w-full">Отправить заявку</Button>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Получите экспертную консультацию</h2>
          <p className="text-xl mb-6">Наши специалисты готовы ответить на любые вопросы о мониторах</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageCircle className="h-5 w-5 mr-2" />
              Онлайн чат
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consultation;