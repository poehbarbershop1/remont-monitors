import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Truck, MapPin, Clock, Shield, Package, CheckCircle, Calculator, Phone } from 'lucide-react';

const Delivery = () => {
  const deliveryOptions = [
    {
      title: "Курьерская доставка по Москве",
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      price: "500 ₽",
      time: "В день заказа",
      description: "Доставка готового устройства курьером по Москве",
      features: [
        "Доставка в удобное время",
        "Проверка при получении",
        "Оплата при получении",
        "SMS уведомления"
      ]
    },
    {
      title: "Доставка по Московской области",
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      price: "800-1500 ₽",
      time: "1-2 дня",
      description: "Доставка в города Московской области",
      features: [
        "Расчет по километражу",
        "Согласование времени",
        "Страхование груза",
        "Отслеживание доставки"
      ]
    },
    {
      title: "Доставка по России",
      icon: <Package className="h-8 w-8 text-purple-600" />,
      price: "от 300 ₽",
      time: "2-7 дней",
      description: "Отправка транспортными компаниями",
      features: [
        "Несколько ТК на выбор",
        "Специальная упаковка",
        "Страхование",
        "Отслеживание посылки"
      ]
    },
    {
      title: "Самовывоз",
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      price: "Бесплатно",
      time: "В любое время",
      description: "Забрать устройство из любого нашего офиса",
      features: [
        "3 точки в Москве",
        "Удобный график",
        "Парковка рядом",
        "Проверка при выдаче"
      ]
    }
  ];

  const pickupPoints = [
    {
      name: "Главный офис",
      address: "ул. Примерная, 123",
      metro: "м. Примерная",
      hours: "Пн-Вс: 9:00-21:00",
      phone: "+7 (495) 123-45-67",
      services: ["Выдача устройств", "Прием в ремонт", "Консультации", "Оплата"]
    },
    {
      name: "Филиал Север",
      address: "ул. Северная, 45",
      metro: "м. Северная",
      hours: "Пн-Сб: 10:00-20:00",
      phone: "+7 (495) 123-45-69",
      services: ["Выдача устройств", "Прием в ремонт", "Оплата"]
    },
    {
      name: "Филиал Юг",
      address: "ул. Южная, 78",
      metro: "м. Южная",
      hours: "Пн-Сб: 10:00-20:00",
      phone: "+7 (495) 123-45-70",
      services: ["Выдача устройств", "Прием в ремонт", "Оплата"]
    }
  ];

  const shippingCompanies = [
    {
      name: "СДЭК",
      logo: "📦",
      deliveryTime: "2-5 дней",
      price: "от 300 ₽",
      features: ["Доставка до двери", "Пункты выдачи", "Наложенный платеж"]
    },
    {
      name: "Boxberry",
      logo: "📮",
      deliveryTime: "3-7 дней",
      price: "от 250 ₽",
      features: ["Широкая сеть ПВЗ", "Удобное время получения", "SMS уведомления"]
    },
    {
      name: "ПЭК",
      logo: "🚛",
      deliveryTime: "3-10 дней",
      price: "от 400 ₽",
      features: ["Доставка в регионы", "Терминалы в городах", "Страхование"]
    },
    {
      name: "Деловые Линии",
      logo: "🚚",
      deliveryTime: "2-8 дней",
      price: "от 350 ₽",
      features: ["Быстрая доставка", "Отслеживание", "Доставка до двери"]
    }
  ];

  const packagingInfo = [
    {
      title: "Антистатическая упаковка",
      description: "Защита от электростатических разрядов",
      icon: <Shield className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Ударопрочная упаковка",
      description: "Специальные материалы для защиты от ударов",
      icon: <Package className="h-6 w-6 text-green-600" />
    },
    {
      title: "Влагозащитная пленка",
      description: "Защита от влаги и конденсата",
      icon: <Shield className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Маркировка 'Хрупкое'",
      description: "Специальная маркировка для бережной транспортировки",
      icon: <Package className="h-6 w-6 text-orange-600" />
    }
  ];

  const deliveryZones = [
    { zone: "Москва в пределах МКАД", price: "500 ₽", time: "В день заказа" },
    { zone: "Москва за МКАД (до 10 км)", price: "800 ₽", time: "В день заказа" },
    { zone: "Москва за МКАД (10-30 км)", price: "1200 ₽", time: "1-2 дня" },
    { zone: "Московская область", price: "1500-3000 ₽", time: "1-3 дня" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка и самовывоз</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Удобные способы получения отремонтированной техники. Быстрая доставка 
            по Москве и всей России с гарантией сохранности.
          </p>
        </div>

        {/* Delivery Calculator */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="text-center">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Калькулятор доставки</CardTitle>
              <CardDescription>Рассчитайте стоимость и время доставки в ваш город</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Введите ваш город" />
                <Button>Рассчитать</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Delivery Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Способы доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">{option.price}</div>
                  <Badge variant="outline">{option.time}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{option.description}</CardDescription>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery Zones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Зоны доставки по Москве</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {deliveryZones.map((zone, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">{zone.zone}</div>
                        <div className="text-sm text-gray-600">{zone.time}</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">{zone.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pickup Points */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Пункты самовывоза</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pickupPoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{point.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{point.address}</span>
                    </div>
                    <div className="text-sm text-blue-600">{point.metro}</div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{point.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{point.phone}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Доступные услуги:</h4>
                  <div className="space-y-1">
                    {point.services.map((service, idx) => (
                      <div key={idx} className="text-sm text-gray-600">• {service}</div>
                    ))}
                  </div>
                  <Button className="w-full mt-4">Построить маршрут</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Shipping Companies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Транспортные компании</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingCompanies.map((company, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{company.logo}</div>
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-blue-600">{company.price}</div>
                    <Badge variant="outline">{company.deliveryTime}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {company.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Packaging */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Упаковка и защита</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagingInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery Process */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <div className="text-center">
            <Truck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как происходит доставка</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Упаковка</h3>
                <p className="text-sm text-gray-600">Специальная упаковка для защиты</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Отправка</h3>
                <p className="text-sm text-gray-600">Передача курьеру или в ТК</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Отслеживание</h3>
                <p className="text-sm text-gray-600">SMS с номером для отслеживания</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Получение</h3>
                <p className="text-sm text-gray-600">Проверка и оплата при получении</p>
              </div>
            </div>
          </div>
        </section>

        {/* Track Order */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Отследить заказ</CardTitle>
              <CardDescription>Введите номер заказа для отслеживания статуса доставки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input placeholder="Номер заказа" className="flex-1" />
                <Button>Отследить</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Нужна доставка?</h2>
          <p className="text-xl mb-6">Выберите удобный способ получения отремонтированного устройства</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Truck className="h-5 w-5 mr-2" />
              Заказать доставку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MapPin className="h-5 w-5 mr-2" />
              Найти пункт выдачи
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;