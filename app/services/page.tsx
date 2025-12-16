"use client";

import { useState } from "react";
import { CheckCircle, PhoneCall } from "lucide-react";

type ServiceSectionProps = {
  title: string;
  intro: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
};

const ServiceSection = ({
  title,
  intro,
  description,
  points,
  image,
  reverse,
}: ServiceSectionProps) => (
  <div className="grid md:grid-cols-2 gap-14 items-center">
    {/* Image */}
    <div className={reverse ? "md:order-2" : ""}>
      <img
        src={image}
        alt={title}
        className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
      />
    </div>

    {/* Content */}
    <div>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-gray-700 mb-4 font-medium">{intro}</p>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      <ul className="space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-gray-600">
            <CheckCircle className="w-5 h-5 text-black mt-0.5" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ServicesPage() {
  const [activeTab, setActiveTab] =
    useState<"residential" | "commercial">("residential");

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our <span className="text-gray-700">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Complete residential and commercial facility management solutions —
            delivered with reliability, transparency, and professional care.
          </p>
        </div>
      </section>

      {/* ---------------- TABS ---------------- */}
      <div className="flex justify-center -mt-10 mb-24">
        <div className="bg-white shadow-lg rounded-full p-2 flex gap-2">
          {["residential", "commercial"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab as "residential" | "commercial")
              }
              className={`px-8 py-3 rounded-full font-semibold transition ${
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

      {/* ---------------- CONTENT ---------------- */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 space-y-28">

          {/* ================= RESIDENTIAL ================= */}
          {activeTab === "residential" && (
            <>
              <ServiceSection
                title="Laundry & Ironing Services"
                intro="Doorstep laundry services designed for everyday convenience."
                description="Our laundry services ensure proper garment care through professional washing, ironing, and timely delivery — ideal for busy households."
                points={[
                  "Doorstep pickup & delivery of clothes",
                  "Washing, ironing, and folding",
                  "Dry cleaning coordination",
                  "Express / same-day service",
                ]}
                image="/services/laundry.jpg"
              />

              <ServiceSection
                title="Car Wash & Maintenance"
                intro="On-site car care services for residential communities."
                description="We offer eco-friendly and water-efficient car cleaning services delivered directly at your apartment premises."
                points={[
                  "On-site car washing",
                  "Interior vacuuming",
                  "Tyre polishing & dashboard cleaning",
                  "Waterless wash (eco-friendly option)",
                ]}
                image="/services/car-wash.jpg"
                reverse
              />

              <ServiceSection
                title="Water Delivery"
                intro="Reliable drinking water supply for homes and societies."
                description="Scheduled and on-demand water delivery solutions ensuring uninterrupted access to clean drinking water."
                points={[
                  "Drinking water bottle supply (20L jars)",
                  "Regular schedule or on-call delivery",
                  "Tracking and replacement system",
                ]}
                image="/services/water.jpg"
              />

              <ServiceSection
                title="Newspaper & Magazine Delivery"
                intro="Hassle-free daily reading essentials."
                description="We manage newspaper and magazine subscriptions along with payment collection for residential societies."
                points={[
                  "Daily newspaper distribution",
                  "Magazine subscriptions",
                  "Payment collection & management",
                ]}
                image="/services/newspaper.jpg"
                reverse
              />

              <ServiceSection
                title="Housekeeping & Home Cleaning"
                intro="Clean, hygienic, and well-maintained living spaces."
                description="Professional housekeeping services for apartments, villas, and residential communities."
                points={[
                  "Home cleaning (rooms, kitchen, bathrooms)",
                  "Deep cleaning for new flats",
                  "Sofa, carpet, and curtain cleaning",
                ]}
                image="/services/housekeeping.jpg"
              />

              <ServiceSection
                title="Appliance Repair Services"
                intro="Quick and reliable appliance repair support."
                description="Skilled technicians for common household appliance maintenance and repairs."
                points={[
                  "AC, fridge, washing machine repair",
                  "Electrical & plumbing fixes",
                  "RO filter servicing",
                ]}
                image="/services/appliance.jpg"
                reverse
              />

              <ServiceSection
                title="Pest Control & Sanitization"
                intro="Safe and effective pest management solutions."
                description="Protect your home with certified pest control and sanitization services."
                points={[
                  "Anti-termite, cockroach, and rodent control",
                  "Disinfection and sanitization services",
                ]}
                image="/services/pest.jpg"
              />

              <ServiceSection
                title="Gardening & Common Area Maintenance"
                intro="Well-maintained green and shared spaces."
                description="Regular upkeep of gardens and common areas within residential societies."
                points={[
                  "Garden maintenance in societies",
                  "Watering & trimming plants",
                  "Common area sweeping and cleaning",
                ]}
                image="/services/garden.jpg"
                reverse
              />

              <ServiceSection
                title="Waste Management"
                intro="Clean and organized waste handling systems."
                description="End-to-end waste collection and coordination with municipal authorities."
                points={[
                  "Door-to-door garbage collection",
                  "Segregation (wet/dry waste)",
                  "Coordination with municipal pickup",
                ]}
                image="/services/waste.jpg"
              />

              <ServiceSection
                title="Security & Watchman Services"
                intro="Trained security personnel for residential safety."
                description="Professional security staffing with monitoring and visitor management support."
                points={[
                  "Trained security personnel",
                  "CCTV monitoring support",
                  "Visitor management system",
                ]}
                image="/services/security.jpg"
                reverse
              />

              <ServiceSection
                title="Society Management Support"
                intro="Operational support for smooth society management."
                description="Administrative and operational assistance for residential associations."
                points={[
                  "Maintenance fee collection",
                  "Complaint tracking & resolution",
                  "Vendor management for societies",
                ]}
                image="/services/society.jpg"
              />
            </>
          )}

          {/* ================= COMMERCIAL ================= */}
          {activeTab === "commercial" && (
            <>
              <ServiceSection
                title="Commercial Housekeeping Services"
                intro="Professional cleaning solutions for offices and facilities."
                description="Comprehensive housekeeping services ensuring hygienic and productive work environments."
                points={[
                  "Daily office and washroom cleaning",
                  "Pantry upkeep & supply management",
                  "Carpet, sofa, and chair shampooing",
                  "Window & façade cleaning",
                ]}
                image="/services/office-cleaning.jpg"
              />

              <ServiceSection
                title="Technical Maintenance"
                intro="Reliable technical support for facility operations."
                description="Preventive and breakdown maintenance services handled by trained technicians."
                points={[
                  "Electrical systems (lights, panels, wiring)",
                  "Plumbing & water supply",
                  "HVAC (AC & ventilation system) servicing",
                  "Generator & UPS maintenance",
                ]}
                image="/services/maintenance.jpg"
                reverse
              />

              <ServiceSection
                title="Security & Surveillance"
                intro="End-to-end commercial security solutions."
                description="Security manpower and technology-driven surveillance systems."
                points={[
                  "Trained security guards",
                  "Access control & visitor management",
                  "CCTV installation & monitoring",
                  "Fire safety system inspection",
                ]}
                image="/services/corporate-security.jpg"
              />

              <ServiceSection
                title="Pest Control & Sanitization"
                intro="Scheduled pest control for commercial facilities."
                description="Safe and compliant pest management for offices, warehouses, and industrial spaces."
                points={[
                  "Regular pest management schedule",
                  "Rodent, termite, and cockroach control",
                  "Office & warehouse disinfection",
                ]}
                image="/services/commercial-pest.jpg"
                reverse
              />

              <ServiceSection
                title="Commercial Waste Management"
                intro="Responsible and compliant waste handling."
                description="End-to-end waste segregation and disposal through authorized vendors."
                points={[
                  "Waste segregation (wet/dry/recyclable)",
                  "Hazardous waste handling (labs/hospitals)",
                  "Tie-up with authorized waste vendors",
                ]}
                image="/services/commercial-waste.jpg"
              />

              <ServiceSection
                title="Facility Support Staff"
                intro="Reliable manpower for daily operations."
                description="Trained and supervised support staff for commercial facilities."
                points={[
                  "Office boys / peons",
                  "Receptionists & front desk staff",
                  "Pantry boys / attendants",
                  "Lift operators & drivers",
                ]}
                image="/services/staff.jpg"
                reverse
              />

              <ServiceSection
                title="Landscape & Outdoor Maintenance"
                intro="Clean and presentable outdoor spaces."
                description="Maintenance of gardens, parking areas, and outdoor infrastructure."
                points={[
                  "Lawn and garden maintenance",
                  "Parking area cleaning",
                  "Signage & outdoor light maintenance",
                ]}
                image="/services/landscape.jpg"
              />

              <ServiceSection
                title="Project & Asset Management"
                intro="Structured asset and facility oversight."
                description="Monitoring, coordination, and reporting for facility assets."
                points={[
                  "Regular inspection of building assets",
                  "Vendor coordination",
                  "Inventory & asset tracking",
                ]}
                image="/services/assets.jpg"
                reverse
              />

              <ServiceSection
                title="Specialized & AMC Services"
                intro="Custom service packages for long-term reliability."
                description="Flexible AMC and specialized support services tailored to client needs."
                points={[
                  "Event setup & conference support",
                  "IT equipment & server room cleaning",
                  "Emergency maintenance response",
                  "Custom monthly/annual service packages",
                  "Scheduled maintenance visits",
                  "Reporting & performance tracking",
                ]}
                image="/services/amc.jpg"
              />
            </>
          )}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Simplify Facility Management?
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Contact us today to design a customized service solution for your
          residential or commercial facility.
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
