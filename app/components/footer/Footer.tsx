import img1 from "@/public/imgs/footer_dark.svg";
import img2 from "@/public/imgs/footer_light.svg";
import DynamicLogos from "../dynamic/DynamicLogos";
import { footerLinks } from "@/app/constants";
import { contacts } from "@/app/constants";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 pb-5">
        {/* Brand Section */}
        <div className="flex justify-center items-center ">
          <div className="flex items-center">
            <DynamicLogos
              properties="h-30 w-30"
              darkImage={img1}
              lightImage={img2}
            />
            <div className="flex m-4 p-6">
              <div className="flex flex-col items-center w-full ">
                <h3 className="font-bold text-lg mb-3">SÍGUENOS</h3>
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="https://www.youtube.com/@amawtay_centro_filosofico"
                      className="transition-transform transform hover:scale-110"
                    >
                      <FaYoutube className="text-red-600 hover:text-red-500 w-6 h-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100091798911771"
                      className="transition-transform transform hover:scale-110"
                    >
                      <FaFacebook className="text-blue-600 hover:text-blue-500 w-6 h-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/amawtay_centro_filosofico/"
                      className="transition-transform transform hover:scale-110"
                    >
                      <FaInstagram className="text-pink-600 hover:text-pink-500 w-6 h-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recursos Section */}
        <div className="flex flex-col items-center w-full justify-center">
          <h3 className="font-bold text-lg mb-3">RECURSOS</h3>
          <ul className="grid grid-cols-1 lg:grid-cols-2 sm:gap-3 xl:grid-cols-4 xl:gap-10 w-full justify-items-center">
            {footerLinks.map((link, index) => (
              <li key={index} className="px-0.5 py-2">
                <a
                  href={link.href}
                  className="hover-primary rounded-md px-2 py-3"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-lg mb-3">CONTACTO</h3>
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <p>
                  <span className="font-semibold">{contact.label}:</span>{" "}
                  {contact.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal Section */}
      <div className="w-full px-4 pb-5 text-center text-sm text-gray-400">
        <div className="space-x-4 mb-2">
          <a
            href="/terminos"
            className="hover:underline hover:text-gray-500 transition-colors"
          >
            Términos y Condiciones
          </a>
          <a
            href="/privacidad"
            className="hover:underline hover:text-gray-500 transition-colors"
          >
            Política de Privacidad
          </a>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Creado por Amawtay. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
