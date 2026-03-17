export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-bold gradient-text mb-1">DreamWise AI</div>
            <p className="text-gray-500 text-sm">Helping companies become Agent-Driven Organizations</p>
          </div>

          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <a
              href="https://youtube.com/@rickbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              📺 YouTube
            </a>
            <a
              href="https://twitter.com/surmdren"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              𝕏 Twitter
            </a>
            <a
              href="mailto:rick@dreamwiseai.com"
              className="hover:text-white transition-colors"
            >
              ✉️ Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} DreamWise AI · Built with AI Agents
        </div>
      </div>
    </footer>
  );
}
