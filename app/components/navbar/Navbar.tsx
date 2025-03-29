import NavbarDesktop from "./NavbarDesktop";
import ThemeSwitch from "./ThemeSwitch";
import DynamicLogos from "../dynamic/DynamicLogos";
import NavbarMobile from "./NavbarMobile";
import logoDark from "@/public/imgs/logo_dark.svg";
import logoLight from "@/public/imgs/logo_light.svg";

export default function Navbar() {
  return (
    <nav className="sticky z-50 py-3.5 backdrop-blur-lg border-b">
      <div className="container mx-auto px-3 relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo y texto */}
          <div className="flex justify-between items-center flex-shrink-0 gap-2">
            <DynamicLogos
              properties="h-9 w-9"
              darkImage={logoDark}
              lightImage={logoLight}
            />
            <span className="text-xl tracking-tight">Amawtay</span>
          </div>

          {/* Menú en pantallas grandes (Servidor)*/}
          <NavbarDesktop />

          {/* Cambio de tema y menú móvil (Solo lo necesario en el cliente) */}
          <div className="flex items-center space-x-3">
            <ThemeSwitch /> {/* Cliente */}
            <NavbarMobile /> {/* Cliente */}
          </div>
        </div>
      </div>
    </nav>
  );
}
