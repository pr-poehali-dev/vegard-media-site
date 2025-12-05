import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-sm' : 'bg-primary/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xl font-bold text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <Icon name="Rocket" size={24} />
            <span>Вегарус</span>
          </button>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Проекты
            </button>
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              История
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Поддержка
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;