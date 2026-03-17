export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-600/10 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍💻</div>
                <div className="text-white font-bold text-xl">Rick Ren</div>
                <div className="text-gray-400 text-sm">Founder, DreamWise AI</div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-indigo-500/5 blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
              About the Founder
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Built by a Builder,{" "}
              <span className="gradient-text">for Builders</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m Rick Ren — an Asian indie developer based in Shanghai building AI agent systems
                that actually work in the real world.
              </p>
              <p>
                I started DreamWise AI after seeing too many companies spend millions on AI initiatives
                that delivered nothing. The problem wasn&apos;t the technology — it was the lack of a
                practical, implementation-first approach.
              </p>
              <p>
                My mission is simple: <strong className="text-white">help companies become
                agent-driven organizations</strong> — where AI agents handle the repetitive work,
                and humans focus on what only humans can do.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["AI Agent Systems", "LLM Engineering", "Business Automation", "Team Training"].map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://youtube.com/@rickbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                📺 YouTube: Rick Builds
              </a>
              <a
                href="https://twitter.com/surmdren"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                𝕏 @surmdren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
