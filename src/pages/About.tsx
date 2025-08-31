import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Clock, Target, Heart, Lightbulb, Shield, Star } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Алексей Петров",
      position: "Главный инженер",
      experience: "12 лет",
      specialization: "OLED технологии, игровые мониторы",
      achievements: ["Сертификат Samsung", "Эксперт по G-Sync"],
      avatar: "АП"
    },
    {
      name: "Мария Сидорова",
      position: "Ведущий мастер",
      experience: "8 лет",
      specialization: "Профессиональные дисплеи, калибровка",
      achievements: ["Сертификат Dell ProSupport", "Эксперт по цветокоррекции"],
      avatar: "МС"
    },
    {
      name: "Дмитрий Козлов",
      position: "Специалист по диагностике",
      experience: "6 лет",
      specialization: "Электроника, микросхемотехника",
      achievements: ["Сертификат LG", "Специалист по BGA пайке"],
      avatar: "ДК"
    },
    {
      name: "Елена Волкова",
      position: "Менеджер по работе с клиентами",
      experience: "5 лет",
      specialization: "Корпоративные клиенты, консультации",
      achievements: ["Сертификат качества обслуживания"],
      avatar: "ЕВ"
    }
  ];

  const achievements = [
    {
      year: "2015",
      title: "Основание компании",
      description: "Начало работы как небольшой мастерской по ремонту мониторов"
    },
    {
      year: "2017",
      title: "Первые сертификаты",
      description: "Получение авторизации от Samsung и LG"
    },
    {
      year: "2019",
      title: "Расширение услуг",
      description: "Добавление корпоративного обслуживания и выездного ремонта"
    },
    {
      year: "2021",
      title: "Современное оборудование",
      description: "Закупка профессионального диагностического оборудования"
    },
    {
      year: "2023",
      title: "5000+ ремонтов",
      description: "Достижение отметки в 5000 успешно отремонтированных мониторов"
    },
    {
      year: "2025",
      title: "Лидер рынка",
      description: "Признание одним из лучших сервисов по ремонту мониторов в Москве"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Забота о клиентах",
      description: "Каждый клиент важен для нас, мы стремимся превзойти ожидания"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Честность",
      description: "Прозрачные цены, честная диагностика, никаких скрытых доплат"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Качество",
      description: "Используем только оригинальные запчасти и проверенные методы"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-500" />,
      title: "Инновации",
      description: "Постоянно изучаем новые технологии и методы ремонта"
    }
  ];

  const stats = [
    { number: "10", label: "лет на рынке", suffix: "+" },
    { number: "5000", label: "отремонтированных мониторов", suffix: "+" },
    { number: "98", label: "успешных ремонтов", suffix: "%" },
    { number: "24", label: "часа работы поддержки", suffix: "/7" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О компании МониторСервис</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы - команда профессионалов, которая уже более 10 лет специализируется 
            на ремонте и обслуживании мониторов всех типов и брендов.
          </p>
        </div>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша миссия</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Обеспечить каждому клиенту качественный и доступный ремонт мониторов, 
                продлить жизнь техники и сделать работу за компьютером комфортной.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {member.avatar}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                  <Badge variant="outline">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-4">{member.specialization}</div>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs block mb-1">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">История развития</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {achievement.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <div className="text-center">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты и награды</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Авторизованный сервис</h3>
                <p className="text-sm text-gray-600">Samsung, LG, Dell, ASUS</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-gray-600">Система менеджмента качества</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Лучший сервис 2024</h3>
                <p className="text-sm text-gray-600">По версии TechService Awards</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Доверьте ремонт профессионалам</h2>
          <p className="text-xl mb-6">Более 10 лет опыта и тысячи довольных клиентов</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Заказать ремонт
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;