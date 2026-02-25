export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img src="/M-care.png" alt="Logo" className="h-14 lg:16 xl:20 mb-9 " />
          <p className="text-sm text-gray-400">
            Reliable facility & home services for apartments and offices.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Cleaning", "Security", "Maintenance", "Water Supply", "Pest Control"].map(
              (i) => (
                <li key={i} className="hover:text-white hover:underline">
                  {i}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {["About Us", "Careers", "Blog", "Partners"].map((i) => (
              <li key={i} className="hover:text-white hover:underline">
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400"> C-401 Ganesh Glory,Jagatpur,Ahmedabad, India</p>
          <p className="text-sm text-gray-400 mt-2">
            hello@mcareservices.com
          </p>
          <p className="text-sm text-gray-400 mt-2">
            +91 9898254545
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12"></div>
      <div className="text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} M-Care Services. All rights reserved.
      </div>
    </footer>
  );
}
