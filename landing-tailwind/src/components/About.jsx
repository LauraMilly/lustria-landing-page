import React from 'react';

const services = [
  {
    title: 'Cuidados com o Jardim',
    icon: '/icons/vecteezy_cactus-potted-plant-cartoon-background-vector_11853065.jpg',
    text: 'Vamos encontrar a combinação de plantas ideal para você aproveitar seu tempo.',
  },
  {
    title: 'Renovação de Plantas',
    icon: '/icons/vecteezy_potted-plant-cartoon-background-vector-flat-plant-icons-vector_11853068.jpg',
    text: 'Vamos encontrar a combinação de plantas ideal para você aproveitar seu tempo.',
  },
  {
    title: 'Fornecimento de Sementes',
    icon: '/icons/vecteezy_potted-plant-cartoon-background-vector-flat-plant-icons-vector_11853074.jpg',
    text: 'Vamos encontrar a combinação de plantas ideal para você aproveitar seu tempo.',
  },
  {
    title: 'Rega do Jardim',
    icon: '/icons/vecteezy_cactus-potted-plant-cartoon-background-vector_11853065.jpg',
    text: 'Vamos encontrar a combinação de plantas ideal para você aproveitar seu tempo.',
  },
];

const About = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-greenPrimary uppercase text-sm tracking-wide mb-2">Bem-vindo à Lustria</p>
        <h2 className="text-3xl font-bold mb-4">Nossa Jornada de Sonhos</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nosso propósito é inspirar todos a se tornarem pais de plantas — uma coleção de conteúdos do time da Lustria
          abordando diversos temas sobre cuidado com plantas para ajudar você a cultivar confiança no seu jardim.
        </p>

        <p className="mt-4 text-gray-600 italic">
          Felizmente, temos algumas dicas valiosas para uma rega eficaz e saudável.
        </p>

        <div className="mt-6 flex flex-col items-center">
          <img src="/assets/assinatura.png" alt="Assinatura" className="w-32 h-auto" />
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-semibold">Laura Souza</span><br />Fundadora / CEO
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
