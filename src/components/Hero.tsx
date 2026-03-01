import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-brand-50 text-brand-900 text-xs font-bold tracking-widest uppercase mb-6">
              Search Fund | Indonesia
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] text-slate-900 mb-8 italic">
              Identifying, Acquiring, and Operating <span className="text-brand-900 not-italic">Excellence.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              H2 Quest is a dedicated search fund focused on acquiring a single, high-quality business in Indonesia with a proven track record of stable returns and growth potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#criteria"
                className="inline-flex items-center justify-center bg-brand-900 text-white px-8 py-4 text-lg font-medium hover:bg-brand-800 transition-all group"
              >
                Investment Criteria
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border border-slate-300 text-slate-800 px-8 py-4 text-lg font-medium hover:bg-slate-100 transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-[-10%] bottom-[-10%] w-[60%] aspect-square bg-brand-900/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
}
