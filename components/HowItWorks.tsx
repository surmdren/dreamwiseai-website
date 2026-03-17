const steps = [
  {
    step: "01",
    title: "Assess",
    desc: "Deep-dive into your business processes, tech stack, and team to identify the highest-leverage AI opportunities.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Architect a custom AI agent system tailored to your workflows, tools, and business goals.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Deploy your first AI agents, integrate with existing systems, and run pilot programs to validate results.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Expand AI agents across departments, train your team, and continuously optimize for maximum ROI.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From Day One to{" "}
            <span className="gradient-text">Agent-Driven</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A proven 4-phase framework to transform your company in 90 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-indigo-500/40 to-transparent z-0" />
              )}
              <div className="relative z-10 card-glow bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl font-black gradient-text mb-4">{s.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
