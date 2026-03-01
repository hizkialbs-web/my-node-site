import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: "Heza Failasuf Akbar",
      role: "Principal | MBA Candidate, Cambridge",
      bio: "Product & Operations Expert with 8+ years experience driving $42M+ P&L at global B2B leaders. Proven track record in tactical problem-solving and strategic leadership.",
      image: "https://picsum.photos/seed/heza/400/500"
    },
    {
      name: "Hizkia Lasma Bonatua Siringoringo",
      role: "Principal | CFA, MBA Candidate, Cambridge",
      bio: "Finance Professional with expertise in valuation, deal structuring, and M&A. Previously led financial operations and fundraising for high-growth Indonesian startups.",
      image: "https://picsum.photos/seed/hizkia/400/500"
    }
  ];

  return (
    <section id="team" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-brand-900 font-bold tracking-widest uppercase text-sm">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 italic">The <span className="text-brand-900 not-italic">Principals.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-8 border border-slate-200 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-48 h-64 shrink-0 overflow-hidden bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif italic mb-1">{member.name}</h3>
                <p className="text-brand-900 text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-brand-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-brand-900 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
