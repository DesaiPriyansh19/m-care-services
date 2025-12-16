"use client";

import { PhoneCall, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div
      className="text-gray-900 bg-white overflow-x-hidden"
      style={{ fontFamily: `'Inter', 'Poppins', sans-serif` }}
    >
      {/* ---------------- HERO ---------------- */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About <span className="text-gray-700">M-Care Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for reliable, managed facility and home
            services — built to simplify daily living for apartments and
            workplaces.
          </p>
        </div>
      </section>

      {/* ---------------- WHO WE ARE ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              M-Care Services is a professionally managed facility services
              company based in India, delivering dependable day-to-day solutions
              for residential communities and commercial spaces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From housekeeping and security to maintenance and essential
              supplies, we act as a single, accountable partner — so our clients
              can focus on what matters most.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">
              What Defines Us
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "Professionally trained & verified staff",
                "Transparent pricing with no hidden costs",
                "On-time service delivery",
                "Dedicated support & quick resolution",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Residential Services",
                desc: "End-to-end daily services for apartments including cleaning, laundry, car wash, water supply, pest control, and security.",
              },
              {
                title: "Commercial Facility Management",
                desc: "Professional facility solutions for offices, IT parks, and commercial buildings with trained manpower and technical support.",
              },
              {
                title: "Managed Service Contracts",
                desc: "Flexible AMC and long-term service models with scheduled visits, reporting, and accountability.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose M-Care
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Single point of contact for multiple services",
              "Background-verified and trained workforce",
              "Consistent service quality & monitoring",
              "Fast response and issue resolution",
              "Scalable solutions for growing needs",
              "Trusted by residential and commercial clients",
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-black mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MISSION & VISION ---------------- */}


{/* ---------------- MISSION & VISION (PREMIUM MODERN) ---------------- */}
<section className="py-28 bg-gray-50 relative overflow-hidden">
  {/* Ambient background shapes */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/5 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Section header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Our Purpose & Direction
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        What drives us today and where we are headed tomorrow.
      </p>
    </div>

    {/* Main container */}
    <div className="relative bg-white rounded-[2.5rem] shadow-xl border border-gray-200 overflow-hidden">
      
      {/* Center divider */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

      <div className="grid md:grid-cols-2">
        
        {/* MISSION */}
        <div className="group p-14 md:p-16 relative">
          <span className="absolute top-10 left-10 text-[120px] font-extrabold text-black/5 select-none">
            01
          </span>

          <h3 className="text-3xl font-bold mb-6 relative z-10">
            Our Mission
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed relative z-10 max-w-lg">
            To simplify everyday living and facility operations by delivering
            dependable, transparent, and professionally managed services.
            We focus on consistency, accountability, and people-first service
            execution.
          </p>

          <div className="mt-10 h-[2px] w-24 bg-black group-hover:w-36 transition-all"></div>
        </div>

        {/* VISION */}
        <div className="group p-14 md:p-16 relative bg-gray-50">
          <span className="absolute bottom-10 right-10 text-[120px] font-extrabold text-black/5 select-none">
            02
          </span>

          <h3 className="text-3xl font-bold mb-6 relative z-10">
            Our Vision
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed relative z-10 max-w-lg">
            To become one of India’s most trusted facility management brands,
            setting benchmarks in service quality, ethical operations, and
            long-term partnerships across residential and commercial spaces.
          </p>

          <div className="mt-10 h-[2px] w-24 bg-black group-hover:w-36 transition-all"></div>
        </div>

      </div>
    </div>
  </div>
</section>



      {/* ---------------- CTA ---------------- */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Take Care of Your Facility Needs
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether it’s your home or workplace, M-Care is ready to manage it
          professionally and reliably.
        </p>

        <a
          href="tel:+918062179412"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          <PhoneCall className="w-5 h-5" />
          Call Us Now
        </a>
      </section>
    </div>
  );
}
