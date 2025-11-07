import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.pexels.com/photos/1559699/pexels-photo-1559699.jpeg",
    title: "PLAYA BLANCA",
    subtitle: "Santa marta - 2 noches y 3 días",
    available: "Disponible: Mayo - Junio - Julio",
    price: "$800.000 COP",
    note: "Ciertas condiciones aplican**",
  },
  {
    image: "https://images.pexels.com/photos/2884864/pexels-photo-2884864.jpeg",
    title: "Second slide label",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "https://images.pexels.com/photos/8264573/pexels-photo-8264573.jpeg",
    title: "Third slide label",
    subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

const MyCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Contenedor centrado para uniformar tamaño */}
          <div className="flex items-center justify-center w-full h-full bg-black">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Gradiente superior */}
          <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-t from-transparent to-white" />

          {/* Gradiente inferior */}
          <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-b from-transparent to-white" />

          {/* Contenido */}
          <div className="absolute top-1/3 right-20 transform -translate-y-1/2 text-right w-[550px]">
            {index === 0 ? (
              <div className="md:text-left sm:text-center md:ml-32 bg-black/50 p-5 rounded-xl">
                <h1 className="text-5xl font-bold text-gray-100">{slide.title}</h1>
                <p className="text-gray-100">{slide.subtitle}</p>
                <p className="text-gray-100">{slide.available}</p>
                <p className="font-bold text-[2.5em] text-gray-100 mt-1">{slide.price}</p>
                <p className="text-gray-100">{slide.note}</p>
                <button className="mt-6 w-[300px] bg-[#00AA96] text-white py-2 rounded hover:bg-[#009681] transition text-[1.8em] font-bold">
                  Cotizar
                </button>
              </div>
            ) : (
              <div className="text-white bg-black/50 p-5 rounded-xl max-w-lg ml-auto">
                <h3 className="text-3xl font-semibold">{slide.title}</h3>
                <p className="text-lg mt-2">{slide.subtitle}</p>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-r-lg z-20"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-l-lg z-20"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};

export default MyCarousel;
