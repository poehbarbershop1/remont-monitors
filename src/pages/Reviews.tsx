import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, ThumbsUp, MessageCircle, Award, TrendingUp } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Александр Петров",
      rating: 5,
      date: "15 января 2025",
      service: "Ремонт LCD монитора",
      text: "Отличный сервис! Быстро диагностировали проблему и качественно отремонтировали монитор Samsung. Работает как новый, гарантию дали на год.",
      helpful: 12,
      verified: true
    },
    {
      name: "Мария Сидорова",
      rating: 5,
      date: "10 января 2025",
      service: "Калибровка OLED",
      text: "Профессиональная калибровка OLED монитора для дизайна. Цвета стали намного точнее, работать стало комфортнее. Рекомендую!",
      helpful: 8,
      verified: true
    },
    {
      name: "Дмитрий Козлов",
      rating: 4,
      date: "8 января 2025",
      service: "Экстренный ремонт",
      text: "Срочно нужен был ремонт игрового монитора перед турниром. Сделали за день, все работает отлично. Цена за срочность оправдана.",
      helpful: 15,
      verified: true
    },
    {
      name: "Елена Волкова",
      rating: 5,
      date: "5 января 2025",
      service: "Корпоративное обслуживание",
      text: "Обслуживают наш офис уже полгода. Очень довольны - быстро реагируют на заявки, качественно выполняют работы. Персональный менеджер всегда на связи.",
      helpful: 6,
      verified: true
    },
    {
      name: "Игорь Смирнов",
      rating: 5,
      date: "2 января 2025",
      service: "Замена матрицы",
      text: "Разбил матрицу 27-дюймового монитора. Нашли точно такую же, заменили быстро и аккуратно. Цена была честной, без накруток.",
      helpful: 9,
      verified: true
    },
    {
      name: "Анна Кузнецова",
      rating: 4,
      date: "28 декабря 2024",
      service: "Диагностика",
      text: "Хорошая диагностика, все объяснили понятно. Оказалось, что ремонт нецелесообразен, честно сказали об этом. Диагностику не взяли плату.",
      helpful: 11,
      verified: true
    }
  ];

  const statistics = [
    { metric: "4.8/5", label: "Средняя оценка", icon: <Star className="h-8 w-8 text-yellow-500" /> },
    { metric: "1247", label: "Отзывов", icon: <MessageCircle className="h-8 w-8 text-blue-500" /> },
    { metric: "96%", label: "Рекомендуют", icon: <ThumbsUp className="h-8 w-8 text-green-500" /> },
    { metric: "98%", label: "Довольных клиентов", icon: <Award className="h-8 w-8 text-purple-500" /> }
  ];

  const serviceRatings = [
    { service: "Качество ремонта", rating: 4.9, votes: 1247 },
    { service: "Скорость выполнения", rating: 4.7, votes: 1198 },
    { service: "Цена/качество", rating: 4.8, votes: 1156 },
    { service: "Обслуживание клиентов", rating: 4.6, votes: 1089 },
    { service: "Гарантийная поддержка", rating: 4.8, votes: 892 }
  ];

  const platforms = [
    { name: "Google", rating: "4.8", reviews: "456", link: "#" },
    { name: "Яндекс", rating: "4.7", reviews: "312", link: "#" },
    { name: "2ГИС", rating: "4.9", reviews: "289", link: "#" },
    { name: "Флампа", rating: "4.6", reviews: "190", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Честные отзывы наших клиентов о качестве ремонта и обслуживания. 
            Мы ценим каждое мнение и постоянно улучшаем наш сервис.
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Ratings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Оценки по категориям</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {serviceRatings.map((rating, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{rating.service}</span>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="font-semibold">{rating.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">({rating.votes} голосов)</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(rating.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reviews List */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Последние отзывы</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{review.name}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">Проверенный</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">{review.service}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Полезно ({review.helpful})</span>
                    </div>
                    <Button variant="ghost" size="sm">Ответить</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">Показать больше отзывов</Button>
          </div>
        </section>

        {/* External Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Отзывы на других платформах</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="text-2xl font-bold">{platform.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">{platform.reviews} отзывов</div>
                  <Button variant="outline" size="sm" className="mt-4">
                    Читать отзывы
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leave Review */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Оставьте свой отзыв</h2>
            <p className="text-xl text-gray-600 mb-6">
              Поделитесь своим опытом работы с нашим сервисом
            </p>
            <Button size="lg">Написать отзыв</Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;