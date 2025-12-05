import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const supportOptions = [
  {
    title: 'Финансовая поддержка',
    description: 'Ваши пожертвования помогают нам продолжать разработку открытых решений и поддерживать инфраструктуру проектов',
    icon: 'Heart',
    action: 'Поддержать проект'
  },
  {
    title: 'Вклад в код',
    description: 'Присоединяйтесь к разработке наших проектов на GitHub, помогайте улучшать код и документацию',
    icon: 'GitBranch',
    action: 'GitHub'
  },
  {
    title: 'Сообщество',
    description: 'Помогайте другим пользователям, делитесь опытом и участвуйте в обсуждениях развития проектов',
    icon: 'Users',
    action: 'Присоединиться'
  }
];

const Support = () => {
  return (
    <section id="support" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Поддержите нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ваша поддержка помогает создавать качественное ПО для всего сообщества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary rounded-full">
                    <Icon name={option.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="w-full px-6 py-2 border border-border hover:border-primary transition-colors rounded-md text-foreground hover:bg-secondary/50">
                  {option.action}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/50 bg-secondary/30 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-center">О нашей миссии</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
              Группа Медиа Вегарус — это некоммерческая организация, которая верит в силу 
              открытого программного обеспечения. Мы создаём инструменты на Python и Django, 
              которые помогают разработчикам и организациям решать реальные задачи. 
              Наша цель — сделать технологии доступными для всех.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Support;
