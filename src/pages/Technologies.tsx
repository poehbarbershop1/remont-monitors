import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Zap, Settings, Cpu, Eye, Palette, Gamepad2, CheckCircle } from 'lucide-react';

const Technologies = () => {
  const displayTechnologies = [
    {
      name: "LCD (TN, IPS, VA)",
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      description: "Жидкокристаллические дисплеи различных типов матриц",
      advantages: ["Доступная цена", "Надежность", "Низкое энергопотребление"],
      disadvantages: ["Ограниченные углы обзора (TN)", "Время отклика"],
      repairability: "Высокая",
      commonIssues: ["Выгорание подсветки", "Битые пиксели", "Проблемы с инвертором"]
    },
    {
      name: "OLED",
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      description: "Органические светодиоды с самосвечением пикселей",
      advantages: ["Идеальный черный цвет", "Высокая контрастность", "Быстрый отклик"],
      disadvantages: ["Выгорание пикселей", "Высокая стоимость"],
      repairability: "Средняя",
      commonIssues: ["Выгорание пикселей", "Неравномерность подсветки", "Проблемы с драйверами"]
    },
    {
      name: "QLED",
      icon: <Palette className="h-8 w-8 text-green-600" />,
      description: "Квантовые точки для улучшенной цветопередачи",
      advantages: ["Яркие цвета", "Высокая яркость", "Долговечность"],
      disadvantages: ["Не истинный черный", "Высокая цена"],
      repairability: "Средняя",
      commonIssues: ["Проблемы с квантовым слоем", "Неисправности подсветки", "Контроллер цвета"]
    },
    {
      name: "Mini-LED",
      icon: <Eye className="h-8 w-8 text-orange-600" />,
      description: "Улучшенная подсветка с множеством зон затемнения",
      advantages: ["Высокая контрастность", "Локальное затемнение", "HDR"],
      disadvantages: ["Сложность ремонта", "Высокая стоимость"],
      repairability: "Низкая",
      commonIssues: ["Неисправность зон подсветки", "Проблемы с контроллером", "Неравномерность"]
    }
  ];

  const gamingTechnologies = [
    {
      name: "G-Sync",
      manufacturer: "NVIDIA",
      description: "Технология синхронизации кадров для устранения разрывов",
      benefits: ["Плавный геймплей", "Отсутствие разрывов", "Низкая задержка"],
      repairIssues: ["Проблемы с модулем G-Sync", "Несовместимость драйверов"]
    },
    {
      name: "FreeSync",
      manufacturer: "AMD",
      description: "Открытый стандарт адаптивной синхронизации",
      benefits: ["Совместимость с AMD и NVIDIA", "Доступность", "Энергоэффективность"],
      repairIssues: ["Настройки совместимости", "Проблемы с диапазоном частот"]
    },
    {
      name: "HDR",
      manufacturer: "Различные",
      description: "Расширенный динамический диапазон для лучшего изображения",
      benefits: ["Реалистичные цвета", "Высокая контрастность", "Детализация"],
      repairIssues: ["Калибровка HDR", "Проблемы с метаданными", "Совместимость"]
    },
    {
      name: "High Refresh Rate",
      manufacturer: "Различные",
      description: "Высокая частота обновления 120Hz, 144Hz, 240Hz+",
      benefits: ["Плавность движения", "Конкурентное преимущество", "Отзывчивость"],
      repairIssues: ["Нестабильность частоты", "Перегрев", "Проблемы с кабелями"]
    }
  ];

  const repairEquipment = [
    {
      name: "Осциллограф",
      model: "Rigol DS1054Z",
      purpose: "Анализ электрических сигналов",
      capabilities: ["Измерение напряжений", "Анализ формы сигналов", "Поиск неисправностей"]
    },
    {
      name: "Программатор",
      model: "RT809H",
      purpose: "Прошивка микросхем EEPROM",
      capabilities: ["Чтение/запись прошивок", "Восстановление EDID", "Программирование контроллеров"]
    },
    {
      name: "Калибратор",
      model: "X-Rite i1Display Pro",
      purpose: "Калибровка цветопередачи",
      capabilities: ["Измерение цветов", "Создание ICC профилей", "Проверка точности"]
    },
    {
      name: "Тест-генератор",
      model: "Custom Pattern Generator",
      purpose: "Генерация тестовых изображений",
      capabilities: ["Тестовые паттерны", "Проверка пикселей", "Анализ качества"]
    }
  ];

  const repairTechniques = [
    {
      technique: "Микропайка BGA",
      description: "Ремонт микросхем с шариковыми выводами",
      complexity: "Высокая",
      equipment: "Паяльная станция с подогревом"
    },
    {
      technique: "Замена подсветки",
      description: "Замена LED лент или ламп подсветки",
      complexity: "Средняя",
      equipment: "Специальные отвертки, клей"
    },
    {
      technique: "Прошивка контроллеров",
      description: "Восстановление или обновление микропрограмм",
      complexity: "Высокая",
      equipment: "Программатор, дампы прошивок"
    },
    {
      technique: "Замена матрицы",
      description: "Полная замена дисплейной панели",
      complexity: "Средняя",
      equipment: "Чистое помещение, антистатик"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Технологии и оборудование</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные технологии ремонта и профессиональное оборудование 
            для качественного обслуживания мониторов любой сложности.
          </p>
        </div>

        {/* Technologies Tabs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Технологии дисплеев</h2>
          <Tabs defaultValue="display" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="display">Дисплейные технологии</TabsTrigger>
              <TabsTrigger value="gaming">Игровые технологии</TabsTrigger>
            </TabsList>
            
            <TabsContent value="display">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayTechnologies.map((tech, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        {tech.icon}
                        <div>
                          <CardTitle className="text-xl">{tech.name}</CardTitle>
                          <Badge variant="outline">{tech.repairability} ремонтопригодность</Badge>
                        </div>
                      </div>
                      <CardDescription>{tech.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Преимущества:</h4>
                          <ul className="space-y-1">
                            {tech.advantages.map((advantage, idx) => (
                              <li key={idx} className="text-sm flex items-center">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                {advantage}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Недостатки:</h4>
                          <ul className="space-y-1">
                            {tech.disadvantages.map((disadvantage, idx) => (
                              <li key={idx} className="text-sm flex items-center">
                                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                {disadvantage}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Частые неисправности:</h4>
                          <ul className="space-y-1">
                            {tech.commonIssues.map((issue, idx) => (
                              <li key={idx} className="text-sm text-gray-600">• {issue}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gaming">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gamingTechnologies.map((tech, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{tech.name}</CardTitle>
                        <Badge variant="outline">{tech.manufacturer}</Badge>
                      </div>
                      <CardDescription>{tech.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Преимущества:</h4>
                          <ul className="space-y-1">
                            {tech.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm flex items-center">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Проблемы при ремонте:</h4>
                          <ul className="space-y-1">
                            {tech.repairIssues.map((issue, idx) => (
                              <li key={idx} className="text-sm text-gray-600">• {issue}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Equipment Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Профессиональное оборудование</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repairEquipment.map((equipment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{equipment.name}</CardTitle>
                  <Badge variant="secondary">{equipment.model}</Badge>
                  <CardDescription>{equipment.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Возможности:</h4>
                  <ul className="space-y-1">
                    {equipment.capabilities.map((capability, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Repair Techniques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Методы ремонта</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repairTechniques.map((technique, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{technique.technique}</CardTitle>
                    <Badge variant={technique.complexity === 'Высокая' ? 'destructive' : technique.complexity === 'Средняя' ? 'default' : 'secondary'}>
                      {technique.complexity}
                    </Badge>
                  </div>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2">Необходимое оборудование:</h4>
                    <p className="text-sm text-gray-600">{technique.equipment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Innovation Section */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <div className="text-center">
            <Cpu className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Инновации в ремонте</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI диагностика</h3>
                <p className="text-gray-600">Использование ИИ для быстрого определения неисправностей</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Автоматизация</h3>
                <p className="text-gray-600">Роботизированные системы для точного ремонта</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3D сканирование</h3>
                <p className="text-gray-600">Точное определение дефектов матрицы</p>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Стандарты качества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ISO 9001</h3>
                <p className="text-sm text-gray-600">Система менеджмента качества</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ESD Safe</h3>
                <p className="text-sm text-gray-600">Защита от электростатических разрядов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">RoHS</h3>
                <p className="text-sm text-gray-600">Экологические стандарты</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">CE Mark</h3>
                <p className="text-sm text-gray-600">Европейские стандарты безопасности</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Современные технологии ремонта</h2>
          <p className="text-xl mb-6">Мы используем самое современное оборудование и методы ремонта</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Узнать о наших технологиях
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Заказать ремонт
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Technologies;