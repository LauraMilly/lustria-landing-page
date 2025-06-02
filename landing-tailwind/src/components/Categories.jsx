import React from 'react';

const categories = [
  { name: 'Succulentas', count: 13, image: '/categories/natureza-morta-com-plantas-de-interior (1).jpg' },
  { name: 'Vasos Decorativos', count: 11, image: '/categories/plantas-de-interior-em-estudio (1).jpg' },
  { name: 'Terrários', count: 9, image: '/categories/plantas-de-interior-em-estudio.jpg' },
  { name: 'Mini Jardins', count: 6, image: '/categories/vaso-octongo.avif' },
  { name: 'Plantas Raras', count: 8, image: '/categories/vasos.plants.jpg' },
];

const Categories = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-greenPrimary uppercase text-sm tracking-wide mb-2">
          Todos os tipos de plantas
        </p>
        <h2 className="text-3xl font-bold mb-10">Categorias em Destaque</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="relative group overflow-hidden rounded shadow">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[240px] object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded shadow text-sm font-medium">
                {cat.name} ({cat.count})
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
