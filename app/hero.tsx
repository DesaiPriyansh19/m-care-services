export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Reliable Home Services Anytime
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Professional plumbers, electricians, cleaners and more — same-day service.
        </p>

        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Book a Service
        </a>
      </div>
    </section>
  );
}
