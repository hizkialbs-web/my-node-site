import { CheckCircle2 } from 'lucide-react';

export default function Criteria() {
  const financialCriteria = [
    "Stable revenue",
    "70% recurring revenue",
    "Annual EBITDA between US$1M - US$5M",
    "EBITDA margin over 15%",
    "Strong and positive free cash flow",
    "Positive economic profit"
  ];

  const businessCriteria = [
    "No key employee risk",
    "Potential operating margin increase",
    "Low churn rate",
    "Scalable business",
    "Motivated seller"
  ];

  const industries = [
    "Cold chain logistics",
    "SaaS serving SMEs",
    "Agriculture (Coffee, Cocoa, Seafood)",
    "Daycare & Dental Clinics",
    "Veterinary Clinics"
  ];

  return (
    <section id="criteria" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/10 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Target Profile</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 italic">Investment <span className="text-brand-600 not-italic">Criteria.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-serif italic border-b border-white/10 pb-4">Financials</h3>
            <ul className="space-y-4">
              {financialCriteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-serif italic border-b border-white/10 pb-4">Business</h3>
            <ul className="space-y-4">
              {businessCriteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-serif italic border-b border-white/10 pb-4">Industries</h3>
            <div className="flex flex-wrap gap-3">
              {industries.map((item, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-brand-900/20 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 p-6 bg-brand-900/20 border border-brand-900/30">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Geography</h4>
              <p className="text-2xl font-serif italic">Indonesia</p>
              <p className="text-sm text-slate-400 mt-2">Focusing on high-quality privately held entities in Southeast Asia's largest economy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
