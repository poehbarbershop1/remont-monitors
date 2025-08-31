import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Users, Clock, Certificate, BookOpen, Video, Star, CheckCircle } from 'lucide-react';

const Training = () => {
  const courses = [
    {
      title: "Основы ремонта мониторов",
      level: "Начинающий",
      duration: "16 часов",
      price: "15000 ₽",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      description: "Базовый курс для начинающих мастеров",
      topics: [
        "Устройство LCD/LED мониторов",
        "Основные неисправности",
        "Инструменты и оборудование",
        "Техника безопасности",
        "Практические работы"
      ]
    },
    {
      title: "Продвинутый ремонт",
      level: "Продвинутый",
      duration: "24 часа",
      price: "25000 ₽",
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      description: "Углубленное изучение сложных неисправностей",
      topics: [
        "Ремонт OLED дисплеев",
        "Микросхемотехника",
        "Работа с осциллографом",
        "Прошивка контроллеров",
        "Сложные случаи ремонта"
      ],
      popular: true
    },
    {
      title: "Калибровка и настройка",
      level: "Специализированный",
      duration: "12 часов",
      price: "18000 ₽",
      icon: <Certificate className="h-8 w-8 text-purple-600" />,
      description: "Профессиональная калибровка дисплеев",
      topics: [
        "Теория цвета",
        "Калибровочное оборудование",
        "Создание ICC профилей",
        "Настройка для разных задач",
        "Сертификация работ"
      ]
    }
  ];

  const corporatePrograms = [
    {
      title: "Обучение IT-отделов",
      description: "Курсы для системных администраторов и IT-специалистов",
      duration: "8 часов",
      participants: "до 10 человек",
      price: "50000 ₽"
    },
    {
      title: "Тренинг для сервисных центров",
      description: "Специализированное обучение для сотрудников сервисных центров",
      duration: "16 часов",
      participants: "до 6 человек",
      price: "80000 ₽"
    },
    {
      title: "Мастер-классы для дизайнеров",
      description: "Обучение правильной настройке мониторов для графического дизайна",
      duration: "4 часа",
      participants: "до 15 человек",
      price: "30000 ₽"
    }
  ];

  const benefits = [
    {
      icon: <Certificate className="h-8 w-8 text-blue-600" />,
      title: "Сертификат",
      description: "Официальный сертификат о прохождении обучения"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Малые группы",
      description: "Обучение в группах до 8 человек для лучшего усвоения"
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: "Практика",
      description: "70% времени - практические занятия на реальном оборудовании"
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: "Поддержка",
      description: "3 месяца бесплатной поддержки после окончания курса"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Обучение ремонту мониторов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные курсы по ремонту и обслуживанию мониторов. 
            Обучение от практикующих экспертов с выдачей сертификатов.
          </p>
        </div>

        {/* Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Курсы обучения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${course.popular ? 'ring-2 ring-green-500' : ''}`}>
                <CardHeader className="text-center">
                  {course.popular && (
                    <Badge className="w-fit mx-auto mb-4 bg-green-600">Популярный</Badge>
                  )}
                  <div className="mx-auto mb-4">
                    {course.icon}
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <div className="flex justify-center space-x-2 mb-2">
                    <Badge variant="outline">{course.level}</Badge>
                    <Badge variant="secondary">{course.duration}</Badge>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">{course.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{course.description}</CardDescription>
                  <h4 className="font-semibold mb-2">Программа курса:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Записаться на курс</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Corporate Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Корпоративные программы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporatePrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Длительность:</span>
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Участники:</span>
                      <span className="font-semibold">{program.participants}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{program.price}</div>
                  <Button className="w-full">Заказать обучение</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Преимущества обучения</h2>
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

        {/* Schedule Info */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <div className="text-center">
            <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Расписание занятий</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">Будние дни</div>
                <div className="text-gray-600">10:00 - 18:00</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600 mb-2">Выходные</div>
                <div className="text-gray-600">10:00 - 16:00</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-600 mb-2">Индивидуально</div>
                <div className="text-gray-600">По договоренности</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Начните обучение уже сегодня</h2>
          <p className="text-xl mb-6">Получите востребованную профессию или повысьте квалификацию</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <GraduationCap className="h-5 w-5 mr-2" />
              Записаться на курс
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Скачать программу
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Training;