import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const softwareProjects = [
  {
    title: 'DjRadioCast',
    description: 'Программное обеспечение для управления радио на основе IceCast 2',
    icon: 'Radio',
    status: 'development',
    tags: ['Python', 'IceCast 2', 'Broadcasting']
  },
  {
    title: 'Zeppeline WSCP',
    description: 'Панель управления хостинга (сайты)',
    icon: 'Server',
    status: 'development',
    tags: ['Hosting', 'Control Panel', 'Web']
  },
  {
    title: 'Azurothoss',
    description: 'Фреймворк SCSS совместно с Brython',
    icon: 'Code2',
    status: 'alpha',
    tags: ['SCSS', 'Brython', 'Framework']
  }
];

const websiteProjects = [
  {
    title: 'КосмосТайм',
    description: 'Информационно-развлекательный сайт',
    icon: 'Newspaper',
    status: 'active',
    tags: ['Django', 'Медиа', 'Контент']
  },
  {
    title: 'Радио "5-я волна"',
    description: 'Онлайн радиостанция: поп-музыка, 80-2000х, дискотеки, релаксная музыка, новости и поздравления',
    icon: 'Music',
    status: 'active',
    tags: ['Радио', 'Онлайн', 'Музыка']
  },
  {
    title: 'TrainPedia',
    description: 'Российская железнодорожная википедия',
    icon: 'Train',
    status: 'active',
    tags: ['Википедия', 'РЖД', 'База знаний']
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'development':
      return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">В разработке</Badge>;
    case 'alpha':
      return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Альфа-версия</Badge>;
    case 'active':
      return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Активен</Badge>;
    default:
      return null;
  }
};

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

        {/* Software Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Программное обеспечение</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareProjects.map((project, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-secondary rounded-lg">
                      <Icon name={project.icon} size={24} className="text-primary" />
                    </div>
                    {getStatusBadge(project.status)}
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
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

        {/* Website Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Веб-сайты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteProjects.map((project, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-secondary rounded-lg">
                      <Icon name={project.icon} size={24} className="text-primary" />
                    </div>
                    {getStatusBadge(project.status)}
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
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
      </div>
    </section>
  );
};

export default Projects;
