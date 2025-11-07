import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cartagena de Indias",
    description: "4 días / 3 noches - Hotel frente al mar con desayuno incluido.",
    price: "$950.000 COP",
    image:
      "https://images.pexels.com/photos/28168488/pexels-photo-28168488.jpeg",
  },
  {
    id: 2,
    name: "Eje Cafetero",
    description:
      "Tour por Salento, Valle del Cocora y parques temáticos. 5 días / 4 noches.",
    price: "$1.200.000 COP",
    image:
      "https://images.pexels.com/photos/29745520/pexels-photo-29745520.jpeg",
  },
  {
    id: 3,
    name: "San Andrés Islas",
    description:
      "6 días / 5 noches - Hotel todo incluido, tour por el Hoyo Soplador.",
    price: "$2.300.000 COP",
    image:
      "https://images.pexels.com/photos/4011450/pexels-photo-4011450.jpeg",
  },
  {
    id: 4,
    name: "Medellín y Guatapé",
    description:
      "3 días / 2 noches - Visita a la Piedra del Peñol y Comuna 13.",
    price: "$780.000 COP",
    image:
      "https://images.pexels.com/photos/3535926/pexels-photo-3535926.jpeg",
  },
  {
    id: 5,
    name: "Santa Marta y Parque Tayrona",
    description:
      "5 días / 4 noches - Ecoturismo, playa y cultura en la costa Caribe.",
    price: "$1.150.000 COP",
    image:
      "https://images.pexels.com/photos/27612260/pexels-photo-27612260.jpeg",
  },
];

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full h-[450px] text-white pt-20 px-4 md:px-20 relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-20 text-center text-[#00AA96]">
        Explora Colombia con Nosotros 🇨🇴
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center justify-center">
        {/* Botón izquierda */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-10  top-1/2 -translate-y-1/2 bg-[#00AA96]/30 hover:bg-[#00AA96]/50 text-[#00AA96] p-3 rounded-full transition z-20"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Slide principal */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-90 z-0"
            }`}
          >
            <div className="relative w-[90vw] sm:w-[700px] md:w-[1000px] lg:w-[1200px] rounded-3xl overflow-hidden shadow-2xl border border-[#00AA96]/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] md:h-[600px] object-cover rounded-3xl"
              />

              {/* Gradiente y contenido */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12 rounded-3xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-3">
                  {product.description}
                </p>
                <p className="text-[#00AA96] font-bold text-lg md:text-xl mb-5">
                  {product.price}
                </p>
                <button className="bg-[#00AA96] rounded hover:bg-[#009681] text-white px-6 py-3 rounded-xl font-semibold text-sm md:text-base w-fit transition-all">
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Botón derecha */}
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-10 top-1/2 -translate-y-1/2 bg-[#00AA96]/30 hover:bg-[#00AA96]/50 text-[#00AA96] p-3 rounded-full transition z-20"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-14 space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition ${
              index === current ? "bg-[#00AA96]" : "bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
