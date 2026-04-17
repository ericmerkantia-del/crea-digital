export default function Footer() {
  return (
    <footer className="bg-[#060e20] w-full py-12 px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-['Newsreader'] text-[#f2ca50] mb-2 italic">Crea Digital</h2>
          <p className="font-['Inter'] text-sm tracking-wide text-[#dae2fd]/60">© {new Date().getFullYear()} Crea Digital. Mettre le digital au service de la mission.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-['Inter'] text-sm tracking-wide text-on-surface/60 hover:text-primary hover:underline transition-all" href="#">WhatsApp</a>
          <a className="font-['Inter'] text-sm tracking-wide text-on-surface/60 hover:text-primary hover:underline transition-all" href="#">Instagram</a>
          <a className="font-['Inter'] text-sm tracking-wide text-on-surface/60 hover:text-primary hover:underline transition-all" href="#">Facebook</a>
          <a className="font-['Inter'] text-sm tracking-wide text-on-surface/60 hover:text-primary hover:underline transition-all" href="#">Mentions Légales</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface/60 hover:border-primary hover:text-primary transition-all hover:bg-primary/5" href="mailto:contact@crea-digital.com">
            <span className="material-symbols-outlined text-sm">mail</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
}
