const services = [
  {
    icon: "🧠",
    title: "AI Strategy Consulting",
    desc: "We assess your business, identify high-impact AI opportunities, and build a roadmap to becoming an agent-driven company.",
    points: ["Current-state AI audit", "Opportunity mapping", "12-month roadmap", "ROI projections"],
  },
  {
    icon: "⚙️",
    title: "Agent System Design",
    desc: "We design and build custom AI agent systems tailored to your workflows — from sales automation to ops intelligence.",
    points: ["Custom agent architecture", "LLM integration", "Workflow automation", "API & tool connections"],
  },
  {
    icon: "🎓",
    title: "AI Team Training",
    desc: "Upskill your team to work effectively alongside AI agents — from prompting to managing agent pipelines.",
    points: ["Hands-on workshops", "Prompt engineering", "Agent management", "Ongoing support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services Built for the{" "}
            <span className="gradient-text">AI-First Era</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            End-to-end AI transformation — from strategy to deployment to team enablement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-glow bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-indigo-400">✓</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
