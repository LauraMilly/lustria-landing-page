import React, { useState } from 'react';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = (e) => e.preventDefault();

  return (
    <>
      <div className="bg-greenPrimary text-white text-sm py-2 text-center">    
        Enviamos para todo o país. Política de devolução em até 30 dias. Frete padrão grátis para pedidos acima de R$ 75.00.
      </div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
          <div className="text-sm text-gray-600 hidden md:flex space-x-4 items-center">
            <span>BR</span>
            <span>|</span>
            <span>PE</span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <PhoneIcon className="w-4 h-4 text-greenPrimary" />
              +55 987 877 821
            </span>
          </div>

          <div className="text-2xl font-bold text-greenPrimary text-center">
            <span className="font-light tracking-widest">LUSTRIA</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <a href="#" role="button" onClick={handleClick} className="hover:text-green-700 hidden sm:inline">
              Log in / Cadastro
            </a>
            <button className="text-xl hover:text-green-700">🛒</button>

            <button
              className="sm:hidden text-gray-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <nav className="border-t border-gray-200 hidden sm:flex">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center space-x-8 text-gray-700 text-sm font-medium">
            <a href="#" role="button" onClick={handleClick} className="hover:text-green-700">Home</a>
            <a href="#" role="button" onClick={handleClick} className="hover:text-green-700">Compras</a>
            <a href="#" role="button" onClick={handleClick} className="hover:text-green-700">Categorias</a>
            <a href="#" role="button" onClick={handleClick} className="hover:text-green-700">Blogs</a>
            <a href="#" role="button" onClick={handleClick} className="hover:text-green-700">Paginas</a>
            <a href="#" role="button" onClick={handleClick} className="hover:text-green-700">Faturas</a>
          </div>
        </nav>
        {menuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2 text-gray-700 text-sm font-medium">
            <a href="#" onClick={handleClick} className="block hover:text-green-700">Home</a>
            <a href="#" onClick={handleClick} className="block hover:text-green-700">Compras</a>
            <a href="#" onClick={handleClick} className="block hover:text-green-700">Categorias</a>
            <a href="#" onClick={handleClick} className="block hover:text-green-700">Blogs</a>
            <a href="#" onClick={handleClick} className="block hover:text-green-700">Paginas</a>
            <a href="#" onClick={handleClick} className="block hover:text-green-700">Faturas</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
