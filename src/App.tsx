import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Criteria from './components/Criteria';
import Process from './components/Process';
import Team from './components/Team';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-900 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <About />
        
        <Criteria />
        
        <Process />
        
        <Team />
        
        {/* Investment Highlight Section */}
        <section className="section-padding bg-brand-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 border border-white/20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-600" />
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
                A Compelling <span className="text-brand-600 not-italic">Investment Opportunity.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                H2 Quest combines deep operational understanding with robust financial expertise to target firms with strong potential exit valuations. Our technical background provides credibility to potential sellers, customers, and vendors.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-brand-900 px-10 py-4 text-lg font-bold uppercase tracking-widest hover:bg-brand-50 transition-colors"
              >
                Request PPM
              </a>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-4">Legal Disclaimer</div>
            <p className="text-[10px] text-slate-400 leading-relaxed text-justify">
              THIS PRESENTATION IS BEING FURNISHED ON A CONFIDENTIAL BASIS AND DOES NOT CONSTITUTE AN OFFER TO SELL OR THE SOLICITATION OF AN OFFER TO BUY INVESTMENT UNITS IN ANY STATE OR JURISDICTION WHERE THE OFFER OR SALE THEREOF WOULD BE PROHIBITED. THIS INVESTMENT UNIT WILL INVOLVE CERTAIN RISKS. AS SUCH, INVESTORS SHOULD HAVE A TOLERANCE FOR AND ADEQUATE FINANCIAL RESOURCES TO ACCEPT THE RISKS AND LIQUIDITY CONSTRAINTS CHARACTERISTIC OF THIS TYPE OF INVESTMENT. THE INFORMATION CONTAINED HEREIN IS GIVEN AS OF FEBRUARY 2026, AND H2 QUEST DOES NOT UNDERTAKE TO UPDATE ANY OF THE INFORMATION CONTAINED HEREIN.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
