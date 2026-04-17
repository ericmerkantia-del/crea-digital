import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl shadow-2xl shadow-[#060e20]/40">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a className="text-2xl font-bold font-['Newsreader'] text-[#f2ca50] italic tracking-tight hover:scale-105 transition-transform duration-300" href="#">Crea Digital</a>
        
        <div className="hidden md:flex space-x-10 items-center">
          <a className="font-['Newsreader'] tracking-tight text-[#f2ca50] border-b-2 border-[#f2ca50] pb-1 transition-colors" href="#services">Services</a>
          <a className="font-['Newsreader'] tracking-tight text-[#dae2fd] hover:text-[#f2ca50] transition-colors" href="#pourquoi">Pourquoi nous</a>
          <a className="font-['Newsreader'] tracking-tight text-[#dae2fd] hover:text-[#f2ca50] transition-colors" href="#quote">Devis</a>
          <a className="font-['Newsreader'] tracking-tight text-[#dae2fd] hover:text-[#f2ca50] transition-colors" href="#contact">Contact</a>
          <a className="metallic-glow text-on-primary px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20" href="#quote">
              Devis
          </a>
        </div>
        
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-container absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-4 shadow-xl border-t border-outline-variant/10">
          <a className="font-['Newsreader'] text-[#dae2fd] hover:text-[#f2ca50]" href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a className="font-['Newsreader'] text-[#dae2fd] hover:text-[#f2ca50]" href="#pourquoi" onClick={() => setIsOpen(false)}>Pourquoi nous</a>
          <a className="font-['Newsreader'] text-[#dae2fd] hover:text-[#f2ca50]" href="#quote" onClick={() => setIsOpen(false)}>Devis</a>
          <a className="font-['Newsreader'] text-[#dae2fd] hover:text-[#f2ca50]" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
