import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] text-[#00AA96] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Aurora Logo & Descripción */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Aurora</h2>
          <p className="text-sm leading-relaxed">
            Aurora es una plataforma de experiencias únicas de viaje. Conecta con destinos inolvidables y vive aventuras diseñadas para ti.
          </p>
        </div>

        {/* Destinos */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Destinos</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#!" className="hover:text-white transition">Cali</a></li>
            <li><a href="#!" className="hover:text-white transition">Bogota</a></li>
            <li><a href="#!" className="hover:text-white transition">Medellín</a></li>
            <li><a href="#!" className="hover:text-white transition">Tolima</a></li>
          </ul>
        </div>

        {/* Tienda */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Tienda</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#!" className="hover:text-white transition">Toallas</a></li>
            <li><a href="#!" className="hover:text-white transition">Protector Solar</a></li>
            <li><a href="#!" className="hover:text-white transition">Accesorios</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +52 123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> contacto@aurora.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Ciudad de México, MX
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 mb-5 w-11/12 mx-auto"></div>

      {/* Parte inferior */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p className="mb-3 md:mb-0">© {new Date().getFullYear()} Aurora. Todos los derechos reservados.</p>

        {/* Redes Sociales */}
        <div className="flex gap-4">
          <a href="#!" className="hover:text-[#4ab0ff] transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#!" className="hover:text-[#4ab0ff] transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#!" className="hover:text-[#4ab0ff] transition">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Botón especial */}
      <div className="mt-8 flex justify-center">
        <Link
          to="/register-colaborator"
          className="bg-[#00AA96] hover:bg-[#00AA78] text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Conviértete en agente de viajes
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
