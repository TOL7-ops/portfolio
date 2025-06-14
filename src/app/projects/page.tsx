import ProjectCard, { Project } from '@/components/ProjectCard';

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A full-stack web application built with Next.js and TypeScript.',
    imageUrl: '/project1.jpg',
    link: '/projects/1'
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'A mobile-first responsive design with modern UI/UX principles.',
    imageUrl: '/project2.jpg',
    link: '/projects/2'
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'An e-commerce platform with real-time inventory management.',
    imageUrl: '/project3.jpg',
    link: '/projects/3'
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'A social media dashboard with analytics and reporting features.',
    imageUrl: '/project4.jpg',
    link: '/projects/4'
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
} 