'use client';

interface TechBadgeProps {
  name: string;
  icon: string;
}

export default function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <div className="group flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="text-center space-y-2">
        <span className="text-3xl block group-hover:scale-110 transition-transform duration-300">{icon}</span>
        <span className="text-sm font-medium text-gray-700 block">{name}</span>
      </div>
    </div>
  );
} 