import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Shield, CheckCircle, Clock, FileText, Phone, AlertCircle } from 'lucide-react';

const Warranty = () => {
  const warrantyTypes = [
    {
      title: "Стандартная гарантия",
      period: "6 месяцев",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      coverage: [
        "Ремонт основных компонентов",
        "Замена неисправных деталей",
        "Повторная диагностика",
        "Техническая поддержка"
      ],
      conditions: "Распространяется на все виды ремонтных работ"
    },
    {
      title: "Расширенная гарантия",
      period: "12 месяцев",
      icon: <Shield className="h-8 w-8 text-green-600" />,
      coverage: [
        "Все услуги стандартной гарантии",
        "Замена дорогостоящих компонентов",
        "Приоритетное обслуживание",
        "Выездной ремонт",
        "Предоставление подменного устройства"
      ],
      conditions: "При замене матрицы, блока питания или основной платы",
      popular: true
    },
    {
      title: "Премиум гарантия",
      period: "24 месяца",
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      coverage: [
        "Все услуги расширенной гарантии",
        "Полная замена устройства при критических поломках",
        "Круглосуточная поддержка",
        "Бесплатное профилактическое обслуживание",
        "Страхование от случайных повреждений"
      ],
      conditions: "Для премиум мониторов стоимостью от 50000 ₽"
    }
  ];

  const warrantyConditions = [
    {
      title: "Что покрывает гарантия",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      items: [
        "Дефекты, возникшие в результате ремонта",
        "Неисправности установленных запчастей",
        "Повторное появление устраненной неисправности",
        "Некачественное выполнение работ"
      ]
    },
    {
      title: "Что НЕ покрывает гарантия",
      icon: <AlertCircle className="h-6 w-6 text-red-600" />,
      items: [
        "Механические повреждения после ремонта",
        "Повреждения от воздействия жидкостей",
        "Неисправности, не связанные с выполненным ремонтом",
        "Повреждения от неправильной эксплуатации"
      ]
    }
  ];

  const warrantyProcess = [
    {
      step: 1,
      title: "Обращение",
      description: "Свяжитесь с нами по телефону или через сайт"
    },
    {
      step: 2,
      title: "Проверка",
      description: "Предоставьте гарантийный талон и опишите проблему"
    },
    {
      step: 3,
      title: "Диагностика",
      description: "Бесплатная диагностика для определения гарантийного случая"
    },
    {
      step: 4,
      title: "Ремонт",
      description: "Бесплатное устранение гарантийной неисправности"
    },
    {
      step: 5,
      title: "Возврат",
      description: "Возврат отремонтированного устройства"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Гарантийное обслуживание</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Надежная гарантия на все виды ремонтных работ. Мы уверены в качестве 
            наших услуг и предоставляем расширенные гарантийные условия.
          </p>
        </div>

        {/* Warranty Check */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Проверить гарантию</CardTitle>
              <CardDescription>Введите номер гарантийного талона для проверки статуса</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Номер гарантийного талона" />
                <Button>Проверить</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Warranty Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Типы гарантии</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${warranty.popular ? 'ring-2 ring-green-500' : ''}`}>
                <CardHeader className="text-center">
                  {warranty.popular && (
                    <Badge className="w-fit mx-auto mb-4 bg-green-600">Популярная</Badge>
                  )}
                  <div className="mx-auto mb-4">
                    {warranty.icon}
                  </div>
                  <CardTitle className="text-xl">{warranty.title}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{warranty.period}</div>
                  <CardDescription className="text-center">{warranty.conditions}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {warranty.coverage.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Узнать подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Warranty Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Условия гарантии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warrantyConditions.map((condition, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {condition.icon}
                    <CardTitle className="text-xl">{condition.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {condition.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Warranty Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Процедура гарантийного обслуживания</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {warrantyProcess.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Info */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-16">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-8 w-8 text-yellow-600 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Важная информация</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Гарантия действует только при наличии гарантийного талона</li>
                <li>• Сохраняйте чек об оплате ремонтных работ</li>
                <li>• Гарантия не распространяется на расходные материалы</li>
                <li>• При гарантийном ремонте диагностика проводится бесплатно</li>
                <li>• Срок гарантийного ремонта не превышает 14 рабочих дней</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Гарантийный случай?</h2>
          <p className="text-xl mb-6">Свяжитесь с нами для оформления гарантийного обслуживания</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Связаться с поддержкой
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <FileText className="h-5 w-5 mr-2" />
              Скачать гарантийный талон
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Warranty;