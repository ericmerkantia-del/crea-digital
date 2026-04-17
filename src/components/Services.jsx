import { motion } from 'framer-motion';

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="services">
      <div className="mb-16">
        <h2 className="font-headline text-4xl md:text-5xl mb-4">
          Nos <span className="text-primary italic">Expertises</span>
        </h2>
        <div className="h-1 w-24 bg-primary"></div>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-full"
      >
        {/* Web Service */}
        <motion.div variants={item} className="lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500">
          <div className="flex justify-between items-start mb-12">
            <span className="material-symbols-outlined text-primary text-5xl">language</span>
            <span className="text-on-surface/20 text-6xl font-headline font-bold">01</span>
          </div>
          <h3 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">Création de site web</h3>
          <p className="text-on-surface/70 text-lg max-w-md">Sites internet haut de gamme, vitrines institutionnelles et plateformes de ressources optimisées pour l'engagement.</p>
        </motion.div>

        {/* App Service */}
        <motion.div variants={item} className="lg:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500">
          <div className="flex justify-between items-start mb-12">
            <span className="material-symbols-outlined text-primary text-5xl">smartphone</span>
            <span className="text-on-surface/20 text-6xl font-headline font-bold">02</span>
          </div>
          <h3 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">Développement d'application</h3>
          <p className="text-on-surface/70">Expériences mobiles natives pour connecter votre communauté partout, tout le temps.</p>
        </motion.div>

        {/* Strategy Service */}
        <motion.div variants={item} className="lg:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500">
          <div className="flex justify-between items-start mb-12">
            <span className="material-symbols-outlined text-primary text-5xl">auto_awesome</span>
            <span className="text-on-surface/20 text-6xl font-headline font-bold">03</span>
          </div>
          <h3 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">Stratégie & Évangélisation</h3>
          <p className="text-on-surface/70">Conseil stratégique pour aligner vos outils numériques avec votre vision.</p>
        </motion.div>

        {/* Marketing Service */}
        <motion.div variants={item} className="lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500">
          <div className="flex justify-between items-start mb-12">
            <span className="material-symbols-outlined text-primary text-5xl">campaign</span>
            <span className="text-on-surface/20 text-6xl font-headline font-bold">04</span>
          </div>
          <h3 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">Marketing & Emailing</h3>
          <p className="text-on-surface/70 text-lg max-w-md">Amplifiez votre message sur les réseaux sociaux et moteurs de recherche avec une approche éthique et performante.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
