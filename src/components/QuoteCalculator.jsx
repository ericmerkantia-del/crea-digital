import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    projectType: null,
    scope: null,
    features: [],
    services: [],
    urgency: null
  });

  // Données des étapes
  const projectTypes = [
    { id: 'vitrine', category: 'web', label: 'Site Web Vitrine', desc: 'Présenter votre organisation', icon: 'web', basePrice: 1500 },
    { id: 'ecommerce', category: 'web', label: 'E-Commerce', desc: 'Vendre des produits/dons', icon: 'shopping_cart', basePrice: 3500 },
    { id: 'app', category: 'web', label: 'App Mobile', desc: 'iOS & Android', icon: 'smartphone', basePrice: 6000 },
    { id: 'custom', category: 'web', label: 'Plateforme Sur-Mesure', desc: 'Réseau social, intranet...', icon: 'dashboard_customize', basePrice: 8000 },
    { id: 'strategy', category: 'strategy', label: 'Stratégie Digitale & Conseil', desc: 'Accompagnement, Audit et Plan', icon: 'auto_awesome', basePrice: 2000 },
    { id: 'marketing', category: 'marketing', label: 'Campagne Marketing & Emailing', desc: 'Mailing, Social Media Ads', icon: 'campaign', basePrice: 1500 },
  ];

  const scopesData = {
    web: [
      { id: 'small', label: 'Essentiel', desc: 'Design simple, peu de pages', multiplier: 1 },
      { id: 'medium', label: 'Standard', desc: 'Design complet, dynamique', multiplier: 1.5 },
      { id: 'large', label: 'Premium', desc: 'Animations poussées, très complet', multiplier: 2.2 },
    ],
    strategy: [
      { id: 'small', label: 'Audit Ciblé', desc: 'Analyse d\'un besoin spécifique', multiplier: 1 },
      { id: 'medium', label: 'Stratégie Globale', desc: 'Audit complet & plan d\'action', multiplier: 1.5 },
      { id: 'large', label: 'Transformation', desc: 'Stratégie + Accompagnement continu', multiplier: 2.5 },
    ],
    marketing: [
      { id: 'small', label: 'Ponctuel', desc: 'Une campagne isolée', multiplier: 1 },
      { id: 'medium', label: 'Trimestriel', desc: 'Animation sur 3 mois', multiplier: 2.5 },
      { id: 'large', label: 'Annuel', desc: 'Gestion continue et optimisée', multiplier: 6 },
    ]
  };

  const featuresData = {
    web: [
      { id: 'auth', label: 'Espace Membre / Connexion', price: 800 },
      { id: 'payment', label: 'Paiement / Dons en ligne', price: 600 },
      { id: 'i18n', label: 'Multi-langue', price: 500 },
      { id: 'booking', label: 'Système de réservation / Agendas', price: 700 },
      { id: 'blog', label: 'Blog / Actualités', price: 400 },
    ],
    strategy: [
      { id: 'workshop', label: 'Ateliers de co-construction', price: 600 },
      { id: 'formation', label: 'Formation des équipes', price: 800 },
      { id: 'branding', label: 'Guide d\'identité visuelle', price: 1200 },
      { id: 'tech', label: 'Audit infrastructure', price: 700 },
    ],
    marketing: [
      { id: 'ads', label: 'Gestion Campagnes Ads', price: 500 },
      { id: 'copy', label: 'Copywriting Emailing', price: 400 },
      { id: 'design', label: 'Création visuels réseaux', price: 600 },
      { id: 'auto', label: 'Mise en place Automation', price: 800 },
    ]
  };

  const serviceOptions = [
    { id: 'strategy', label: 'Stratégie Digitale & Conseil', price: 1500 },
    { id: 'marketing', label: 'Campagne Marketing & Emailing', price: 1200 },
    { id: 'seo', label: 'Optimisation SEO Avancée', price: 900 },
    { id: 'branding', label: 'Mise à jour Identité Visuelle', price: 1200 },
    { id: 'copy', label: 'Rédaction du contenu', price: 800 },
    { id: 'maintenance', label: 'Pack Maintenance 1 an', price: 1000 },
  ];

  const urgencyOptions = [
    { id: 'standard', label: 'Au bon rythme', desc: '2 à 3 mois', multiplier: 1 },
    { id: 'fast', label: 'Rapide', desc: '1 mois', multiplier: 1.2 },
    { id: 'urgent', label: 'Urgent', desc: '- de 3 semaines', multiplier: 1.5 },
  ];

  const totalSteps = 6;

  const currentCategory = selections.projectType ? selections.projectType.category : 'web';
  const currentScopes = scopesData[currentCategory];
  const currentFeatures = featuresData[currentCategory];
  const currentServices = serviceOptions.filter(s => s.id !== currentCategory);

  const handleSelect = (category, value) => {
    if (category === 'projectType') {
      if (selections.projectType?.id !== value.id) {
        setSelections(prev => ({ ...prev, projectType: value, scope: null, features: [] }));
      }
    } else {
      setSelections(prev => ({ ...prev, [category]: value }));
    }
  };

  const toggleArrayItem = (category, item) => {
    setSelections(prev => {
      const array = prev[category];
      const exists = array.find(i => i.id === item.id);
      return {
        ...prev,
        [category]: exists ? array.filter(i => i.id !== item.id) : [...array, item]
      };
    });
  };

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };
  const resetSimulator = () => {
    setStep(1);
    setSelections({ projectType: null, scope: null, features: [], services: [], urgency: null });
  };

  // Calculs Détaillés
  const baseCost = selections.projectType ? selections.projectType.basePrice : 0;
  const scopeMult = selections.scope ? selections.scope.multiplier : 1;
  const featuresCost = selections.features.reduce((sum, f) => sum + f.price, 0);
  const servicesCost = selections.services.reduce((sum, s) => sum + s.price, 0);
  const urgencyMult = selections.urgency ? selections.urgency.multiplier : 1;

  const subTotal = (baseCost * scopeMult) + featuresCost;
  const globalTotal = (subTotal + servicesCost) * urgencyMult;

  // Validation
  const canGoNext = () => {
    if (step === 1 && !selections.projectType) return false;
    if (step === 2 && !selections.scope) return false;
    if (step === 5 && !selections.urgency) return false;
    return true;
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-lowest" id="quote">
      <div className="max-w-5xl mx-auto bg-surface border border-outline-variant/20 rounded-2xl overflow-hidden shadow-2xl relative">
        <div className="p-6 md:p-12">
          
          {/* Header & Progress */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-2">
              <h2 className="font-headline text-3xl md:text-4xl">Simulateur <span className="text-primary italic">Détaillé</span></h2>
              <div className="flex items-center gap-3">
                {step > 1 && (
                  <button onClick={resetSimulator} className="text-on-surface/50 hover:text-primary transition-colors flex items-center justify-center p-1" title="Recommencer depuis le début">
                    <span className="material-symbols-outlined text-xl">refresh</span>
                  </button>
                )}
                <span className="text-primary font-medium bg-primary/10 px-4 py-1 rounded-full text-sm">Étape {step} / {totalSteps}</span>
              </div>
            </div>
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden mt-4">
              <motion.div 
                className="h-full bg-primary" 
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-primary">Quel est votre objectif principal ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <button key={type.id} onClick={() => handleSelect('projectType', type)} className={`flex items-start gap-4 p-6 rounded-xl border-2 transition-all text-left ${selections.projectType?.id === type.id ? 'bg-primary/10 border-primary' : 'bg-surface-container border-outline-variant/30 hover:border-primary/50'}`}>
                        <span className={`material-symbols-outlined text-3xl ${selections.projectType?.id === type.id ? 'text-primary' : 'text-on-surface/50'}`}>{type.icon}</span>
                        <div>
                          <p className="font-bold text-lg">{type.label}</p>
                          <p className="text-sm text-on-surface/60 mt-1">{type.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-primary">Quelle est l'envergure du projet ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentScopes.map((scope) => (
                      <button key={scope.id} onClick={() => handleSelect('scope', scope)} className={`flex flex-col p-6 rounded-xl border-2 transition-all text-left ${selections.scope?.id === scope.id ? 'bg-primary/10 border-primary' : 'bg-surface-container border-outline-variant/30 hover:border-primary/50'}`}>
                        <p className="font-bold text-xl mb-2">{scope.label}</p>
                        <p className="text-sm text-on-surface/60 flex-grow">{scope.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-primary">{currentCategory === 'web' ? 'Fonctionnalités Requises' : 'Besoins Spécifiques'}</h3>
                  <p className="text-sm text-on-surface/60 mb-4">Sélectionnez toutes celles qui s'appliquent (optionnelles)</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentFeatures.map((feat) => {
                      const isSelected = selections.features.some(f => f.id === feat.id);
                      return (
                        <button key={feat.id} onClick={() => toggleArrayItem('features', feat)} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${isSelected ? 'bg-primary/10 border-primary' : 'bg-surface-container border-outline-variant/30 hover:border-primary/40'}`}>
                          <span className={`${isSelected ? 'font-semibold text-primary' : ''}`}>{feat.label}</span>
                          <span className={`material-symbols-outlined ${isSelected ? 'text-primary' : 'text-on-surface/20'}`}>{isSelected ? 'check_box' : 'check_box_outline_blank'}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-primary">Services Complémentaires</h3>
                  <p className="text-sm text-on-surface/60 mb-4">Mettez toutes les chances de votre côté (optionnel)</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentServices.map((serv) => {
                      const isSelected = selections.services.some(s => s.id === serv.id);
                      return (
                        <button key={serv.id} onClick={() => toggleArrayItem('services', serv)} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${isSelected ? 'bg-primary/10 border-primary' : 'bg-surface-container border-outline-variant/30 hover:border-primary/40'}`}>
                          <span className={`${isSelected ? 'font-semibold text-primary' : ''}`}>{serv.label}</span>
                          <span className={`material-symbols-outlined ${isSelected ? 'text-primary' : 'text-on-surface/20'}`}>{isSelected ? 'check_box' : 'check_box_outline_blank'}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-primary">Vos délais idéaux</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {urgencyOptions.map((urg) => (
                      <button key={urg.id} onClick={() => handleSelect('urgency', urg)} className={`flex flex-col items-center justify-center text-center p-6 rounded-xl border-2 transition-all ${selections.urgency?.id === urg.id ? 'bg-primary/10 border-primary' : 'bg-surface-container border-outline-variant/30 hover:border-primary/50'}`}>
                        <span className="material-symbols-outlined text-4xl mb-4">{urg.id === 'fast' ? 'speed' : urg.id === 'urgent' ? 'bolt' : 'event'}</span>
                        <p className="font-bold text-lg mb-1">{urg.label}</p>
                        <p className="text-sm text-on-surface/60">{urg.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 6 (RESULT) */}
              {step === 6 && (
                <motion.div key="step6" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                  <div className="text-center mb-8">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4">receipt_long</span>
                    <h3 className="text-3xl font-headline">Récapitulatif Estimatif</h3>
                    <p className="text-on-surface/60">Une base de discussion pour construire votre projet.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 space-y-4 text-sm">
                      <h4 className="font-bold text-primary uppercase tracking-widest border-b border-outline-variant/20 pb-2">Détail des coûts</h4>
                      
                      <div className="flex justify-between items-center text-on-surface/80">
                        <span>Base : {selections.projectType?.label}</span>
                        <span>{baseCost} €</span>
                      </div>
                      
                      {selections.scope?.multiplier !== 1 && (
                        <div className="flex justify-between items-center text-primary/80 pl-4 border-l-2 border-primary/30">
                          <span>Multiplicateur {selections.scope?.label} (x{selections.scope?.multiplier})</span>
                        </div>
                      )}

                      {selections.features.length > 0 && (
                        <div className="pt-2 border-t border-outline-variant/10">
                          <p className="text-xs text-on-surface/50 mb-2 uppercase">Fonctionnalités</p>
                          {selections.features.map(f => (
                            <div key={f.id} className="flex justify-between items-center text-on-surface/80 mb-1">
                              <span>+ {f.label}</span>
                              <span>{f.price} €</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {selections.services.length > 0 && (
                        <div className="pt-2 border-t border-outline-variant/10">
                          <p className="text-xs text-on-surface/50 mb-2 uppercase">Services additionnels</p>
                          {selections.services.map(s => (
                            <div key={s.id} className="flex justify-between items-center text-on-surface/80 mb-1">
                              <span>+ {s.label}</span>
                              <span>{s.price} €</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {selections.urgency?.multiplier !== 1 && (
                        <div className="pt-2 border-t border-outline-variant/10">
                          <div className="flex justify-between items-center text-primary">
                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">warning</span> Majorations URGENT</span>
                            <span>x{selections.urgency.multiplier}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <div className="bg-surface-container-highest p-8 rounded-xl border-2 border-primary/40 text-center shadow-[0_0_30px_rgba(242,202,80,0.15)] relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
                        <span className="block text-sm uppercase tracking-widest text-on-surface/60 mb-2">Budget Global Estimé</span>
                        <span className="text-5xl md:text-6xl font-bold font-headline text-glow">{Math.round(globalTotal).toLocaleString('fr-FR')} €</span>
                        <p className="text-xs text-primary/80 mt-4 bg-primary/10 py-2 px-3 rounded-lg inline-block">Tarif H.T. - Sous réserve de validation du cahier des charges</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="pt-8 mt-6 border-t border-outline-variant/10 flex justify-between">
            {step > 1 ? (
               <button onClick={prevStep} className="text-on-surface/70 hover:text-primary px-4 md:px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                 <span className="material-symbols-outlined">chevron_left</span>
                 Retour
               </button>
            ) : <div></div>}

            {step < totalSteps ? (
              <button 
                onClick={nextStep} 
                disabled={!canGoNext()}
                className={`px-6 md:px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all duration-300 ${!canGoNext() ? 'bg-surface-container-highest text-on-surface/30 cursor-not-allowed hidden md:flex' : 'metallic-glow text-on-primary hover:scale-[1.02] shadow-lg shadow-primary/20'}`}
              >
                Suivant
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            ) : (
              <div className="flex flex-col-reverse sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button onClick={resetSimulator} className="w-full sm:w-auto text-on-surface/60 hover:text-primary transition-colors font-medium border border-outline-variant/30 hover:border-primary/50 px-6 py-4 rounded-lg flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined text-sm">refresh</span>
                  Recommencer
                </button>
                <a href="#contact" className="w-full sm:w-auto metallic-glow text-on-primary px-6 md:px-8 py-4 rounded-lg font-bold flex justify-center items-center gap-2 hover:scale-[1.02] shadow-lg shadow-primary/30 transition-all duration-300">
                  <span className="hidden md:inline">Nous en parler de vive voix</span>
                  <span className="inline md:hidden">Demander Devis</span>
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
