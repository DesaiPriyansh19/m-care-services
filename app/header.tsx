export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">MyBrand</h1>

        <nav className="space-x-6 text-sm font-medium">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
