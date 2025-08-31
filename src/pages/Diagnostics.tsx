import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, Monitor, Zap, Settings, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const Diagnostics = () => {
  const diagnosticSteps = [
    {
      step: 1,
      title: "Визуальный осмотр",
      description: "Проверка внешнего состояния монитора и кабелей",
      time: "5 мин"
    },
    {
      step: 2,
      title: "Тестирование включения",
      description: "Проверка работы блока питания и индикаторов",
      time: "5 мин"
    },
    {
      step: 3,
      title: "Диагностика изображения",
      description: "Тестирование качества изображения и цветопередачи",
      time: "10 мин"
    },
    {
      step: 4,
      title: "Проверка портов",
      description: "Тестирование всех входных разъемов и соединений",
      time: "5 мин"
    },
    {
      step: 5,
      title: "Анализ результатов",
      description: "Составление отчета и рекомендаций по ремонту",
      time: "5 мин"
    }
  ];

  const commonProblems = [
    {
      icon: <Monitor className="h-6 w-6 text-red-500" />,
      problem: "Монитор не включается",
      causes: ["Неисправность блока питания", "Проблемы с кабелем", "Выход из строя платы управления"],
      severity: "high"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      problem: "Мерцание экрана",
      causes: ["Неисправность подсветки", "Проблемы с инвертором", "Плохой контакт"],
      severity: "medium"
    },
    {
      icon: <Settings className="h-6 w-6 text-blue-500" />,
      problem: "Искажение цветов",
      causes: ["Неисправность матрицы", "Проблемы с видеокартой", "Неправильная калибровка"],
      severity: "medium"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      problem: "Полосы на экране",
      causes: ["Повреждение матрицы", "Неисправность шлейфа", "Проблемы с драйвером"],
      severity: "high"
    }
  ];

  const diagnosticTypes = [
    {
      title: "Экспресс-диагностика",
      description: "Быстрая проверка основных функций",
      price: "500 ₽",
      time: "15 мин",
      includes: ["Проверка включения", "Тест изображения", "Базовая диагностика"]
    },
    {
      title: "Полная диагностика",
      description: "Комплексная проверка всех систем монитора",
      price: "1000 ₽",
      time: "30 мин",
      includes: ["Все тесты экспресс-диагностики", "Проверка всех портов", "Анализ электроники", "Подробный отчет"]
    },
    {
      title: "Углубленная диагностика",
      description: "Детальный анализ с разборкой устройства",
      price: "1500 ₽",
      time: "60 мин",
      includes: ["Полная диагностика", "Разборка устройства", "Проверка компонентов", "Рекомендации по ремонту"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Диагностика мониторов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная диагностика мониторов с использованием современного оборудования. 
            Точное определение неисправностей за 30 минут.
          </p>
        </div>

        {/* Diagnostic Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Процесс диагностики</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {diagnosticSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <Badge variant="secondary">{step.time}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Diagnostic Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Типы диагностики</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diagnosticTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <Badge>{type.time}</Badge>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600">{type.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {type.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Заказать диагностику</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Частые неисправности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {problem.icon}
                    <CardTitle className="text-lg">{problem.problem}</CardTitle>
                    <Badge variant={problem.severity === 'high' ? 'destructive' : 'secondary'}>
                      {problem.severity === 'high' ? 'Критично' : 'Средне'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Возможные причины:</h4>
                  <ul className="space-y-1">
                    {problem.causes.map((cause, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                        {cause}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Equipment Section */}
        <section className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Диагностическое оборудование</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Осциллограф</h3>
              <p className="text-sm text-gray-600">Анализ электрических сигналов</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Тест-генератор</h3>
              <p className="text-sm text-gray-600">Проверка качества изображения</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Мультиметр</h3>
              <p className="text-sm text-gray-600">Измерение напряжений и токов</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Калибратор</h3>
              <p className="text-sm text-gray-600">Настройка цветопередачи</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Закажите диагностику прямо сейчас</h2>
          <p className="text-xl mb-6">Бесплатная диагностика при заказе ремонта</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Заказать диагностику
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Узнать стоимость
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Diagnostics;