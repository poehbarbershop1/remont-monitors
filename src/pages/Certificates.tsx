import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Download, CheckCircle, Star, Shield, Users, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Авторизованный сервисный центр Samsung",
      description: "Официальная авторизация на ремонт мониторов Samsung",
      issuer: "Samsung Electronics",
      validUntil: "31.12.2025",
      category: "Авторизация",
      level: "Премиум",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Сертифицированный партнер LG",
      description: "Партнерство по ремонту и обслуживанию мониторов LG",
      issuer: "LG Electronics",
      validUntil: "15.06.2025",
      category: "Партнерство",
      level: "Золотой",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Dell ProSupport Certified",
      description: "Сертификация по программе Dell ProSupport",
      issuer: "Dell Technologies",
      validUntil: "20.08.2025",
      category: "Сертификация",
      level: "Эксперт",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "ASUS Authorized Service",
      description: "Авторизация на ремонт игровых мониторов ASUS ROG",
      issuer: "ASUS",
      validUntil: "10.11.2025",
      category: "Авторизация",
      level: "Специалист",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "ISO 9001:2015",
      description: "Система менеджмента качества",
      issuer: "Международная организация по стандартизации",
      validUntil: "12.03.2027",
      category: "Качество",
      level: "Международный",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Сертификат безопасности ESD",
      description: "Соблюдение стандартов защиты от электростатических разрядов",
      issuer: "ESD Association",
      validUntil: "05.09.2025",
      category: "Безопасность",
      level: "Стандарт",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const teamCertificates = [
    {
      name: "Алексей Петров",
      position: "Главный инженер",
      certificates: [
        "Samsung Display Expert",
        "LG OLED Specialist",
        "G-Sync Certified Technician"
      ],
      experience: "12 лет"
    },
    {
      name: "Мария Сидорова",
      position: "Ведущий мастер",
      certificates: [
        "Dell ProSupport Advanced",
        "Color Management Expert",
        "Professional Display Calibration"
      ],
      experience: "8 лет"
    },
    {
      name: "Дмитрий Козлов",
      position: "Специалист по диагностике",
      certificates: [
        "Electronics Repair Specialist",
        "BGA Rework Certified",
        "Component Level Repair"
      ],
      experience: "6 лет"
    }
  ];

  const achievements = [
    {
      title: "Лучший сервисный центр 2024",
      organization: "TechService Awards",
      description: "Признание в номинации 'Лучший сервис по ремонту мониторов'",
      date: "Декабрь 2024"
    },
    {
      title: "Партнер года Samsung",
      organization: "Samsung Electronics",
      description: "Награда за высокое качество обслуживания клиентов",
      date: "Ноябрь 2024"
    },
    {
      title: "Сертификат качества",
      organization: "Ассоциация сервисных центров",
      description: "Подтверждение соответствия высоким стандартам качества",
      date: "Октябрь 2024"
    }
  ];

  const standards = [
    {
      standard: "ISO 9001:2015",
      description: "Система менеджмента качества",
      compliance: "100%"
    },
    {
      standard: "RoHS",
      description: "Экологические стандарты",
      compliance: "100%"
    },
    {
      standard: "CE Mark",
      description: "Европейские стандарты безопасности",
      compliance: "100%"
    },
    {
      standard: "ESD Safe",
      description: "Защита от электростатических разрядов",
      compliance: "100%"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Сертификаты и лицензии</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Официальные документы, подтверждающие нашу квалификацию и право 
            на выполнение ремонтных работ высокого качества.
          </p>
        </div>

        {/* Main Certificates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Основные сертификаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant={cert.level === 'Премиум' ? 'default' : cert.level === 'Золотой' ? 'secondary' : 'outline'}>
                        {cert.level}
                      </Badge>
                      <Badge variant="outline">{cert.category}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Выдан:</span>
                        <span className="font-medium">{cert.issuer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Действует до:</span>
                        <span className="font-medium">{cert.validUntil}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-4">
                      <Download className="h-4 w-4 mr-2" />
                      Скачать копию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Certificates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Сертификаты сотрудников</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamCertificates.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                  <Badge variant="outline">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Сертификаты:</h4>
                  <div className="space-y-2">
                    {member.certificates.map((cert, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Награды и достижения</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="h-12 w-12 text-yellow-500 mt-2" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{achievement.title}</h3>
                        <Badge variant="outline">{achievement.date}</Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{achievement.organization}</p>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Соответствие стандартам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">{standard.standard}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{standard.description}</CardDescription>
                  <div className="text-2xl font-bold text-green-600">{standard.compliance}</div>
                  <div className="text-sm text-gray-500">соответствие</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Verification */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Проверка подлинности</h2>
            <p className="text-xl text-gray-600 mb-6">
              Все наши сертификаты можно проверить на официальных сайтах выдавших их организаций
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Официальные документы</h3>
                <p className="text-sm text-gray-600">Все сертификаты выданы официально</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Актуальные</h3>
                <p className="text-sm text-gray-600">Регулярно обновляем сертификаты</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Проверяемые</h3>
                <p className="text-sm text-gray-600">Можно проверить на сайтах организаций</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Certificates;