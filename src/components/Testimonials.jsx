import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Pasteur Marc Dubois",
      role: "Église de l'Espérance",
      quote: "Crea Digital a su retranscrire parfaitement l'âme de notre église à travers notre nouveau site. L'impact sur notre accueil de nouveaux membres est visible.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3_Huwx-YkCuKGO4IrETz6jnjdd1se7LuBIGCCUA-TIhixfOW3y61ZexVzHfqLqT2tkz1H6L8G6d5q9KzEbcV93pGuYjA1knuH6LZGWMuzyjVRmT7kGCnobcvzU1mDKOqVSPPSlAdoA9Ehs-vDKHajmzMcqxoh0XPp5tERsYHmTZvafu7KqDt1OsGQh4-oqzJeVyQi5FV0mVAu5EuxjHyCe_AXbAiThcBgksKjYtjNjUZEzojaryVKxHwxcLpTNl01cmaEykk9L0o",
      offset: false
    },
    {
      id: 2,
      name: "Sarah Lambert",
      role: "Directrice Vision Mission",
      quote: "L'expertise technique alliée à la compréhension spirituelle est ce qui rend Crea Digital unique. Notre application mobile de prière est un succès total.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-b3QePKDvpaWeOnTIIKW-cu1BN9KMEfElf0EX1JIo8PBcHSJgGgClHHjVIx5xsGfUAFtzGXLnMvbSzmxZaS8Yp7ppLkv6DacqSZuBfSNhUlrFdhErzqVBAQDDKttcuOccTxBn_Mb1z7KGnI4aZC-lkJ53RAh64xzHX9BaD90ZU7il_G39auDeEiKnwwEM-bIit-Pl9xRRf4gGWVEpVBCJQJVlO1lt1gP5YMOVarywmXc0_zVCnfZiR_b1zLd9_EdzC717nAc11dE",
      offset: true
    },
    {
      id: 3,
      name: "Jean-Pierre Roche",
      role: "Fondation Le Phare",
      quote: "Le professionnalisme et l'écoute de l'équipe ont permis de créer une plateforme qui décuple véritablement notre capacité de rayonnement solidaire.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC15h9JEKePJfzs896WPBYRmwt_aCUKOe5BUkQ9nJeMINQUThx5Vi-F89o0uDZ5lNZY0ZM4gdCL2aph4U8AUznYlIIQRCmJATL3jOy7KCC_r_WAMyFk9LATOsTn1kJg6MEZedi9ZVI0I5Foh00NEQlIte3N2bW7o8UVbrv6Qpt_eLq_35xNPsBOYM7XM3ZOm2f1jzL4eRaCE54BRuYnAFRAAjjR_zx9ycbcliFSwYmp9sUqjpzvuZ12VLnJV3SsZYQPfLC-1tG6InA",
      offset: false
    }
  ];

  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl text-center mb-16"
        >
          Ils nous font <span className="text-primary italic">confiance</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-surface-container p-8 rounded-xl border relative ${t.offset ? 'md:-translate-y-4 border-primary/20 bg-surface-container-high' : 'border-outline-variant/10'}`}
            >
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-6">format_quote</span>
              <p className="text-on-surface/80 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all border border-outline-variant/20" alt={`Portrait de ${t.name}`} src={t.img} />
                <div>
                  <p className="font-bold text-sm text-on-surface">{t.name}</p>
                  <p className="text-primary text-xs uppercase tracking-tighter mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Light Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
