"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ---------------- TYPES ---------------- */
type ServiceCardProps = {
  title: string;
  points: string[];
};

/* ---------------- ANIMATED BLOB ---------------- */
const AnimatedBlob = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    animate={{
      x: [0, 40, -40, 0],
      y: [0, -30, 30, 0],
      scale: [1, 1.1, 0.95, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

/* ---------------- SERVICE CARD ---------------- */
const ServiceCard = ({ title, points }: ServiceCardProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200"
  >
    <h4 className="text-xl font-semibold mb-4">{title}</h4>
    <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </motion.div>
);

/* ---------------- PAGE ---------------- */
export default function Home() {
  const [activeTab, setActiveTab] =
    useState<"residential" | "commercial">("residential");

  return (
    <div
      className="text-gray-900 bg-white scroll-smooth font-sans overflow-x-hidden"
      style={{ fontFamily: `'Inter', 'Poppins', sans-serif` }}
    >
      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-32 pb-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated blobs */}
        <AnimatedBlob className="absolute -top-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        <AnimatedBlob
          className="absolute top-1/4 -right-24 w-96 h-96 bg-black/5 rounded-full blur-3xl"
          delay={2}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left pt-4"
          >
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

            <a
              href="/services"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold shadow hover:bg-gray-900 transition"
            >
              View Services
            </a>
          </motion.div>

          {/* Image */}
          <div className="hidden md:flex justify-end items-start">
            <motion.img
              src="/hero2-img.png"
              alt="Facility Services"
              className="w-full max-w-xl mt-2 drop-shadow-2xl rounded-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16">
            Our Services
          </h3>

          {/* Tabs */}
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

          {/* Cards */}
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {activeTab === "residential" && (
              <>
                <ServiceCard
                  title="Laundry & Ironing"
                  points={[
                    "Doorstep pickup & delivery",
                    "Washing, ironing & folding",
                    "Express / same-day service",
                    "Dry cleaning coordination",
                  ]}
                />
                <ServiceCard
                  title="Car Wash & Maintenance"
                  points={[
                    "On-site car washing",
                    "Interior vacuuming",
                    "Tyre & dashboard cleaning",
                    "Eco-friendly wash",
                  ]}
                />
                <ServiceCard
                  title="Water Delivery"
                  points={[
                    "20L jar delivery",
                    "Scheduled or on-call supply",
                    "Tracking system",
                  ]}
                />
                <ServiceCard
                  title="Housekeeping & Cleaning"
                  points={[
                    "Daily & deep cleaning",
                    "Sofa & carpet cleaning",
                    "Move-in cleaning",
                  ]}
                />
                <ServiceCard
                  title="Pest Control"
                  points={[
                    "Anti-termite",
                    "Rodent & cockroach control",
                    "Sanitization",
                  ]}
                />
                <ServiceCard
                  title="Security Services"
                  points={[
                    "Trained guards",
                    "CCTV monitoring",
                    "Visitor management",
                  ]}
                />
              </>
            )}

            {activeTab === "commercial" && (
              <>
                <ServiceCard
                  title="Office Housekeeping"
                  points={[
                    "Daily cleaning",
                    "Pantry support",
                    "Carpet shampooing",
                  ]}
                />
                <ServiceCard
                  title="Technical Maintenance"
                  points={[
                    "Electrical",
                    "Plumbing",
                    "HVAC",
                    "UPS & Generator",
                  ]}
                />
                <ServiceCard
                  title="Security & Surveillance"
                  points={[
                    "Security guards",
                    "CCTV",
                    "Access control",
                  ]}
                />
                <ServiceCard
                  title="Waste Management"
                  points={[
                    "Segregation",
                    "Authorized vendors",
                    "Hazardous waste",
                  ]}
                />
                <ServiceCard
                  title="Facility Staff"
                  points={[
                    "Office boys",
                    "Reception",
                    "Pantry staff",
                  ]}
                />
                <ServiceCard
                  title="AMC Contracts"
                  points={[
                    "Monthly / yearly plans",
                    "Scheduled visits",
                    "Reports",
                  ]}
                />
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-4xl font-bold mb-6">About Us</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide reliable, verified facility & home services designed to
              make daily life stress-free.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Transparent pricing, trained staff, and fast support — guaranteed.
            </p>

            <a
              href="/about"
              className="inline-block mt-6 font-semibold text-black hover:underline"
            >
              Learn more about us →
            </a>
          </div>

          <img
            src="/about-us-img.png"
            alt="M-Care Team"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918062179412?text=Hi%2C%20I%27m%20interested%20in%20M-Care%20Services."
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-800 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        💬
      </a>
    </div>
  );
}
