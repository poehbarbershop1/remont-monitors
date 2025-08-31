import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, User, Eye, MessageCircle, Search, TrendingUp, BookOpen } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "Как выбрать игровой монитор в 2025 году",
    excerpt: "Подробное руководство по выбору игрового монитора: частота обновления, время отклика, технологии синхронизации и другие важные параметры.",
    author: "Алексей Петров",
    date: "15 января 2025",
    readTime: "8 мин",
    views: 1247,
    comments: 23,
    tags: ["Игровые мониторы", "Гайд", "2025"],
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const blogPosts = [
    {
      title: "OLED vs QLED: какая технология лучше?",
      excerpt: "Сравниваем две популярные технологии дисплеев, их преимущества и недостатки для разных задач.",
      author: "Мария Сидорова",
      date: "12 января 2025",
      readTime: "6 мин",
      views: 892,
      comments: 15,
      tags: ["OLED", "QLED", "Сравнение"],
      category: "Технологии"
    },
    {
      title: "Топ-5 причин поломки мониторов",
      excerpt: "Разбираем самые частые причины выхода мониторов из строя и способы их предотвращения.",
      author: "Дмитрий Козлов",
      date: "10 января 2025",
      readTime: "5 мин",
      views: 1156,
      comments: 28,
      tags: ["Ремонт", "Профилактика", "Советы"],
      category: "Ремонт"
    },
    {
      title: "Калибровка монитора для фотографов",
      excerpt: "Пошаговое руководство по профессиональной калибровке монитора для точной цветопередачи.",
      author: "Елена Волкова",
      date: "8 января 2025",
      readTime: "10 мин",
      views: 634,
      comments: 12,
      tags: ["Калибровка", "Фотография", "Цвета"],
      category: "Настройка"
    },
    {
      title: "Как продлить жизнь монитора: 10 простых советов",
      excerpt: "Практические рекомендации по уходу за монитором, которые помогут избежать преждевременных поломок.",
      author: "Алексей Петров",
      date: "5 января 2025",
      readTime: "7 мин",
      views: 978,
      comments: 19,
      tags: ["Уход", "Профилактика", "Советы"],
      category: "Обслуживание"
    },
    {
      title: "HDR в мониторах: что это и зачем нужно",
      excerpt: "Объясняем технологию HDR простыми словами и показываем, как она влияет на качество изображения.",
      author: "Мария Сидорова",
      date: "3 января 2025",
      readTime: "8 мин",
      views: 756,
      comments: 16,
      tags: ["HDR", "Технологии", "Качество"],
      category: "Технологии"
    },
    {
      title: "Ремонт монитора своими руками: что можно, а что нельзя",
      excerpt: "Разбираем, какие проблемы можно решить самостоятельно, а когда обязательно нужна помощь специалистов.",
      author: "Дмитрий Козлов",
      date: "1 января 2025",
      readTime: "9 мин",
      views: 1423,
      comments: 34,
      tags: ["DIY", "Ремонт", "Безопасность"],
      category: "Ремонт"
    }
  ];

  const categories = [
    { name: "Все статьи", count: 45, active: true },
    { name: "Ремонт", count: 18, active: false },
    { name: "Технологии", count: 12, active: false },
    { name: "Настройка", count: 8, active: false },
    { name: "Обслуживание", count: 7, active: false }
  ];

  const popularTags = [
    "Игровые мониторы", "OLED", "Калибровка", "Ремонт", "HDR", 
    "Профилактика", "Советы", "Гайды", "Технологии", "DIY"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог о мониторах</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полезные статьи, советы экспертов и последние новости из мира 
            мониторов и дисплейных технологий.
          </p>
        </div>

        {/* Search and Categories */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <Input
                      placeholder="Поиск статей..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
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

        {/* Featured Post */}
        <section className="mb-12">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <Badge className="mb-4">Рекомендуем</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {featuredPost.views}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button>Читать статью</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Последние статьи</h2>
              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="text-sm text-gray-500">{post.readTime}</div>
                      </div>
                      <CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline">Читать полностью</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">Загрузить еще статьи</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Популярные теги</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-blue-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Подписка на новости</CardTitle>
                  <CardDescription>Получайте новые статьи на email</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваш email" />
                  <Button className="w-full">Подписаться</Button>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Популярные статьи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-semibold text-sm hover:text-blue-600 cursor-pointer mb-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views} просмотров
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Хотите стать автором?</h2>
          <p className="text-xl mb-6">Поделитесь своими знаниями о мониторах с нашими читателями</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <BookOpen className="h-5 w-5 mr-2" />
            Предложить статью
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;