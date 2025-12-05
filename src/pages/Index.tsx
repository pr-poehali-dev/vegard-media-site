import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Support from '@/components/Support';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Timeline />
      <Support />
      
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2024 Группа Медиа Вегарус. Некоммерческая организация по разработке ПО
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;