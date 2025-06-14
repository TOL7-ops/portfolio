import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="About me"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With several years of experience in full-stack development, I specialize in building modern web applications using cutting-edge technologies.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in tech started when I built my first website in college. Since then, I've worked on numerous projects, from small business websites to complex enterprise applications. I'm particularly interested in React, TypeScript, and modern web frameworks like Next.js.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community events.
            </p>
            
            <div className="pt-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 