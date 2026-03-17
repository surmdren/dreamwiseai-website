export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-500/20 p-12 overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-500/20 blur-[80px] -z-10" />

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Build Your{" "}
            <span className="gradient-text">AI Agent Team?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Book a free 30-minute strategy call. We&apos;ll identify your top AI opportunities
            and outline a 90-day roadmap — no fluff, just actionable next steps.
          </p>

          <a
            href="https://cal.com/rickbuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
          >
            Book Your Free Strategy Call
            <span>→</span>
          </a>

          <p className="mt-6 text-sm text-gray-500">
            Free 30-min call · No commitment · Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
