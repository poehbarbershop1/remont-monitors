import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Headphones, MessageCircle, Phone, Mail, Clock, HelpCircle, FileText, Video } from 'lucide-react';

const Support = () => {
  const supportChannels = [
    {
      title: "Телефонная поддержка",
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      availability: "9:00 - 21:00 ежедневно",
      responseTime: "Мгновенно",
      description: "Прямая связь с техническими специалистами",
      contact: "+7 (495) 123-45-67"
    },
    {
      title: "Онлайн чат",
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      availability: "9:00 - 22:00 ежедневно",
      responseTime: "1-2 минуты",
      description: "Быстрые ответы на вопросы через чат на сайте",
      contact: "Чат на сайте"
    },
    {
      title: "Email поддержка",
      icon: <Mail className="h-8 w-8 text-purple-600" />,
      availability: "24/7",
      responseTime: "До 2 часов",
      description: "Подробные ответы на сложные технические вопросы",
      contact: "support@monitorservice.ru"
    },
    {
      title: "Видео-консультации",
      icon: <Video className="h-8 w-8 text-orange-600" />,
      availability: "По записи",
      responseTime: "В назначенное время",
      description: "Персональные консультации с демонстрацией",
      contact: "Запись через сайт"
    }
  ];

  const supportTopics = [
    {
      category: "Технические вопросы",
      topics: [
        "Диагностика неисправностей",
        "Выбор запчастей",
        "Совместимость компонентов",
        "Технические характеристики",
        "Рекомендации по ремонту"
      ]
    },
    {
      category: "Гарантийные вопросы",
      topics: [
        "Условия гарантии",
        "Гарантийные случаи",
        "Продление гарантии",
        "Возврат и обмен",
        "Документооборот"
      ]
    },
    {
      category: "Коммерческие вопросы",
      topics: [
        "Стоимость услуг",
        "Способы оплаты",
        "Скидки и акции",
        "Корпоративные условия",
        "Договоры обслуживания"
      ]
    },
    {
      category: "Логистические вопросы",
      topics: [
        "Доставка и самовывоз",
        "Выездной ремонт",
        "Сроки выполнения",
        "Отслеживание заказов",
        "Упаковка и транспортировка"
      ]
    }
  ];

  const knowledgeBase = [
    {
      title: "Руководство по диагностике",
      description: "Пошаговые инструкции по самостоятельной диагностике",
      type: "PDF",
      size: "2.5 MB",
      downloads: 1247
    },
    {
      title: "Видео-уроки по уходу",
      description: "Как правильно ухаживать за монитором",
      type: "Видео",
      duration: "15 мин",
      views: 3456
    },
    {
      title: "Справочник по ошибкам",
      description: "Расшифровка кодов ошибок различных брендов",
      type: "PDF",
      size: "1.8 MB",
      downloads: 892
    },
    {
      title: "Гарантийные условия",
      description: "Полная информация о гарантийном обслуживании",
      type: "PDF",
      size: "0.8 MB",
      downloads: 567
    }
  ];

  const ticketStatuses = [
    { status: "Новая", color: "blue", count: 12 },
    { status: "В работе", color: "yellow", count: 8 },
    { status: "Ожидает ответа", color: "orange", count: 3 },
    { status: "Решена", color: "green", count: 156 }
  ];

  const supportStats = [
    { metric: "< 2 мин", label: "Среднее время ответа" },
    { metric: "98%", label: "Решенных вопросов" },
    { metric: "4.9/5", label: "Оценка поддержки" },
    { metric: "24/7", label: "Доступность" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Техническая поддержка</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Круглосуточная поддержка клиентов по всем вопросам ремонта и обслуживания мониторов. 
            Наши эксперты всегда готовы помочь.
          </p>
        </div>

        {/* Support Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Способы связи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {channel.icon}
                  </div>
                  <CardTitle className="text-lg">{channel.title}</CardTitle>
                  <Badge variant="outline">{channel.responseTime}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{channel.description}</CardDescription>
                  <div className="text-sm text-gray-600 mb-4">{channel.availability}</div>
                  <div className="font-semibold text-blue-600 mb-4">{channel.contact}</div>
                  <Button size="sm" className="w-full">Связаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Темы поддержки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportTopics.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm flex items-center cursor-pointer hover:text-blue-600">
                        <HelpCircle className="h-4 w-4 mr-2 text-gray-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Knowledge Base */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">База знаний</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {knowledgeBase.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    {item.type === 'PDF' ? (
                      <>
                        <span>Размер: {item.size}</span>
                        <span>{item.downloads} скачиваний</span>
                      </>
                    ) : (
                      <>
                        <span>Длительность: {item.duration}</span>
                        <span>{item.views} просмотров</span>
                      </>
                    )}
                  </div>
                  <Button size="sm" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    {item.type === 'PDF' ? 'Скачать' : 'Смотреть'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Tabs */}
        <section className="mb-16">
          <Tabs defaultValue="ticket" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ticket">Создать обращение</TabsTrigger>
              <TabsTrigger value="status">Статус обращений</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ticket">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Создать обращение в поддержку</CardTitle>
                  <CardDescription className="text-center">Опишите вашу проблему и мы поможем ее решить</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                  </div>
                  <Input placeholder="Email" />
                  <Input placeholder="Тема обращения" />
                  <Input placeholder="Номер заказа (если есть)" />
                  <Textarea placeholder="Подробное описание проблемы" rows={5} />
                  <Button className="w-full">Отправить обращение</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="status">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Статус обращений</CardTitle>
                  <CardDescription className="text-center">Отслеживайте статус ваших обращений в поддержку</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {ticketStatuses.map((ticket, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className={`text-2xl font-bold mb-1 ${
                          ticket.color === 'blue' ? 'text-blue-600' :
                          ticket.color === 'yellow' ? 'text-yellow-600' :
                          ticket.color === 'orange' ? 'text-orange-600' :
                          'text-green-600'
                        }`}>
                          {ticket.count}
                        </div>
                        <div className="text-sm text-gray-600">{ticket.status}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <Input placeholder="Номер обращения" className="max-w-md mx-auto mb-4" />
                    <Button>Проверить статус</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Emergency Support */}
        <section className="bg-red-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <Phone className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Экстренная поддержка</h2>
            <p className="text-xl text-gray-600 mb-6">
              Для критических ситуаций доступна круглосуточная экстренная поддержка
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-600">Круглосуточно</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">< 1 мин</div>
                <div className="text-gray-600">Время ответа</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-gray-600">Доступность</div>
              </div>
            </div>
            <Button size="lg" className="mt-6 bg-red-600 hover:bg-red-700">
              Экстренная связь: +7 (495) 123-45-68
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь?</h2>
          <p className="text-xl mb-6">Наша служба поддержки готова ответить на любые вопросы</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Headphones className="h-5 w-5 mr-2" />
              Связаться с поддержкой
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageCircle className="h-5 w-5 mr-2" />
              Открыть чат
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;