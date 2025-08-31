import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Wrench, Shield, Clock, Star, CheckCircle, Calculator } from 'lucide-react';

const Prices = () => {
  const diagnosticPrices = [
    { service: "Экспресс-диагностика", price: "500 ₽", time: "15 мин", description: "Быстрая проверка основных функций" },
    { service: "Полная диагностика", price: "1000 ₽", time: "30 мин", description: "Комплексная проверка всех систем" },
    { service: "Углубленная диагностика", price: "1500 ₽", time: "60 мин", description: "Детальный анализ с разборкой" },
    { service: "Выездная диагностика", price: "2000 ₽", time: "45 мин", description: "Диагностика на месте у клиента" }
  ];

  const repairPrices = [
    { category: "LCD/LED мониторы", services: [
      { name: "Замена матрицы 21-24\"", price: "3000-8000 ₽", complexity: "Средняя" },
      { name: "Замена матрицы 27-32\"", price: "8000-15000 ₽", complexity: "Средняя" },
      { name: "Ремонт подсветки", price: "2000-4000 ₽", complexity: "Низкая" },
      { name: "Замена блока питания", price: "1500-3000 ₽", complexity: "Низкая" },
      { name: "Ремонт платы управления", price: "2500-5000 ₽", complexity: "Высокая" }
    ]},
    { category: "OLED мониторы", services: [
      { name: "Замена OLED панели", price: "15000-35000 ₽", complexity: "Высокая" },
      { name: "Ремонт драйверов", price: "4000-8000 ₽", complexity: "Высокая" },
      { name: "Калибровка цветов", price: "2000-3000 ₽", complexity: "Средняя" },
      { name: "Замена контроллера", price: "5000-10000 ₽", complexity: "Высокая" }
    ]},
    { category: "Игровые мониторы", services: [
      { name: "Ремонт G-Sync модуля", price: "4000-7000 ₽", complexity: "Высокая" },
      { name: "Настройка высокой частоты", price: "1500-2500 ₽", complexity: "Средняя" },
      { name: "Замена портов HDMI/DP", price: "2000-3500 ₽", complexity: "Средняя" },
      { name: "Ремонт системы охлаждения", price: "1800-3000 ₽", complexity: "Низкая" }
    ]}
  ];

  const additionalServices = [
    { service: "Калибровка монитора", price: "1500 ₽", description: "Профессиональная настройка цветов" },
    { service: "Чистка от пыли", price: "800 ₽", description: "Внутренняя и внешняя чистка" },
    { service: "Обновление прошивки", price: "1200 ₽", description: "Установка последней версии ПО" },
    { service: "Настройка профилей", price: "1000 ₽", description: "Создание пользовательских профилей" },
    { service: "Выездной ремонт", price: "+1000 ₽", description: "Доплата за выезд мастера" },
    { service: "Экстренный ремонт", price: "+50%", description: "Ремонт в течение 24 часов" }
  ];

  const discounts = [
    { condition: "Студентам и пенсионерам", discount: "10%", description: "При предъявлении документа" },
    { condition: "Постоянным клиентам", discount: "15%", description: "При повторном обращении" },
    { condition: "Корпоративным клиентам", discount: "20-30%", description: "При заключении договора" },
    { condition: "Ремонт нескольких устройств", discount: "5-15%", description: "В зависимости от количества" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Цены на услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные и честные цены на все виды ремонта и обслуживания мониторов. 
            Без скрытых доплат и переплат.
          </p>
        </div>

        {/* Price Calculator */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="text-center">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Калькулятор стоимости</CardTitle>
              <CardDescription>Рассчитайте примерную стоимость ремонта вашего монитора</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Button size="lg">Рассчитать стоимость</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Diagnostic Prices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Диагностика</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticPrices.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{item.service}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{item.price}</div>
                  <Badge variant="outline">{item.time}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Repair Prices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ремонт по категориям</h2>
          <Tabs defaultValue="lcd" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="lcd">LCD/LED</TabsTrigger>
              <TabsTrigger value="oled">OLED</TabsTrigger>
              <TabsTrigger value="gaming">Игровые</TabsTrigger>
            </TabsList>
            
            {repairPrices.map((category, index) => (
              <TabsContent key={index} value={index === 0 ? "lcd" : index === 1 ? "oled" : "gaming"}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold">{service.name}</h4>
                            <Badge variant={service.complexity === 'Высокая' ? 'destructive' : service.complexity === 'Средняя' ? 'default' : 'secondary'} className="mt-1">
                              {service.complexity} сложность
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-blue-600">{service.price}</div>
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

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{service.service}</h3>
                    <div className="text-xl font-bold text-blue-600">{service.price}</div>
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Discounts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Скидки и акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discounts.map((discount, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{discount.condition}</CardTitle>
                    <Badge className="bg-green-600 text-white text-lg px-3 py-1">
                      -{discount.discount}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{discount.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-semibold mb-2">Банковские карты</h3>
              <p className="text-sm text-gray-600">Visa, MasterCard, МИР</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Наличные</h3>
              <p className="text-sm text-gray-600">При получении устройства</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="font-semibold mb-2">Безналичный расчет</h3>
              <p className="text-sm text-gray-600">Для юридических лиц</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold mb-2">Электронные кошельки</h3>
              <p className="text-sm text-gray-600">СБП, Яндекс.Деньги</p>
            </div>
          </div>
        </section>

        {/* Price Guarantee */}
        <section className="bg-green-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Гарантия цены</h2>
            <p className="text-xl text-gray-600 mb-6">
              Мы гарантируем, что итоговая стоимость не превысит согласованную после диагностики
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold">Фиксированная цена</div>
                <div className="text-sm text-gray-600">После согласования</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold">Без скрытых доплат</div>
                <div className="text-sm text-gray-600">Все включено в стоимость</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold">Возврат при отказе</div>
                <div className="text-sm text-gray-600">100% возврат предоплаты</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Узнайте точную стоимость ремонта</h2>
          <p className="text-xl mb-6">Получите персональный расчет стоимости для вашего монитора</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calculator className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prices;