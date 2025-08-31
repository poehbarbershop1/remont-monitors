import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Wrench, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  Phone, 
  Award,
  Users,
  Zap
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Monitor className="h-12 w-12 text-blue-600" />,
      title: "Диагностика мониторов",
      description: "Полная диагностика всех типов мониторов с выявлением неисправностей",
      link: "/diagnostics"
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-600" />,
      title: "Профессиональный ремонт",
      description: "Ремонт LCD, LED, OLED мониторов любой сложности",
      link: "/repair"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: "Гарантийное обслуживание",
      description: "Официальная гарантия на все виды работ до 12 месяцев",
      link: "/warranty"
    },
    {
      icon: <Clock className="h-12 w-12 text-orange-600" />,
      title: "Экстренный ремонт",
      description: "Срочный ремонт в течение 24 часов для критических случаев",
      link: "/emergency"
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-600" />,
      title: "Премиум обслуживание",
      description: "VIP-сервис с выездом мастера и приоритетным обслуживанием",
      link: "/maintenance"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-teal-600" />,
      title: "Оригинальные запчасти",
      description: "Только сертифицированные комплектующие от официальных поставщиков",
      link: "/parts"
    },
    {
      icon: <Phone className="h-12 w-12 text-red-600" />,
      title: "Консультации 24/7",
      description: "Круглосуточная техническая поддержка и консультации",
      link: "/consultation"
    },
    {
      icon: <Award className="h-12 w-12 text-indigo-600" />,
      title: "Сертифицированные мастера",
      description: "Команда экспертов с международными сертификатами",
      link: "/certificates"
    },
    {
      icon: <Users className="h-12 w-12 text-pink-600" />,
      title: "Корпоративное обслуживание",
      description: "Специальные условия для организаций и предприятий",
      link: "/corporate"
    },
    {
      icon: <Zap className="h-12 w-12 text-cyan-600" />,
      title: "Современные технологии",
      description: "Использование новейшего оборудования и методов ремонта",
      link: "/technologies"
    }
  ];

  const stats = [
    { number: "5000+", label: "Отремонтированных мониторов" },
    { number: "98%", label: "Успешных ремонтов" },
    { number: "24/7", label: "Техническая поддержка" },
    { number: "12 мес", label: "Гарантия на работы" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Профессиональный ремонт мониторов
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Быстрый и качественный ремонт мониторов всех типов и брендов. 
            Диагностика за 30 минут, гарантия до 12 месяцев.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Заказать диагностику
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Узнать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию мониторов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <Link to={service.link}>
                    <Button className="w-full">Подробнее</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая диагностика</h3>
              <p className="text-gray-600">Определяем неисправность за 30 минут</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">12 месяцев гарантии на все работы</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опытные мастера</h3>
              <p className="text-gray-600">Более 10 лет опыта в ремонте техники</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Нужен ремонт монитора?</h2>
          <p className="text-xl mb-8">Свяжитесь с нами прямо сейчас для бесплатной консультации</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Позвонить сейчас
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Оставить заявку
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;