const stats = [
  { value: "50+", label: "Companies Transformed" },
  { value: "3×", label: "Average ROI Increase" },
  { value: "90", label: "Days to First Agent" },
];

export default function Stats() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-bold gradient-text mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
