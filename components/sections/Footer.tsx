import { useTranslations } from 'next-intl'

const NAV_LINKS = [
  { key: 'services', href: '#services' },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'caseStudies', href: '#case-studies' },
  { key: 'about', href: '#about' },
] as const

export function Footer() {
  const tFooter = useTranslations('footer')
  const tNavbar = useTranslations('navbar')

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-sora font-bold text-xl text-white">DreamWise AI</p>
            <p className="mt-2 text-sm text-slate-400">{tFooter('tagline')}</p>
            <p className="mt-6 text-xs text-slate-500">{tFooter('copyright')}</p>
          </div>

          <div>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {tNavbar(key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest font-medium text-slate-500 mb-3">
              {tFooter('contactLabel')}
            </p>
            <a
              href={`mailto:${tFooter('email')}`}
              className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
            >
              {tFooter('email')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
