import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover opacity-30" alt="Modern architectural interior with sweeping glass curves and dramatic golden hour sunlight filtering through high windows creating long shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChyxZVI9l-iOD86fdUWrdq07iyjWSr4VYrfJ5xfDmonCj7saGGjyuQ_4n1MWWEgTqe9gf1PpS0XpuFmqORPCFslDwR1wE6F0NGgXm5sweb6E0nSLhMEiDpm4GNVj0nqcRyr_Uyo2iWnYH7Zwg7SCQBnLkIQPUZYISK35-48QKy4BoC-x9lIchPWEF5gR3QJJLNrn2oxgQIAY-AUPz_506ZPLRIdnwEI8I4Mgf-UImuAdr0CqjUTdK3ApE1XFZ-FNqg1wNMuWPaAcg" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-primary text-sm tracking-[0.2em] uppercase mb-6 font-medium"
        >
          Ministère de l'excellence digitale
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-headline text-5xl sm:text-6xl lg:text-8xl text-on-surface mb-8 leading-tight tracking-tight"
        >
          Mettre le digital au <span className="italic text-primary text-glow">service de votre vision</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-on-surface/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Nous concevons des expériences numériques divines pour amplifier votre impact spirituel à travers le monde avec Crea Digital.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a className="metallic-glow text-on-primary px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20 flex items-center gap-2" href="#quote">
              Obtenir mon devis
              <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a className="border border-outline-variant hover:bg-primary/5 text-primary px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300" href="#contact">
              Prendre rendez-vous
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-primary text-3xl">expand_more</span>
      </div>
    </section>
  );
}
