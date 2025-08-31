import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, User, Eye, MessageCircle, Search, TrendingUp, Newspaper, Bell } from 'lucide-react';

const News = () => {
  const featuredNews = {
    title: "Открытие нового филиала на севере Москвы",
    excerpt: "Мы расширяем географию наших услуг и открываем третий филиал для удобства клиентов северных районов столицы.",
    date: "20 января 2025",
    author: "Пресс-служба",
    views: 1456,
    comments: 28,
    category: "Компания",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const news = [
    {
      title: "Новая линейка OLED мониторов Samsung 2025",
      excerpt: "Samsung представила новые OLED мониторы с улучшенной технологией против выгорания пикселей.",
      date: "18 января 2025",
      author: "Алексей Петров",
      category: "Технологии",
      views: 892,
      comments: 15,
      type: "industry"
    },
    {
      title: "Скидки до 30% на ремонт в январе",
      excerpt: "Специальное предложение для клиентов: скидки на все виды ремонтных работ в течение января.",
      date: "15 января 2025",
      author: "Отдел маркетинга",
      category: "Акции",
      views: 1234,
      comments: 42,
      type: "company"
    },
    {
      title: "Обновление диагностического оборудования",
      excerpt: "Мы приобрели новое современное оборудование для более точной диагностики мониторов.",
      date: "12 января 2025",
      author: "Технический отдел",
      category: "Оборудование",
      views: 567,
      comments: 8,
      type: "company"
    },
    {
      title: "LG анонсировала мониторы с Mini-LED подсветкой",
      excerpt: "Новая технология Mini-LED обещает улучшенную контрастность и более точную цветопередачу.",
      date: "10 января 2025",
      author: "Мария Сидорова",
      category: "Технологии",
      views: 743,
      comments: 19,
      type: "industry"
    },
    {
      title: "Расширение гарантии до 24 месяцев",
      excerpt: "Для премиум услуг мы увеличиваем гарантийный период до 2 лет.",
      date: "8 января 2025",
      author: "Служба качества",
      category: "Услуги",
      views: 456,
      comments: 12,
      type: "company"
    },
    {
      title: "Тренды игровых мониторов 2025",
      excerpt: "Анализ основных трендов в сфере игровых мониторов: 4K 240Hz, OLED, улучшенный HDR.",
      date: "5 января 2025",
      author: "Дмитрий Козлов",
      category: "Аналитика",
      views: 1089,
      comments: 31,
      type: "industry"
    }
  ];

  const categories = [
    { name: "Все новости", count: 45, active: true },
    { name: "Компания", count: 18, active: false },
    { name: "Технологии", count: 15, active: false },
    { name: "Акции", count: 8, active: false },
    { name: "Аналитика", count: 4, active: false }
  ];

  const upcomingEvents = [
    {
      title: "Выставка Consumer Electronics Show",
      date: "15-18 февраля 2025",
      location: "Лас-Вегас",
      description: "Участие в крупнейшей выставке электроники"
    },
    {
      title: "Семинар по OLED технологиям",
      date: "25 февраля 2025",
      location: "Москва",
      description: "Обучающий семинар для специалистов"
    },
    {
      title: "День открытых дверей",
      date: "5 марта 2025",
      location: "Наш офис",
      description: "Экскурсии по мастерской и консультации"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Новости и события</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Последние новости компании, обновления услуг и события 
            в мире мониторных технологий.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Bell className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold">Подписка на новости</h3>
                    <p className="text-gray-600">Получайте важные обновления на email</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Ваш email" className="w-64" />
                  <Button>Подписаться</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Search and Categories */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <Input placeholder="Поиск новостей..." />
                    <Button>
                      <Search className="h-4 w-4 mr-2" />
                      Найти
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Категории</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className={`flex justify-between items-center p-2 rounded cursor-pointer ${category.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}>
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="mb-12">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <Badge className="mb-4">Главная новость</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredNews.title}</h2>
                <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredNews.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredNews.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {featuredNews.views}
                  </div>
                </div>
                <Button>Читать полностью</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* News Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Последние новости</h2>
              <div className="space-y-6">
                {news.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={article.type === 'company' ? 'default' : 'secondary'}>
                          {article.category}
                        </Badge>
                        <div className="text-sm text-gray-500">{article.date}</div>
                      </div>
                      <CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
                        {article.title}
                      </CardTitle>
                      <CardDescription>{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {article.author}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {article.views}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {article.comments}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4">Читать далее</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">Загрузить еще новости</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Предстоящие события
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                        <div className="text-xs text-gray-500 mb-1">{event.date}</div>
                        <div className="text-xs text-blue-600 mb-2">{event.location}</div>
                        <p className="text-xs text-gray-600">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular News */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Популярные новости
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {news.slice(0, 3).map((article, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-semibold text-sm hover:text-blue-600 cursor-pointer mb-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Eye className="h-3 w-3 mr-1" />
                          {article.views} просмотров
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Archive */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Архив новостей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <span className="text-sm">Январь 2025</span>
                      <Badge variant="secondary">12</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <span className="text-sm">Декабрь 2024</span>
                      <Badge variant="secondary">8</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <span className="text-sm">Ноябрь 2024</span>
                      <Badge variant="secondary">15</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <span className="text-sm">Октябрь 2024</span>
                      <Badge variant="secondary">10</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Будьте в курсе всех новостей</h2>
          <p className="text-xl mb-6">Подпишитесь на нашу рассылку и получайте важные обновления первыми</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Ваш email" className="bg-white" />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <Bell className="h-4 w-4 mr-2" />
              Подписаться
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;