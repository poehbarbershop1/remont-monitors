import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Play, Download, Eye, Calendar, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const beforeAfterCases = [
    {
      title: "Восстановление Samsung Odyssey G7",
      description: "Замена матрицы после механического повреждения",
      beforeImage: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Замена матрицы",
      date: "15 января 2025",
      complexity: "Высокая"
    },
    {
      title: "Ремонт подсветки LG UltraWide",
      description: "Замена LED лент подсветки",
      beforeImage: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Ремонт подсветки",
      date: "12 января 2025",
      complexity: "Средняя"
    },
    {
      title: "Восстановление Dell UltraSharp",
      description: "Ремонт блока питания и калибровка",
      beforeImage: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Комплексный ремонт",
      date: "10 января 2025",
      complexity: "Средняя"
    },
    {
      title: "Ремонт игрового ASUS ROG",
      description: "Замена портов HDMI и настройка G-Sync",
      beforeImage: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Игровые мониторы",
      date: "8 января 2025",
      complexity: "Высокая"
    }
  ];

  const workspacePhotos = [
    {
      title: "Диагностическая зона",
      description: "Современное оборудование для точной диагностики",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Рабочие места"
    },
    {
      title: "Ремонтная мастерская",
      description: "Чистое помещение для работы с матрицами",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Рабочие места"
    },
    {
      title: "Склад запчастей",
      description: "Большой ассортимент оригинальных деталей",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Рабочие места"
    },
    {
      title: "Зона тестирования",
      description: "Проверка качества ремонта",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Рабочие места"
    }
  ];

  const videoTutorials = [
    {
      title: "Как правильно чистить монитор",
      description: "Безопасная чистка экрана и корпуса",
      duration: "5:30",
      views: 12450,
      thumbnail: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Диагностика неисправностей",
      description: "Как определить проблему самостоятельно",
      duration: "8:15",
      views: 8920,
      thumbnail: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Калибровка цветов",
      description: "Настройка монитора для точных цветов",
      duration: "12:40",
      views: 6780,
      thumbnail: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const certificates = [
    {
      title: "Сертификат Samsung",
      description: "Авторизованный сервисный центр",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300",
      year: "2023"
    },
    {
      title: "Сертификат LG",
      description: "Официальный партнер по ремонту",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=300",
      year: "2023"
    },
    {
      title: "ISO 9001:2015",
      description: "Система менеджмента качества",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=300",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Галерея работ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Примеры наших работ, фотографии рабочих процессов и результаты 
            сложных ремонтов мониторов различных брендов.
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="repairs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="repairs">Ремонты</TabsTrigger>
            <TabsTrigger value="workspace">Мастерская</TabsTrigger>
            <TabsTrigger value="videos">Видео</TabsTrigger>
            <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
          </TabsList>

          {/* Before/After Repairs */}
          <TabsContent value="repairs">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">До и после ремонта</h2>
                <p className="text-lg text-gray-600">Результаты наших работ говорят сами за себя</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {beforeAfterCases.map((case_, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{case_.title}</CardTitle>
                        <Badge variant={case_.complexity === 'Высокая' ? 'destructive' : 'default'}>
                          {case_.complexity}
                        </Badge>
                      </div>
                      <CardDescription>{case_.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-red-600">До ремонта</h4>
                          <img 
                            src={case_.beforeImage} 
                            alt="До ремонта"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-green-600">После ремонта</h4>
                          <img 
                            src={case_.afterImage} 
                            alt="После ремонта"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <Badge variant="outline">{case_.category}</Badge>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {case_.date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Workspace Photos */}
          <TabsContent value="workspace">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша мастерская</h2>
                <p className="text-lg text-gray-600">Современное оборудование и комфортные условия работы</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workspacePhotos.map((photo, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{photo.title}</h3>
                        <p className="text-sm text-gray-600">{photo.description}</p>
                        <Badge variant="outline" className="mt-2">{photo.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Video Tutorials */}
          <TabsContent value="videos">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Видео-уроки</h2>
                <p className="text-lg text-gray-600">Полезные видео о ремонте и обслуживании мониторов</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videoTutorials.map((video, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-t-lg">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                        <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-70">
                          {video.duration}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{video.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="h-4 w-4 mr-1" />
                          {video.views.toLocaleString()} просмотров
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Certificates */}
          <TabsContent value="certificates">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты и награды</h2>
                <p className="text-lg text-gray-600">Официальные документы, подтверждающие нашу квалификацию</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{cert.title}</h3>
                          <Badge variant="outline">{cert.year}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                        <Button size="sm" variant="outline" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Statistics */}
        <section className="my-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="text-center">
                <Camera className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши достижения в цифрах</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Фото работ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">Видео-уроков</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
                    <div className="text-gray-600">Сертификатов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                    <div className="text-gray-600">Успешных ремонтов</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Хотите увидеть процесс ремонта?</h2>
          <p className="text-xl mb-6">Приходите к нам в мастерскую или закажите видео-отчет о ремонте</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Записаться на экскурсию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Заказать видео-отчет
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;