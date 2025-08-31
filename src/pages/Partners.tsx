import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Handshake, Building, Truck, Award, Users, Star, CheckCircle, Target } from 'lucide-react';

const Partners = () => {
  const partnerTypes = [
    {
      title: "Поставщики запчастей",
      icon: <Building className="h-8 w-8 text-blue-600" />,
      description: "Официальные дистрибьюторы комплектующих",
      benefits: [
        "Оригинальные запчасти",
        "Конкурентные цены",
        "Быстрая доставка",
        "Техническая поддержка"
      ],
      partners: ["Samsung Parts", "LG Components", "Dell Direct", "ASUS Supply"]
    },
    {
      title: "Сервисные центры",
      icon: <Handshake className="h-8 w-8 text-green-600" />,
      description: "Партнерская сеть для расширения географии",
      benefits: [
        "Обмен опытом",
        "Совместные проекты",
        "Обучение персонала",
        "Стандарты качества"
      ],
      partners: ["ТехноРемонт", "ЭлектроСервис", "ДисплейПро", "МониторФикс"]
    },
    {
      title: "Логистические компании",
      icon: <Truck className="h-8 w-8 text-purple-600" />,
      description: "Надежная доставка по всей России",
      benefits: [
        "Быстрая доставка",
        "Страхование грузов",
        "Отслеживание",
        "Специальная упаковка"
      ],
      partners: ["СДЭК", "Boxberry", "ПЭК", "Деловые Линии"]
    },
    {
      title: "Образовательные учреждения",
      icon: <Award className="h-8 w-8 text-orange-600" />,
      description: "Сотрудничество с техническими вузами",
      benefits: [
        "Практика студентов",
        "Совместные исследования",
        "Подготовка кадров",
        "Инновации"
      ],
      partners: ["МГТУ им. Баумана", "МЭИ", "МИЭТ", "Политех"]
    }
  ];

  const partnerPrograms = [
    {
      title: "Франшиза",
      description: "Откройте собственный сервисный центр под нашим брендом",
      investment: "от 500 000 ₽",
      payback: "12-18 месяцев",
      support: [
        "Обучение персонала",
        "Поставка оборудования",
        "Маркетинговая поддержка",
        "Техническая поддержка"
      ]
    },
    {
      title: "Дилерство",
      description: "Станьте официальным дилером наших услуг в вашем регионе",
      investment: "от 100 000 ₽",
      payback: "6-12 месяцев",
      support: [
        "Обучение продажам",
        "Рекламные материалы",
        "CRM система",
        "Комиссионная программа"
      ]
    },
    {
      title: "Партнерство",
      description: "Взаимовыгодное сотрудничество для развития бизнеса",
      investment: "Без вложений",
      payback: "Сразу",
      support: [
        "Обмен клиентами",
        "Совместные акции",
        "Техническая поддержка",
        "Обучение"
      ]
    }
  ];

  const requirements = [
    {
      title: "Для франчайзи",
      items: [
        "Опыт в сфере ремонта техники от 2 лет",
        "Помещение от 50 кв.м в проходном месте",
        "Команда от 3 специалистов",
        "Инвестиции от 500 000 ₽"
      ]
    },
    {
      title: "Для дилеров",
      items: [
        "Опыт продаж технических услуг",
        "Клиентская база в регионе",
        "Офис или точка продаж",
        "Желание развивать направление"
      ]
    },
    {
      title: "Для партнеров",
      items: [
        "Дополняющий бизнес (продажа техники, IT-услуги)",
        "Хорошая репутация на рынке",
        "Готовность к долгосрочному сотрудничеству",
        "Соблюдение стандартов качества"
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Узнаваемый бренд",
      description: "Работа под известным и доверенным брендом"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Обучение и поддержка",
      description: "Полное обучение персонала и постоянная поддержка"
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Готовые процессы",
      description: "Отработанные бизнес-процессы и стандарты"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Маркетинговая поддержка",
      description: "Реклама, промо-материалы, digital-маркетинг"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Партнерство</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Развивайте свой бизнес вместе с нами! Предлагаем выгодные условия 
            сотрудничества для сервисных центров, поставщиков и дилеров.
          </p>
        </div>

        {/* Partner Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Типы партнерства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {type.icon}
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Преимущества:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Наши партнеры:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.partners.map((partner, idx) => (
                        <Badge key={idx} variant="secondary">{partner}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Стать партнером</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partner Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Программы сотрудничества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                  <div className="space-y-2 mt-4">
                    <div className="text-2xl font-bold text-blue-600">{program.investment}</div>
                    <Badge variant="outline">Окупаемость: {program.payback}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Поддержка:</h4>
                  <ul className="space-y-2 mb-6">
                    {program.support.map((item, idx) => (
                      <li key={idx} className="text-sm flex items-center">
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

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Требования к партнерам</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Преимущества партнерства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, index) => (
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

        {/* Application Form */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Заявка на партнерство</CardTitle>
              <CardDescription>Расскажите о своем бизнесе и планах сотрудничества</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Название компании" />
                <Input placeholder="Контактное лицо" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Телефон" />
                <Input placeholder="Email" />
              </div>
              <Input placeholder="Город/регион" />
              <Input placeholder="Тип партнерства" />
              <Textarea placeholder="Расскажите о вашем бизнесе и планах сотрудничества" rows={4} />
              <Button className="w-full">Отправить заявку</Button>
            </CardContent>
          </Card>
        </section>

        {/* Success Stories */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <Handshake className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Истории успеха</h2>
            <p className="text-xl text-gray-600 mb-8">
              Наши партнеры успешно развивают бизнес и достигают новых высот
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Активных партнеров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25</div>
                <div className="text-gray-600">Городов присутствия</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                <div className="text-gray-600">Средний рост оборота</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;