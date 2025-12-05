const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/40 -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="https://cdn.poehali.dev/files/98f2718c-f5ce-43fc-b75a-a1c83825b48f.png" 
            alt="Группа Медиа Вегарус"
            className="w-full max-w-2xl h-auto drop-shadow-2xl"
          />
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-light leading-relaxed">
          Некоммерческая организация по разработке программного обеспечения
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
          Мы создаём открытые решения на Python и Django, делая технологии доступными для всех
        </p>

        {/* History */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-primary-foreground/70 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-foreground/50 rounded-full" />
            <span>Основана в 2013 году</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-foreground/50 rounded-full" />
            <span>Переформат в 2024 году</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
