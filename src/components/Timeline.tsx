import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  description: string;
  image?: string;
}

const timelineData: Record<string, TimelineEvent[]> = {
  '2013': [
    {
      year: '2013',
      title: 'Основание компании Вегарус',
      description: 'Начало пути: создание некоммерческой организации по разработке программного обеспечения',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      year: '2013',
      title: 'Открытие сайта портал Вегарус',
      description: 'Запуск официального портала компании для представления проектов и услуг',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      year: '2013',
      month: '12',
      title: 'Открытие радио "5-я МОСКВА"',
      description: 'Запуск второго проекта — онлайн радиостанции "5-я МОСКВА"',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80'
    }
  ],
  '2014': [
    {
      year: '2014',
      title: 'Развитие проектов',
      description: 'Расширение функционала существующих проектов и привлечение аудитории',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80'
    }
  ],
  '2024': [
    {
      year: '2024',
      title: 'Переформат компании',
      description: 'Новый этап развития: обновление стратегии и расширение направлений деятельности',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    }
  ]
};

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState('2013');
  const years = Object.keys(timelineData).sort();

  return (
    <section id="timeline" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            История компании
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наш путь от основания до сегодняшнего дня
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? 'default' : 'outline'}
              size="lg"
              onClick={() => setSelectedYear(year)}
              className="text-lg font-semibold"
            >
              {year}
            </Button>
          ))}
        </div>

        {/* Timeline Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineData[selectedYear]?.map((event, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              {event.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-primary">
                    {event.month ? `${event.year}.${event.month}` : event.year}
                  </span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {event.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
