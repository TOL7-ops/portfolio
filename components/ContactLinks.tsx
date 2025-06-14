'use client';

import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
  hoverColor: string;
}

export default function ContactLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/@ULOPE_',
      icon: <FaTwitter className="w-6 h-6" />,
      hoverColor: 'hover:bg-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/TOL7-ops-321a032a8',
      icon: <FaLinkedinIn className="w-6 h-6" />,
      hoverColor: 'hover:bg-[#0A66C2]'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/TOL7-ops',
      icon: <FaGithub className="w-6 h-6" />,
      hoverColor: 'hover:bg-gray-800'
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900">Let's connect!</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full bg-white shadow-md transition-all duration-300 
              ${link.hoverColor} hover:text-white hover:-translate-y-1 hover:shadow-lg
              border border-gray-100 group`}
            aria-label={`Connect on ${link.name}`}
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 