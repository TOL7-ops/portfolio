import Image from 'next/image';

interface HeroProps {
  title: string;
  bio: string;
  imageUrl: string;
}

export default function Hero({ title, bio, imageUrl }: HeroProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-4 max-w-6xl mx-auto gap-8">
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">{bio}</p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
          <Image
            src={imageUrl}
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
} 