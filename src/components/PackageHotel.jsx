import { useState } from "react";
import { Link } from "react-router-dom";
import IconList from "./IconList";

const images = [
  "/Images/eat-product.png",
  "/Images/pool.png",
  "/Images/play.png",
];

const PackageHotel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="my-10">
      <div className="max-w-4xl mx-auto px-4">

        <div className="bg-white rounded-xl shadow-md overflow-hidden relative flex flex-col md:flex-row">

          {/* Carrusel reducido */}
          <div className="w-full md:w-1/3 relative">
            <img
              src={images[index]}
              alt="image"
              className="w-full h-56 object-cover"
            />

            {/* Botones más pequeños */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-2 py-1 text-lg rounded-full"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-2 py-1 text-lg rounded-full"
            >
              ›
            </button>
          </div>

          {/* Contenido compacto */}
          <div className="w-full md:w-2/3 p-4">
            <p className="text-gray-600 font-medium">Puerto Vallarta</p>

            <Link to="/cart">
              <h1 className="text-xl font-bold text-gray-900 hover:text-teal-600">
                Kristal Vallarta
              </h1>
            </Link>

            {/* Precios más ordenados */}
            <div className="flex flex-wrap gap-2 mt-2 text-teal-700 font-semibold text-sm">
              <span>Adulto: $5500</span>
              <span>Junior: $3500</span>
              <span>Niño: $2000</span>
              <span>Menor: $1000</span>
            </div>

            {/* Descripción reducida */}
            <p className="mt-2 text-gray-700 text-sm leading-relaxed line-clamp-3">
              Este complejo mexicano está situado frente a la playa en la Bahía
              de Banderas. El hotel dispone de 3 piscinas, restaurantes, bares y
              un spa de servicio completo.
            </p>

            {/* Botón más pequeño y sin ocupar todo el espacio */}
            <div className="mt-4">
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold text-sm">
                Cotizar ahora
              </button>
            </div>
          </div>

          {/* Icono favorito */}
          <div className="absolute top-3 right-3">
            <IconList icon="favorite" color="#00AA96" size="lg" />
          </div>

          {/* Tarjetita No Incluye */}
          <div className="absolute bottom-0 right-0 bg-teal-600 text-white text-xs px-3 py-1 rounded-tl-lg shadow-md">
            No incluye pasaje
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageHotel;
