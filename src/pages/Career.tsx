import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Users, Briefcase, GraduationCap, Heart, Star, TrendingUp, Clock, MapPin } from 'lucide-react';

const Career = () => {
  const openPositions = [
    {
      title: "Мастер по ремонту мониторов",
      department: "Технический отдел",
      type: "Полная занятость",
      experience: "От 2 лет",
      salary: "80 000 - 120 000 ₽",
      location: "Москва",
      requirements: [
        "Опыт ремонта электроники от 2 лет",
        "Знание схемотехники",
        "Умение работать с паяльным оборудованием",
        "Ответственность и внимательность"
      ],
      responsibilities: [
        "Диагностика неисправностей мониторов",
        "Выполнение ремонтных работ",
        "Ведение документации",
        "Консультирование клиентов"
      ]
    },
    {
      title: "Специалист по диагностике",
      department: "Технический отдел",
      type: "Полная занятость",
      experience: "От 1 года",
      salary: "60 000 - 90 000 ₽",
      location: "Москва",
      requirements: [
        "Техническое образование",
        "Базовые знания электроники",
        "Умение работать с измерительными приборами",
        "Коммуникабельность"
      ],
      responsibilities: [
        "Проведение диагностики устройств",
        "Составление отчетов о неисправностях",
        "Работа с клиентами",
        "Ведение базы данных"
      ]
    },
    {
      title: "Менеджер по работе с клиентами",
      department: "Отдел продаж",
      type: "Полная занятость",
      experience: "От 1 года",
      salary: "50 000 - 80 000 ₽",
      location: "Москва",
      requirements: [
        "Опыт работы с клиентами",
        "Знание основ техники",
        "Грамотная речь",
        "Стрессоустойчивость"
      ],
      responsibilities: [
        "Прием заявок от клиентов",
        "Консультирование по услугам",
        "Ведение CRM системы",
        "Контроль качества обслуживания"
      ]
    },
    {
      title: "Курьер-экспедитор",
      department: "Логистика",
      type: "Частичная занятость",
      experience: "Без опыта",
      salary: "40 000 - 60 000 ₽",
      location: "Москва",
      requirements: [
        "Водительские права категории B",
        "Знание Москвы",
        "Ответственность",
        "Пунктуальность"
      ],
      responsibilities: [
        "Доставка и забор техники",
        "Выездная диагностика",
        "Ведение документооборота",
        "Взаимодействие с клиентами"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Забота о сотрудниках",
      description: "ДМС, оплачиваемые больничные, корпоративные мероприятия"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
      title: "Обучение и развитие",
      description: "Курсы повышения квалификации, сертификация, конференции"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Карьерный рост",
      description: "Четкие перспективы роста, повышение зарплаты, новые проекты"
    },
    {
      icon: <Star className="h-8 w-8 text-purple-500" />,
      title: "Современное оборудование",
      description: "Работа с новейшим диагностическим и ремонтным оборудованием"
    }
  ];

  const workingConditions = [
    {
      title: "График работы",
      description: "5/2, с 9:00 до 18:00, гибкий график для некоторых позиций"
    },
    {
      title: "Отпуск",
      description: "28 календарных дней + дополнительные дни за стаж"
    },
    {
      title: "Офис",
      description: "Современный офис в центре Москвы, удобная транспортная доступность"
    },
    {
      title: "Команда",
      description: "Дружный коллектив профессионалов, взаимопомощь и поддержка"
    }
  ];

  const internshipProgram = {
    title: "Программа стажировки",
    duration: "3 месяца",
    salary: "30 000 ₽",
    description: "Возможность получить практический опыт под руководством опытных мастеров",
    requirements: [
      "Техническое образование (студенты старших курсов или выпускники)",
      "Интерес к электронике и ремонту",
      "Желание учиться и развиваться",
      "Ответственность и пунктуальность"
    ],
    program: [
      "Изучение устройства мониторов",
      "Освоение диагностического оборудования",
      "Практика под руководством наставника",
      "Самостоятельное выполнение простых ремонтов"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Карьера в МониторСервис</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Присоединяйтесь к команде профессионалов! Мы предлагаем интересную работу, 
            достойную зарплату и отличные возможности для развития.
          </p>
        </div>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Открытые вакансии</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{position.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline">{position.department}</Badge>
                        <Badge variant="secondary">{position.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{position.salary}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Требования:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Обязанности:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <Badge variant="outline">Опыт: {position.experience}</Badge>
                    <Button>Откликнуться на вакансию</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Что мы предлагаем</h2>
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

        {/* Working Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Условия работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workingConditions.map((condition, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{condition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{condition.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Internship Program */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="text-center">
              <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-3xl">{internshipProgram.title}</CardTitle>
              <div className="flex justify-center space-x-4 mt-4">
                <Badge variant="outline">{internshipProgram.duration}</Badge>
                <Badge className="bg-blue-600">{internshipProgram.salary}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg text-gray-600 mb-8">{internshipProgram.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Требования к стажерам:</h4>
                  <ul className="space-y-2">
                    {internshipProgram.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Программа стажировки:</h4>
                  <ul className="space-y-2">
                    {internshipProgram.program.map((item, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg">Подать заявку на стажировку</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Application Form */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Отправить резюме</CardTitle>
              <CardDescription>Заполните форму и приложите резюме</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Имя" />
                <Input placeholder="Фамилия" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Телефон" />
                <Input placeholder="Email" />
              </div>
              <Input placeholder="Желаемая позиция" />
              <Textarea placeholder="Расскажите о себе и своем опыте" rows={4} />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="text-gray-500">
                  <Briefcase className="h-8 w-8 mx-auto mb-2" />
                  <p>Перетащите файл резюме сюда или</p>
                  <Button variant="outline" className="mt-2">Выберите файл</Button>
                </div>
              </div>
              <Button className="w-full">Отправить заявку</Button>
            </CardContent>
          </Card>
        </section>

        {/* Company Culture */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Корпоративная культура</h2>
            <p className="text-xl text-gray-600 mb-8">
              Мы создаем комфортную рабочую атмосферу, где каждый сотрудник может развиваться и достигать целей
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                <div className="text-gray-600">Рейтинг работодателя</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Довольных сотрудников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2.5 года</div>
                <div className="text-gray-600">Средний стаж работы</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Career;