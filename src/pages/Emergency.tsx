import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Clock, Phone, Zap, AlertTriangle, CheckCircle, Star, Truck } from 'lucide-react';

const Emergency = () => {
  const emergencyServices = [
    {
      title: "Экстренная диагностика",
      description: "Срочная диагностика в течение 2 часов",
      price: "1500 ₽",
      time: "2 часа",
      icon: <Zap className="h-8 w-8 text-red-600" />
    },
    {
      title: "Срочный ремонт",
      description: "Ремонт в течение 24 часов",
      price: "+50% к стоимости",
      time: "24 часа",
      icon: <Clock className="h-8 w-8 text-orange-600" />
    },
    {
      title: "Выездной экстренный ремонт",
      description: "Мастер приедет в течение 4 часов",
      price: "+100% к стоимости",
      time: "4 часа",
      icon: <Truck className="h-8 w-8 text-purple-600" />
    }
  ];

  const emergencyCases = [
    {
      situation: "Важная презентация через несколько часов",
      solution: "Экстренная диагностика и ремонт или предоставление подменного монитора",
      time: "2-4 часа"
    },
    {
      situation: "Поломка рабочего монитора в офисе",
      solution: "Выездной ремонт на месте или замена на время ремонта",
      time: "4-6 часов"
    },
    {
      situation: "Критическая неисправность игрового монитора",
      solution: "Приоритетный ремонт с использованием экспресс-запчастей",
      time: "12-24 часа"
    },
    {
      situation: "Поломка монитора дизайнера перед дедлайном",
      solution: "Срочная калибровка и ремонт с сохранением цветовых профилей",
      time: "6-12 часов"
    }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Звонок",
      description: "Позвоните по номеру экстренной службы",
      time: "1 мин"
    },
    {
      step: 2,
      title: "Консультация",
      description: "Опишите проблему нашему специалисту",
      time: "5 мин"
    },
    {
      step: 3,
      title: "Решение",
      description: "Выбор оптимального варианта решения проблемы",
      time: "5 мин"
    },
    {
      step: 4,
      title: "Выполнение",
      description: "Срочная диагностика и ремонт",
      time: "2-24 часа"
    }
  ];

  const additionalServices = [
    {
      title: "Подменный монитор",
      description: "Предоставление временного монитора на время ремонта",
      price: "500 ₽/день"
    },
    {
      title: "Экспресс-доставка запчастей",
      description: "Доставка необходимых деталей в течение 2-4 часов",
      price: "от 1000 ₽"
    },
    {
      title: "Работа в выходные",
      description: "Ремонт в субботу и воскресенье",
      price: "+30% к стоимости"
    },
    {
      title: "Ночной ремонт",
      description: "Работы в ночное время (22:00-08:00)",
      price: "+70% к стоимости"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="h-16 w-16 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Экстренный ремонт мониторов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Срочный ремонт мониторов 24/7. Когда каждая минута на счету - 
            мы готовы помочь в любое время дня и ночи.
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-12 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Экстренная служба работает 24/7!</strong> Звоните по номеру +7 (495) 123-45-67 
            для получения срочной помощи. Среднее время реагирования - 2 часа.
          </AlertDescription>
        </Alert>

        {/* Emergency Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Экстренные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-red-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <Badge variant="destructive">{service.time}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-red-600 mb-4">{service.price}</div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Заказать срочно
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Экстренные ситуации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyCases.map((case_, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    {case_.situation}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Наше решение:</h4>
                    <p className="text-gray-600">{case_.solution}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">Время: {case_.time}</Badge>
                    <Button size="sm">Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как работает экстренная служба</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {emergencySteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <Badge variant="secondary">{step.time}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Дополнительные экстренные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-red-600">{service.price}</div>
                    <Button size="sm" variant="outline">Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Emergency */}
        <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Нужна экстренная помощь?</h2>
          <p className="text-xl mb-6">Наша служба экстренного ремонта работает круглосуточно</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Экстренный вызов: +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Заказать обратный звонок
            </Button>
          </div>
          <div className="mt-6 text-lg">
            <Clock className="h-5 w-5 inline mr-2" />
            Работаем 24/7 без выходных и праздников
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Emergency;