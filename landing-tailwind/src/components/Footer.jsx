import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bgHero text-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-greenPrimary mb-2">Lustria</h2>
          <p className="text-sm text-gray-600">
            Inspirando pessoas a cultivarem mais verde em casa, com estilo e praticidade.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Navegação</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-greenPrimary">Início</a></li>
            <li><a href="#" className="hover:text-greenPrimary">Loja</a></li>
            <li><a href="#" className="hover:text-greenPrimary">Categorias</a></li>
            <li><a href="#" className="hover:text-greenPrimary">Contato</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contato</h3>
          <ul className="text-sm space-y-1">
            <li>Rua Verde 123, Recife - PE</li>
            <li>+55 (81) 98982-5525</li>
            <li>laauramirellydesouza@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Receba novidades</h3>
          <p className="text-sm mb-3">Cadastre-se e receba promoções e dicas de cultivo.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l outline-none"
            />
            <button className="bg-greenPrimary text-white px-4 rounded-r text-sm hover:bg-green-600">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="bg-bgHero text-center text-sm py-4">
        © {new Date().getFullYear()} Lustria. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
