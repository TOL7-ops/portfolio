import Link from 'next/link';
import Image from 'next/image';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: Project) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link 
          href={link}
          className="inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
} 