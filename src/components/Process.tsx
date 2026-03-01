export default function Process() {
  const stages = [
    {
      number: "01",
      title: "Fundraising",
      time: "2-6 Months",
      description: "Raising search capital to sustain a dedicated search for up to 24 months."
    },
    {
      number: "02",
      title: "Sourcing",
      time: "1-24 Months",
      description: "Identifying and evaluating opportunities primarily in the Indonesian market."
    },
    {
      number: "03",
      title: "Acquisition",
      time: "3-6 Months",
      description: "Raising acquisition capital, transaction structuring, and closing the deal."
    },
    {
      number: "04",
      title: "Operation",
      time: "4-6 Years",
      description: "Principals assume CEO/CFO roles to drive growth and operational excellence."
    },
    {
      number: "05",
      title: "Exit",
      time: "6-12 Months",
      description: "Executing a successful exit strategy to maximize investor returns."
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-900 font-bold tracking-widest uppercase text-sm">The Roadmap</span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 italic">Search Fund <span className="text-brand-900 not-italic">Lifecycle.</span></h2>
          </div>
          <div className="text-slate-500 max-w-xs text-sm leading-relaxed">
            The search fund model is executed over five distinct stages, typically lasting anywhere from five to ten years.
          </div>
        </div>

        <div className="grid md:grid-cols-5 border-t border-slate-100">
          {stages.map((stage, index) => (
            <div key={index} className="p-8 border-r border-b border-slate-100 last:border-r-0 group hover:bg-slate-50 transition-colors">
              <div className="text-4xl font-serif text-slate-200 group-hover:text-brand-900/20 transition-colors mb-6">{stage.number}</div>
              <h3 className="text-xl font-serif italic mb-2">{stage.title}</h3>
              <div className="text-xs font-bold text-brand-900 uppercase tracking-widest mb-4">{stage.time}</div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
