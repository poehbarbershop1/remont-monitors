import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Search, HelpCircle, MessageCircle, Phone, Clock, Monitor } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "Общие вопросы",
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          question: "Сколько времени занимает ремонт монитора?",
          answer: "Время ремонта зависит от сложности неисправности. Простой ремонт (замена блока питания, чистка) - 2-4 часа. Замена матрицы - 1-2 дня. Сложный ремонт электроники - 2-5 дней. Точные сроки сообщаем после диагностики."
        },
        {
          question: "Какая гарантия на ремонт?",
          answer: "Мы предоставляем гарантию от 6 до 24 месяцев в зависимости от вида работ. Стандартная гарантия - 6 месяцев, при замене основных компонентов - 12 месяцев, на премиум услуги - до 24 месяцев."
        },
        {
          question: "Можно ли отремонтировать очень старый монитор?",
          answer: "Да, мы ремонтируем мониторы любого возраста. Однако для устройств старше 10 лет может быть сложно найти запчасти. В таких случаях мы предложим альтернативные решения или порекомендуем замену."
        },
        {
          question: "Сколько стоит диагностика?",
          answer: "Экспресс-диагностика стоит 500₽ (15 мин), полная диагностика - 1000₽ (30 мин). При заказе ремонта стоимость диагностики засчитывается в общую сумму."
        }
      ]
    },
    {
      category: "Ремонт и запчасти",
      icon: <Monitor className="h-5 w-5" />,
      questions: [
        {
          question: "Используете ли вы оригинальные запчасти?",
          answer: "Да, мы используем только оригинальные запчасти от официальных поставщиков. В редких случаях, когда оригинальные детали недоступны, предлагаем качественные аналоги с соответствующей гарантией."
        },
        {
          question: "Что делать, если монитор не включается?",
          answer: "Сначала проверьте кабель питания и его подключение. Попробуйте другую розетку. Если не помогает - скорее всего проблема в блоке питания или плате управления. Принесите на диагностику."
        },
        {
          question: "Можно ли заменить матрицу на более качественную?",
          answer: "Технически возможно, но ограничено совместимостью. Мы можем установить матрицу с лучшими характеристиками, если она совместима с вашей моделью монитора."
        },
        {
          question: "Ремонтируете ли вы мониторы после попадания жидкости?",
          answer: "Да, но успех зависит от времени обращения. Чем быстрее принесете после инцидента, тем больше шансов на восстановление. Главное - сразу отключите устройство от сети."
        }
      ]
    },
    {
      category: "Цены и оплата",
      icon: <Clock className="h-5 w-5" />,
      questions: [
        {
          question: "Можно ли оплатить ремонт в рассрочку?",
          answer: "Для дорогостоящего ремонта (от 10000₽) мы предоставляем рассрочку на 3-6 месяцев без процентов. Также принимаем оплату картами рассрочки банков-партнеров."
        },
        {
          question: "Есть ли скидки для постоянных клиентов?",
          answer: "Да, постоянные клиенты получают скидку 15% на все услуги. Также действуют скидки для студентов и пенсионеров (10%), корпоративных клиентов (20-30%)."
        },
        {
          question: "Что входит в стоимость ремонта?",
          answer: "В стоимость входят: работа мастера, использованные расходные материалы, тестирование, гарантия. Запчасти оплачиваются отдельно по себестоимости без наценки."
        },
        {
          question: "Можно ли узнать точную стоимость заранее?",
          answer: "Точную стоимость можно узнать только после диагностики. Мы можем дать примерную оценку по телефону на основе описания проблемы."
        }
      ]
    },
    {
      category: "Гарантия и сервис",
      icon: <MessageCircle className="h-5 w-5" />,
      questions: [
        {
          question: "Что делать, если проблема повторилась в гарантийный период?",
          answer: "Обратитесь к нам с гарантийным талоном. Мы проведем бесплатную диагностику и устраним проблему без дополнительной оплаты, если это гарантийный случай."
        },
        {
          question: "Предоставляете ли подменное устройство на время ремонта?",
          answer: "Да, для корпоративных клиентов и при длительном ремонте (более 3 дней) мы можем предоставить подменный монитор за 500₽/день."
        },
        {
          question: "Работаете ли вы с гарантийными мониторами?",
          answer: "Мы не нарушаем заводскую гарантию. Если ваш монитор на гарантии, рекомендуем сначала обратиться к официальному сервису производителя."
        },
        {
          question: "Можете ли выехать для ремонта на дом?",
          answer: "Да, наши мастера выезжают на дом или в офис. Стоимость выезда - 1000₽ по Москве, 2000₽ за МКАД. Некоторые виды ремонта можно выполнить на месте."
        }
      ]
    }
  ];

  const popularQuestions = [
    "Сколько стоит замена матрицы?",
    "Как долго действует гарантия?",
    "Ремонтируете ли игровые мониторы?",
    "Есть ли выездной ремонт?",
    "Какие способы оплаты принимаете?"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о ремонте и обслуживании мониторов. 
            Не нашли ответ? Свяжитесь с нами!
          </p>
        </div>

        {/* Search */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Поиск по вопросам..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <Button>
                  <Search className="h-5 w-5 mr-2" />
                  Найти
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Popular Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Популярные вопросы</h2>
          <div className="flex flex-wrap gap-2">
            {popularQuestions.map((question, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-blue-50 p-2">
                {question}
              </Badge>
            ))}
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="mb-16">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Остались вопросы?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Наши специалисты готовы ответить на любые вопросы о ремонте мониторов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Позвонить специалисту
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="h-5 w-5 mr-2" />
                Написать в чат
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;