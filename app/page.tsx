"use client";
import { useState } from "react";

type ServiceCardProps = {
  title: string;
  points: string[];
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("residential");

  // ---------------- SERVICE CARD COMPONENT ----------------
  const ServiceCard = ({ title, points }: ServiceCardProps) => (
    <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200">
      <h4 className="text-xl font-bold mb-4 group-hover:text-black">{title}</h4>
      <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className="text-gray-900 bg-white scroll-smooth font-sans"
      style={{ fontFamily: `'Inter', 'Poppins', sans-serif` }}
    >
      {/* ---------------- HEADER ---------------- */}
      <header className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center">
            <img
              src="/M-care.png"
              alt="Logo"
              className="h-14 md:h-20 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#home" className="text-gray-600 hover:text-black transition">
              Home
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-black transition"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-black transition"
            >
              About
            </a>
          </nav>

          <a
            href="tel:+1234567890"
            className="hidden md:block bg-black text-white px-6 py-2.5 rounded-xl shadow hover:bg-gray-900 transition"
          >
            Call Us
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 animate-fadeIn">
            {["home", "services", "about"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 text-lg capitalize"
              >
                {sec}
              </a>
            ))}

            <a
              href="tel:+1234567890"
              className="block bg-black text-white text-center px-4 py-2 rounded-lg"
            >
              Call Us
            </a>
          </div>
        )}
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="home" className="pt-40 pb-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Smart Facility & Home Services
          </h2>

          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Reliable residential & commercial service experts ready to help
            anytime.
          </p>

          <a
            href="#services"
            className="inline-block bg-black text-white px-10 py-4 rounded-xl text-xl font-semibold shadow hover:bg-gray-900 transition"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16">
            Our Services
          </h3>

          {/* TABS */}
          <div className="flex justify-center mb-12">
            <div className="bg-white shadow-lg rounded-full p-2 flex gap-2">
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "residential"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Residential
              </button>

              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "commercial"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* SERVICE CARDS GRID */}
          <div className="grid md:grid-cols-3 gap-10">
            {activeTab === "residential" && (
              <>
                {/* Residential ServiceCards go here */}
              </>
            )}

            {activeTab === "commercial" && (
              <>
                {/* Commercial ServiceCards go here */}
              </>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">About Us</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We connect you with verified and trusted home service experts.
              Our mission is to make home maintenance stress-free through
              seamless booking and reliable professionals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of experience, we guarantee transparent pricing,
              quick support, and a smooth experience from start to finish.
            </p>
          </div>

          <img
            src="/welcome.jpg"
            alt="Team"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-black text-gray-300 py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Footer content */}
        </div>
        <div className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} M-Care Services -  All rights reserved.
        </div>
      </footer>
    </div>
  );
}
