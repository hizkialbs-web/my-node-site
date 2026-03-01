import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focused Search",
      description: "Exclusively focused on finding a single, high-quality company with a motivated seller and meaningful growth potential."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Model",
      description: "Utilizing the search fund model, which has consistently produced strong annual returns and multiples on invested capital since 1984."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Risk Mitigation",
      description: "Structured to mitigate risks associated with small business acquisition through staged financing and rigorous due diligence."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Operational Expertise",
      description: "Led by principals with deep experience in product management, finance, and international business strategy."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight italic">
              A Strategic Approach to <br />
              <span className="text-brand-900 not-italic">Private Equity.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              H2 Quest is formed to identify, acquire, and operate an existing company with an initial enterprise value between US$5 million and US$30 million.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our purpose is to provide investors with the opportunity to participate in the staged financing of the search for and acquisition of an existing company in Indonesia, one of the world's fastest-growing economies.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-brand-900 pl-4">
                <div className="text-3xl font-serif text-brand-900 italic">18.1%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Avg. Annual Returns</div>
              </div>
              <div className="border-l-2 border-brand-900 pl-4">
                <div className="text-3xl font-serif text-brand-900 italic">2x</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Avg. MOIC</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 border border-slate-100 hover:border-brand-900/20 transition-all"
              >
                <div className="text-brand-900 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-3 italic">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
