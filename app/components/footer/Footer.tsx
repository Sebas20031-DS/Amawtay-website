import img1 from "@/public/imgs/footer_dark.svg";
import img2 from "@/public/imgs/footer_light.svg";
import DynamicLogos from "../dynamic/DynamicLogos";
import { footerLinks } from "@/app/constants";
import { contacts } from "@/app/constants";

export default function Footer() {
  return (
    <footer className="mt-20 border-t py-10 mq-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="grid grid-cols-2 items-center">
          <div className="grid grid-cols-2 items-center  justify-center gap-2">
            <DynamicLogos
              properties="h-30 w-30"
              darkImage={img1}
              lightImage={img2}
            />
            <div>
              <p className="text-sm">
                Somos una organización sin fines de lucro...{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Recursos Section */}
        <div className="flex flex-col items-center w-full">
          <h3 className="font-bold text-lg mb-3">RECURSOS</h3>
          <ul className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-2 w-full justify-items-center">
            {footerLinks.map((link, index) => (
              <li key={index} className="px-1 py-2">
                <a
                  href={link.href}
                  className="hover-primary rounded-md px-3 py-3"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center">
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

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 justify-center">
          <a href="#" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
