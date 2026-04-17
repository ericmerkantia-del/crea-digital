import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xlddpqjy', { // Default dummy ID, ideally replaced
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center" id="contact">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-headline text-5xl mb-8">Commençons votre <span className="text-primary italic">Projet</span></h2>
        <p className="text-on-surface/70 text-lg mb-12 leading-relaxed">
          Vous avez une vision ? Nous avons les outils pour lui donner vie. Contactez-nous dès aujourd'hui pour une consultation gratuite.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border border-outline-variant/10">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-xs text-on-surface/50 uppercase tracking-widest">Email</p>
              <p className="font-medium">contact@crea-digital.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border border-outline-variant/10">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs text-on-surface/50 uppercase tracking-widest">WhatsApp</p>
              <p className="font-medium">+33 1 23 45 67 89</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border border-outline-variant/10">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="text-xs text-on-surface/50 uppercase tracking-widest">Localisation</p>
              <p className="font-medium">Paris, France (Remote-friendly)</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20 shadow-2xl space-y-6 relative overflow-hidden">
          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 w-full p-4 bg-green-500/20 border-b border-green-500/50 flex flex-col items-center justify-center z-10 backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-green-400 mb-1 text-3xl">check_circle</span>
                <p className="text-green-400 font-medium text-center">Message envoyé avec succès ! Nous vous recontacterons très vite.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface/60">Prénom & Nom</label>
              <input name="name" required className="relative w-full bg-surface-container px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary transition-all text-on-surface hover:bg-surface-container-high" placeholder="Jean Dupont" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface/60">Email</label>
              <input name="email" required className="w-full bg-surface-container px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary transition-all text-on-surface hover:bg-surface-container-high" placeholder="jean@eglise.com" type="email" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface/60">Organisation / Église</label>
            <input name="organization" className="w-full bg-surface-container px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary transition-all text-on-surface hover:bg-surface-container-high" placeholder="Le nom de votre ministère" type="text" />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface/60">Type de Projet</label>
            <select name="project_type" className="w-full bg-surface-container px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary appearance-none text-on-surface hover:bg-surface-container-high cursor-pointer">
              <option>Site Internet</option>
              <option>App Mobile</option>
              <option>Accompagnement Stratégique</option>
              <option>Marketing & Communication</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface/60">Votre Message</label>
            <textarea name="message" required className="w-full bg-surface-container px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary transition-all text-on-surface hover:bg-surface-container-high" placeholder="Dites-nous en plus sur votre vision..." rows="4"></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full metallic-glow text-on-primary py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(242,202,80,0.3)] hover:scale-[1.02] transition-all disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {status === 'submitting' ? (
               <><span className="material-symbols-outlined animate-spin">refresh</span> Envoi en cours...</>
            ) : 'Envoyer ma demande'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
