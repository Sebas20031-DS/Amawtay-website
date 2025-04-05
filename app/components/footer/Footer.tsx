import img1 from "@/public/imgs/footer_dark.svg";
import img2 from "@/public/imgs/footer_light.svg";
import DynamicLogos from "../dynamic/DynamicLogos";
import { footerLinks } from "@/app/constants";
import { contacts } from "@/app/constants";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-4 mb-4 border-t mq-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Brand Section */}

        <div className="flex justify-center items-center">
          <div className="flex p-5 items-center">
            <DynamicLogos
              properties="h-30 w-30"
              darkImage={img1}
              lightImage={img2}
            />
            <div className="flex m-8">
              <div className="flex flex-col items-center w-full">
                <h3 className="font-bold text-lg mb-3">SÍGUENOS</h3>
                <div className="flex justify-center items-center">
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
        </div>

        {/* Recursos Section */}
        <div className="flex flex-col items-center w-full justify-center">
          <h3 className="font-bold text-lg mb-3">RECURSOS</h3>
          <ul className="grid grid-cols-1  lg:grid-cols-2 sm:gap-2 xl:grid-cols-4 xl:gap-10 w-full justify-items-center">
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

      {/* Legal & Attribution Section */}
      <div className="w-full border-t border-gray-200 bg-gray-100 dark:bg-[#111827] py-4 text-center text-sm text-gray-700 dark:text-gray-300">
        <div className="space-x-4 mb-1">
          <a
            href="/terminos"
            className="hover:underline transition-colors duration-200"
          >
            Términos y Condiciones
          </a>
          <a
            href="/privacidad"
            className="hover:underline transition-colors duration-200"
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
