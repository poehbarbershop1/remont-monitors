import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Star, CheckCircle, Award, Zap } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: "Samsung",
      logo: "🖥️",
      description: "Ведущий производитель дисплеев и мониторов",
      specialization: "QLED, Curved, Gaming мониторы",
      repairComplexity: "Средняя",
      partsAvailability: "Отличная",
      warrantyPeriod: "12 месяцев",
      popularModels: ["Odyssey G7", "M7 Smart Monitor", "CF390", "UR590C"],
      rating: 4.8
    },
    {
      name: "LG",
      logo: "📺",
      description: "Инновационные решения в области дисплейных технологий",
      specialization: "OLED, UltraWide, IPS мониторы",
      repairComplexity: "Средняя",
      partsAvailability: "Хорошая",
      warrantyPeriod: "12 месяцев",
      popularModels: ["UltraGear 27GL850", "34WN80C", "27UP850", "C1 OLED"],
      rating: 4.7
    },
    {
      name: "Dell",
      logo: "💻",
      description: "Профессиональные мониторы для бизнеса и творчества",
      specialization: "Профессиональные, UltraSharp, Gaming",
      repairComplexity: "Низкая",
      partsAvailability: "Отличная",
      warrantyPeriod: "24 месяца",
      popularModels: ["UltraSharp U2720Q", "Alienware AW3420DW", "P2715Q", "S2721DGF"],
      rating: 4.9
    },
    {
      name: "ASUS",
      logo: "🎮",
      description: "Игровые и профессиональные мониторы высокого класса",
      specialization: "ROG Gaming, ProArt, TUF Gaming",
      repairComplexity: "Высокая",
      partsAvailability: "Хорошая",
      warrantyPeriod: "12 месяцев",
      popularModels: ["ROG Swift PG279Q", "ProArt PA278QV", "TUF Gaming VG27AQ", "ROG Strix XG438Q"],
      rating: 4.6
    },
    {
      name: "AOC",
      logo: "🖥️",
      description: "Доступные мониторы с хорошим соотношением цена-качество",
      specialization: "Бюджетные, Gaming, Офисные",
      repairComplexity: "Низкая",
      partsAvailability: "Хорошая",
      warrantyPeriod: "6 месяцев",
      popularModels: ["24G2U", "C24G1", "U3277PWQU", "AG273QCX"],
      rating: 4.4
    },
    {
      name: "BenQ",
      logo: "📱",
      description: "Специализированные мониторы для профессионалов",
      specialization: "Фотография, Дизайн, Программирование",
      repairComplexity: "Средняя",
      partsAvailability: "Средняя",
      warrantyPeriod: "12 месяцев",
      popularModels: ["SW270C", "PD3200U", "EX2780Q", "ZOWIE XL2546K"],
      rating: 4.5
    },
    {
      name: "HP",
      logo: "🖨️",
      description: "Надежные мониторы для офиса и дома",
      specialization: "Офисные, Универсальные, Бюджетные",
      repairComplexity: "Низкая",
      partsAvailability: "Хорошая",
      warrantyPeriod: "12 месяцев",
      popularModels: ["EliteDisplay E273", "24mh", "Z27", "OMEN 27i"],
      rating: 4.3
    },
    {
      name: "Acer",
      logo: "💾",
      description: "Широкий ассортимент мониторов для разных задач",
      specialization: "Gaming Predator, Офисные, Бюджетные",
      repairComplexity: "Средняя",
      partsAvailability: "Хорошая",
      warrantyPeriod: "6 месяцев",
      popularModels: ["Predator X27", "Nitro XV272U", "CB242Y", "ET322QK"],
      rating: 4.2
    }
  ];

  const repairStats = [
    { brand: "Samsung", repaired: 1250, successRate: "96%" },
    { brand: "LG", repaired: 980, successRate: "94%" },
    { brand: "Dell", repaired: 850, successRate: "98%" },
    { brand: "ASUS", repaired: 720, successRate: "92%" },
    { brand: "AOC", repaired: 650, successRate: "95%" },
    { brand: "BenQ", repaired: 420, successRate: "93%" },
    { brand: "HP", repaired: 380, successRate: "97%" },
    { brand: "Acer", repaired: 320, successRate: "91%" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Поддерживаемые бренды</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы специализируемся на ремонте мониторов всех ведущих производителей. 
            Наши мастера имеют сертификаты и опыт работы с каждым брендом.
          </p>
        </div>

        {/* Brands Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{brand.logo}</div>
                      <div>
                        <CardTitle className="text-2xl">{brand.name}</CardTitle>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-semibold">{brand.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">{brand.warrantyPeriod}</Badge>
                  </div>
                  <CardDescription>{brand.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Специализация:</h4>
                      <p className="text-sm text-gray-600">{brand.specialization}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Сложность ремонта:</span>
                        <div className="font-semibold">{brand.repairComplexity}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Наличие запчастей:</span>
                        <div className="font-semibold">{brand.partsAvailability}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Популярные модели:</h4>
                      <div className="flex flex-wrap gap-1">
                        {brand.popularModels.map((model, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">Заказать ремонт {brand.name}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Repair Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Статистика ремонтов по брендам</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {repairStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.repaired}</div>
                    <div className="text-sm text-gray-600 mb-2">{stat.brand}</div>
                    <Badge variant="outline">{stat.successRate} успеха</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certification Section */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <div className="text-center">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификации и партнерства</h2>
            <p className="text-xl text-gray-600 mb-8">
              Мы являемся авторизованным сервисным центром для большинства брендов
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold">Samsung</div>
                <div className="text-sm text-gray-600">Авторизованный сервис</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold">Dell</div>
                <div className="text-sm text-gray-600">Партнер Pro Support</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold">LG</div>
                <div className="text-sm text-gray-600">Сертифицированный центр</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold">ASUS</div>
                <div className="text-sm text-gray-600">Официальный партнер</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ремонтируем мониторы всех брендов</h2>
          <p className="text-xl mb-6">Не нашли свой бренд? Мы работаем с любыми производителями мониторов</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Узнать о ремонте вашего бренда
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

export default Brands;