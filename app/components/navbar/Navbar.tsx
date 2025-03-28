import NavbarDesktop from "./NavbarDesktop";
import ThemeSwitch from "./ThemeSwitch";
import NavbarMobileWrapper from "./NavbarMobileWrapper"; // Nuevo wrapper

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-3.5 backdrop-blur-lg">
      <div className="container mx-auto px-4 relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl tracking-tight">Amawtay</span>
          </div>

          {/* Menú en pantallas grandes (Servidor) */}
          <NavbarDesktop />

          {/* Cambio de tema y menú móvil (Solo lo necesario en el cliente) */}
          <div className="flex items-center space-x-3">
            <ThemeSwitch /> {/* Cliente */}
            <NavbarMobileWrapper /> {/* Cliente */}
          </div>
        </div>
      </div>
    </nav>
  );
}
