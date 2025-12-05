import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
          Группа Медиа Вегарус
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Некоммерческая организация по разработке программного обеспечения
        </p>
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Мы создаём открытые решения на Python и Django, делая технологии доступными для всех
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => scrollToSection('projects')}
          >
            Наши проекты
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8"
            onClick={() => scrollToSection('support')}
          >
            Поддержать
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
