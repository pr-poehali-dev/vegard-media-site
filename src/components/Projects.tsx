import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const projects = [
  {
    title: 'Python Backend Solutions',
    description: 'Разработка высокопроизводительных серверных решений на Python с акцентом на масштабируемость и надежность',
    icon: 'Code2',
    tags: ['Python', 'FastAPI', 'AsyncIO']
  },
  {
    title: 'Django Web Applications',
    description: 'Создание полнофункциональных веб-приложений с использованием Django фреймворка и современных практик разработки',
    icon: 'Globe',
    tags: ['Django', 'REST API', 'PostgreSQL']
  },
  {
    title: 'Open Source Tools',
    description: 'Разработка и поддержка инструментов с открытым исходным кодом для сообщества разработчиков',
    icon: 'Package',
    tags: ['MIT License', 'Community', 'Documentation']
  },
  {
    title: 'Data Processing',
    description: 'Системы обработки и анализа данных с использованием Python экосистемы',
    icon: 'Database',
    tags: ['Pandas', 'NumPy', 'Data Science']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Наши проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Разработка программного обеспечения на Python и Django для решения реальных задач
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <Icon name={project.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
