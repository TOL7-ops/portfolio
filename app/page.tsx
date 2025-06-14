import ProjectCard, { Project } from '../components/ProjectCard';
import TechBadge from '../components/TechBadge';
import ProfileImage from '../components/ProfileImage';
import ContactLinks from '../components/ContactLinks';

const projects: Project[] = [
  {
    id: '1',
    title: 'StackMaster3D',
    description: 'A 3D puzzle game you can play directly online. Test your skills with this engaging stack-up challenge.',
    imageUrl: '/stack3d.png',
    link: 'https://stack-master3-d.vercel.app/',
    buttonText: 'Play Now',
    techStack: ['Next.js', 'TypeScript', 'Three.js']
  },
  {
    id: '2',
    title: 'Church AI Assistant',
    description: 'Your all-in-one church helper — service times, donation, prayer points, and more. Get instant answers to your questions.',
    imageUrl: '/church-assistant.png',
    link: 'https://church-assistant.vercel.app/',
    buttonText: 'Chat Now',
    techStack: ['Next.js', 'Supabase', 'Paystack']
  }
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Supabase', icon: '🔋' },
  { name: 'LangChain/GPT', icon: '🤖' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind CSS', icon: '🎨' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-ivory-50 to-sky-50">
      {/* About Me Section */}
      <section className="py-20 px-6 md:py-32 bg-gradient-to-br from-ivory-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 flex justify-center">
              <div className="transform hover:scale-105 transition-all duration-500">
                <ProfileImage />
              </div>
            </div>
            <div className="md:w-1/2 space-y-8 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-sky-800 to-gray-900">
                About Me — An Astonishing Developer Making Impact
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with a mission to use technology for the greater good. 
                I'm building software to empower my church and community. I'm proficient in modern web technologies 
                and eager to grow, learn, and innovate.
              </p>
              <div className="flex gap-6 justify-center md:justify-start">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-sky-600 text-white rounded-xl shadow-lg hover:bg-sky-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-lg font-medium"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white text-sky-600 border-2 border-sky-600 rounded-xl shadow-lg hover:bg-sky-50 transition-all duration-300 hover:-translate-y-1 text-lg font-medium"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech) => (
              <TechBadge key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Collaborate</h2>
          <p className="text-xl text-gray-600 mb-12">
            Open to freelance, collaboration, or employment opportunities. Feel free to connect with me!
          </p>
          <ContactLinks />
        </div>
      </section>
    </main>
  );
}