'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 p-4">
      <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-tr from-sky-200 to-gold-100 shadow-2xl transform hover:scale-105 transition-all duration-300">
        {!imageError ? (
          <Image
            src="/tolucore.jpg"
            alt="Tolu - Full Stack Developer"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            priority
            onError={() => setImageError(true)}
            style={{ objectPosition: 'center top' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
            <span>Image not found</span>
          </div>
        )}
      </div>
    </div>
  );
}