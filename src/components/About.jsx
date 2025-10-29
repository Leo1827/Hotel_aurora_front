import React from 'react'

const About = () => {
  return (
    <section className="mx-4 md:px-32 md:mx-10 my-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12">

        {/* Video */}
        <div className="w-full md:w-1/2">
          <video
            controls
            className="w-full rounded-[15px] shadow-lg"
          >
            <source src="./Videos/video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento video.
          </video>
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 h-auto md:h-[320px] overflow-y-auto">
          <h3 className="text-[#00AA96] text-2xl font-semibold mb-3">
            Acerca de nosotros
          </h3>
          <p className="text-sm leading-relaxed text-gray-700 mb-3">
            El <span className="font-semibold">Hotel Aurora</span> es un espacio diseñado para ofrecer confort, elegancia
            y tranquilidad a cada uno de nuestros huéspedes. Nos especializamos
            en brindar experiencias únicas, donde la atención al detalle y la
            calidad del servicio son nuestra prioridad.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            Ubicado en un entorno privilegiado, Aurora combina la hospitalidad
            tradicional con un toque moderno. Contamos con habitaciones
            totalmente equipadas, restaurante gourmet, zonas de descanso y un
            personal siempre dispuesto a hacer de tu estadía una experiencia
            inolvidable. Ya sea por turismo o negocios, el Hotel Aurora es el
            lugar ideal para disfrutar, relajarse y conectar con lo esencial.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
