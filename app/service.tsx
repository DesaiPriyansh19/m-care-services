export default function Services() {
  const items = [
    { title: "Plumbing", desc: "Fix leaks, install pipes, emergency repairs." },
    { title: "Cleaning", desc: "Deep cleaning, home cleaning, move-in/out." },
    { title: "Electrical", desc: "Lighting, switches, wiring, troubleshooting." },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((s, i) => (
            <div key={i} className="p-6 shadow-md rounded-xl bg-gray-50">
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
