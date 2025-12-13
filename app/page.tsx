"use client";
import { useState } from "react";
import { PhoneCall } from "lucide-react"; 
// Type for ServiceCard props
type ServiceCardProps = {
  title: string;
  points: string[];
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] =
    useState<"residential" | "commercial">("residential");

  // ---------------- SERVICE CARD COMPONENT ----------------
  const ServiceCard = ({ title, points }: ServiceCardProps) => (
    <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  );

  return (
    /* 🔒 Prevent horizontal overflow (fixes black line) */
    <div
      className="text-gray-900 bg-white scroll-smooth font-sans overflow-x-hidden"
      style={{ fontFamily: `'Inter', 'Poppins', sans-serif` }}
    >
  {/* ---------------- HEADER ---------------- */}
{/* ---------------- HEADER ---------------- */}
{/* ---------------- HEADER ---------------- */}
<header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
    <img
      src="/M-care.png"
      alt="M-Care Services"
      className="h-12 md:h-14 w-auto object-contain"
    />

    <nav className="hidden md:flex items-center space-x-10 font-medium">
      {["home", "services", "about"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="relative text-gray-600 hover:text-black transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </nav>

    {/* SINGLE CALL US BUTTON WITH PROFESSIONAL ICON */}
    <a
      href="tel:+918062179412"
      className="hidden md:inline-flex items-center bg-black text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-gray-900 hover:scale-105 transition-transform gap-2"
    >
      <PhoneCall className="w-4 h-4" />
      Call Us
    </a>

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden"
      aria-label="Open menu"
    >
      <span className="block w-6 h-[2px] bg-black mb-1"></span>
      <span className="block w-6 h-[2px] bg-black mb-1"></span>
      <span className="block w-6 h-[2px] bg-black"></span>
    </button>
  </div>

  {/* ---------------- MOBILE MENU ---------------- */}
  {menuOpen && (
    <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-5">
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

      {/* Mobile Call Button */}
      <a
        href="tel:+918062179412"
        className="block bg-black text-white text-center px-4 py-3 rounded-xl font-semibold shadow-sm hover:bg-gray-900 hover:scale-105 transition-transform flex items-center justify-center gap-2"
      >
        <PhoneCall className="w-4 h-4" />
        Call Us
      </a>
    </div>
  )}
</header>



      {/* ---------------- HERO ---------------- */}
      <section
        id="home"
        className="relative pt-32 pb-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left pt-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-xl">
              One Partner for <br />
              <span className="text-gray-700">
                All Your Daily Facility Needs
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-8 leading-relaxed">
              Reliable managed services for apartments & offices — cleaning,
              security, maintenance, water supply and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#services"
                className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold shadow hover:bg-gray-900 transition"
              >
                View Services
              </a>

            </div>
          </div>

          <div className="hidden rounded-2xl md:flex justify-end items-start">
            <img
              src="/hero2-img.png"
              alt="Facility Services"
              className="w-full max-w-xl mt-2 drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </section>


      {/* ---------------- SERVICES ---------------- */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16">
            Our Services
          </h3>

          {/* TABS */}
          <div className="flex justify-center mb-12">
            <div className="bg-white shadow-lg rounded-full p-2 flex gap-2">
              {["residential", "commercial"].map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(tab as "residential" | "commercial")
                  }
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {activeTab === "residential" && (
              <>
                <ServiceCard title="Laundry & Ironing" points={["Doorstep pickup & delivery","Washing, ironing & folding","Express / same-day service","Dry cleaning coordination"]} />
                <ServiceCard title="Car Wash & Maintenance" points={["On-site car washing","Interior vacuuming","Tyre & dashboard cleaning","Eco-friendly wash"]} />
                <ServiceCard title="Water Delivery" points={["20L jar delivery","Scheduled or on-call supply","Tracking system"]} />
                <ServiceCard title="Housekeeping & Cleaning" points={["Daily & deep cleaning","Sofa & carpet cleaning","Move-in cleaning"]} />
                <ServiceCard title="Pest Control" points={["Anti-termite","Rodent & cockroach control","Sanitization"]} />
                <ServiceCard title="Security Services" points={["Trained guards","CCTV monitoring","Visitor management"]} />
              </>
            )}

            {activeTab === "commercial" && (
              <>
                <ServiceCard title="Office Housekeeping" points={["Daily cleaning","Pantry support","Carpet shampooing"]} />
                <ServiceCard title="Technical Maintenance" points={["Electrical","Plumbing","HVAC","UPS & Generator"]} />
                <ServiceCard title="Security & Surveillance" points={["Security guards","CCTV","Access control"]} />
                <ServiceCard title="Waste Management" points={["Segregation","Authorized vendors","Hazardous waste"]} />
                <ServiceCard title="Facility Staff" points={["Office boys","Reception","Pantry staff"]} />
                <ServiceCard title="AMC Contracts" points={["Monthly / yearly plans","Scheduled visits","Reports"]} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">About Us</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide reliable, verified facility & home services designed to
              make daily life stress-free.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Transparent pricing, trained staff, and fast support — guaranteed.
            </p>
          </div>

          <img
            src="/about-us-img.png"
            alt="M-Care Team"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-black text-gray-300 pt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <img src="/M-care.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-400">
              Reliable facility & home services for apartments and offices.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Cleaning","Security","Maintenance","Water Supply","Pest Control"].map(
                (i) => (
                  <li key={i} className="hover:text-white transition hover:underline">
                    {i}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {["About Us","Careers","Blog","Partners"].map((i) => (
                <li key={i} className="hover:text-white transition hover:underline">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">Bangalore, India</p>
            <p className="text-sm text-gray-400 mt-2">
              hello@mcareservices.com
            </p>
            <p className="text-sm text-gray-400 mt-2">
              +91 8062179412
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12"></div>
        <div className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} M-Care Services. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/918062179412?text=Hi%2C%20I%27m%20interested%20in%20M-Care%20Services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-800 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
