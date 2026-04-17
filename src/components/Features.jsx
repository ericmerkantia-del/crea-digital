import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="pourquoi">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-4xl md:text-5xl mb-6">
            Pourquoi choisir <span className="text-primary italic">Crea Digital</span> ?
          </h2>
          <p className="text-on-surface/60 max-w-2xl mx-auto">Une alliance unique entre excellence technique et valeurs partagées.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 border-b md:border-b-0 md:border-r lg:border-r border-outline-variant/10 last:border-0"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>church</span>
            </div>
            <h3 className="font-headline text-2xl mb-4">Expertise chrétienne</h3>
            <p className="text-on-surface/70 leading-relaxed">Nous comprenons les codes et les enjeux spécifiques du monde chrétien pour une communication authentique.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 border-b md:border-b-0 lg:border-r border-outline-variant/10"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
            </div>
            <h3 className="font-headline text-2xl mb-4">Approche sur-mesure</h3>
            <p className="text-on-surface/70 leading-relaxed">Pas de solutions génériques. Chaque projet est une œuvre unique adaptée à votre vision propre.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center text-center p-6 border-outline-variant/10 last:border-0"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            </div>
            <h3 className="font-headline text-2xl mb-4">Résultats mesurables</h3>
            <p className="text-on-surface/70 leading-relaxed">Nous lions chaque action à des indicateurs concrets de croissance et d'impact pour votre mission.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
