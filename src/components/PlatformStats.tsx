"use client";

const stats = [
  { value: "100,000", label: "Active Users", currency: "" },
  { value: "₦1,000,000", label: "Daily Volume", currency: "" },
  { value: "50", label: "Sports", currency: "" },
  { value: "99.9%", label: "Uptime", currency: "" },
];

export default function PlatformStats() {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto my-16 px-6 sm:px-12 text-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url('/images/stadium-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#131355]/80 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 py-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-white">
          Platform Statistics
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-xl p-6 shadow-none transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white/5"
            >
              <div className="text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
