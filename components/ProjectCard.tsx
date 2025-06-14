'use client';

import Link from 'next/link';
import Image from 'next/image';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  buttonText: string;
  techStack: string[];
}

export default function ProjectCard({ title, description, imageUrl, link, buttonText, techStack }: Project) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100">
      <div className="relative h-48 md:h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6 md:p-8 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-sky-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-sky-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
} 