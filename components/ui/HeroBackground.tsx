export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
      <svg
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="150" r="8" fill="#1E3A8A" />
        <circle cx="150" cy="300" r="5" fill="#3B82F6" />
        <circle cx="450" cy="300" r="6" fill="#1E3A8A" />
        <circle cx="300" cy="450" r="5" fill="#3B82F6" />
        <circle cx="200" cy="200" r="4" fill="#3B82F6" />
        <circle cx="400" cy="200" r="4" fill="#1E3A8A" />
        <circle cx="200" cy="400" r="4" fill="#3B82F6" />
        <circle cx="400" cy="400" r="4" fill="#1E3A8A" />
        <circle cx="100" cy="150" r="3" fill="#3B82F6" />
        <circle cx="500" cy="150" r="3" fill="#1E3A8A" />
        <circle cx="100" cy="450" r="3" fill="#3B82F6" />
        <circle cx="500" cy="450" r="3" fill="#1E3A8A" />
        <line x1="300" y1="150" x2="150" y2="300" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="300" y1="150" x2="450" y2="300" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="150" y1="300" x2="300" y2="450" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="450" y1="300" x2="300" y2="450" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="200" y1="200" x2="300" y2="150" stroke="#1E3A8A" strokeWidth="1" />
        <line x1="400" y1="200" x2="300" y2="150" stroke="#1E3A8A" strokeWidth="1" />
        <line x1="200" y1="200" x2="150" y2="300" stroke="#1E3A8A" strokeWidth="1" />
        <line x1="400" y1="200" x2="450" y2="300" stroke="#1E3A8A" strokeWidth="1" />
        <line x1="200" y1="400" x2="150" y2="300" stroke="#1E3A8A" strokeWidth="1" />
        <line x1="400" y1="400" x2="450" y2="300" stroke="#1E3A8A" strokeWidth="1" />
        <line x1="200" y1="400" x2="300" y2="450" stroke="#1E3A8A" strokeWidth="1" />
        <line x1="400" y1="400" x2="300" y2="450" stroke="#1E3A8A" strokeWidth="1" />
        <line x1="100" y1="150" x2="200" y2="200" stroke="#3B82F6" strokeWidth="0.8" />
        <line x1="500" y1="150" x2="400" y2="200" stroke="#3B82F6" strokeWidth="0.8" />
        <line x1="100" y1="450" x2="200" y2="400" stroke="#3B82F6" strokeWidth="0.8" />
        <line x1="500" y1="450" x2="400" y2="400" stroke="#3B82F6" strokeWidth="0.8" />
      </svg>
    </div>
  )
}
