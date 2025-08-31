import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Monitor, Zap, Shield, Truck, CheckCircle, Star } from 'lucide-react';

const Parts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      name: "Матрицы и панели",
      icon: <Monitor className="h-6 w-6" />,
      count: 150,
      parts: [
        { name: "LCD матрица 24\"", brand: "LG", price: "8500 ₽", availability: "В наличии", warranty: "6 мес" },
        { name: "LED панель 27\"", brand: "Samsung", price: "12000 ₽", availability: "В наличии", warranty: "12 мес" },
        { name: "OLED панель 32\"", brand: "Dell", price: "25000 ₽", availability: "Под заказ", warranty: "12 мес" },
        { name: "IPS матрица 21.5\"", brand: "AOC", price: "6500 ₽", availability: "В наличии", warranty: "6 мес" }
      ]
    },
    {
      name: "Блоки питания",
      icon: <Zap className="h-6 w-6" />,
      count: 85,
      parts: [
        { name: "Блок питания 65W", brand: "Universal", price: "2500 ₽", availability: "В наличии", warranty: "12 мес" },
        { name: "Адаптер питания 90W", brand: "Dell", price: "3200 ₽", availability: "В наличии", warranty: "12 мес" },
        { name: "Внутренний БП 120W", brand: "Samsung", price: "4500 ₽", availability: "Под заказ", warranty: "12 мес" },
        { name: "БП для игровых мониторов", brand: "ASUS", price: "5500 ₽", availability: "В наличии", warranty: "24 мес" }
      ]
    },
    {
      name: "Платы управления",
      icon: <Settings className="h-6 w-6" />,
      count: 120,
      parts: [
        { name: "Скалер плата", brand: "LG", price: "3500 ₽", availability: "В наличии", warranty: "12 мес" },
        { name: "Main board", brand: "Samsung", price: "4200 ₽", availability: "Под заказ", warranty: "12 мес" },
        { name: "T-CON плата", brand: "Dell", price: "2800 ₽", availability: "В наличии", warranty: "6 мес" },
        { name: "Плата подсветки", brand: "AOC", price: "1800 ₽", availability: "В наличии", warranty: "12 мес" }
      ]
    }
  ];

  const brands = [
    { name: "Samsung", logo: "🖥️", parts: 45, popular: true },
    { name: "LG", logo: "📺", parts: 38, popular: true },
    { name: "Dell", logo: "💻", parts: 32, popular: true },
    { name: "ASUS", logo: "🎮", parts: 28, popular: false },
    { name: "AOC", logo: "🖥️", parts: 25, popular: false },
    { name: "BenQ", logo: "📱", parts: 22, popular: false },
    { name: "HP", logo: "🖨️", parts: 20, popular: false },
    { name: "Acer", logo: "💾", parts: 18, popular: false }
  ];

  const services = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Поиск запчастей",
      description: "Найдем нужную деталь для любой модели монитора"
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Быстрая доставка",
      description: "Доставка по Москве в день заказа, по России за 1-3 дня"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Гарантия качества",
      description: "Все запчасти сертифицированы и имеют официальную гарантию"
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: "Установка",
      description: "Профессиональная установка запчастей нашими мастерами"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Запчасти для мониторов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Большой ассортимент оригинальных запчастей для мониторов всех брендов. 
            Быстрая доставка и профессиональная установка.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg p-6 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск запчастей по модели или артикулу..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button size="lg">
              <Search className="h-5 w-5 mr-2" />
              Найти запчасти
            </Button>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Parts Catalog */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Каталог запчастей</h2>
          <Tabs defaultValue="matrices" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="matrices">Матрицы</TabsTrigger>
              <TabsTrigger value="power">Питание</TabsTrigger>
              <TabsTrigger value="boards">Платы</TabsTrigger>
            </TabsList>
            
            {categories.map((category, index) => (
              <TabsContent key={index} value={index === 0 ? "matrices" : index === 1 ? "power" : "boards"}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {category.icon}
                      <CardTitle className="text-2xl">{category.name}</CardTitle>
                      <Badge variant="secondary">{category.count} позиций</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.parts.map((part, idx) => (
                        <div key={idx} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">{part.name}</h4>
                            <Badge variant={part.availability === 'В наличии' ? 'default' : 'secondary'}>
                              {part.availability}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Бренд: {part.brand}</div>
                          <div className="text-sm text-gray-600 mb-3">Гарантия: {part.warranty}</div>
                          <div className="flex justify-between items-center">
                            <div className="text-xl font-bold text-blue-600">{part.price}</div>
                            <Button size="sm">В корзину</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Brands Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Поддерживаемые бренды</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-shadow cursor-pointer ${brand.popular ? 'ring-2 ring-blue-200' : ''}`}>
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">{brand.logo}</div>
                  <div className="font-semibold">{brand.name}</div>
                  <div className="text-sm text-gray-600">{brand.parts} деталей</div>
                  {brand.popular && (
                    <Badge className="mt-2" variant="secondary">Популярный</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Warranty Section */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Гарантия на запчасти</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">6-24 месяца</div>
                <div className="text-gray-600">Гарантия на запчасти</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Оригинальные детали</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">24 часа</div>
                <div className="text-gray-600">Доставка по Москве</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Нужна запчасть для монитора?</h2>
          <p className="text-xl mb-6">Поможем найти нужную деталь и установим ее профессионально</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Найти запчасть
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Заказать установку
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Parts;