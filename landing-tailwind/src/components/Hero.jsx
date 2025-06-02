import React, { useState } from 'react';

const images = [
  '/plants/pngegg (1).png',
  '/plants/pngegg (2).png',
  '/plants/pngegg (3).png'
];

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-bgHero py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">
        <div className="max-w-md">
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
            Bem-Vindo a Lustria
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Plantas que espalham felicidade.
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officiis dolor neque temporibus saepe dolore, pariatur quam voluptatum ipsam cum unde recusandae sit!
          </p>
          <button className="mt-6 bg-greenPrimary text-white px-6 py-3 rounded hover:bg-green-600 transition">
            Ver Plantas
          </button>
          <div className="mt-6 text-gray-400 text-sm space-x-4">
            <span className="cursor-pointer hover:text-greenPrimary">Plants</span>
            <span className="cursor-pointer hover:text-greenPrimary">Terrarium</span>
            <span className="cursor-pointer hover:text-greenPrimary">Succulents</span>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <img
            src={images[imageIndex]}
            alt="Plant"
            className="w-[500px] h-[500px] object-contain transition-all duration-500"
          />
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-8 h-8 shadow hover:bg-greenPrimary hover:text-white"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-8 h-8 shadow hover:bg-greenPrimary hover:text-white"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
