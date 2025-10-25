import React from 'react'

const About = () => {
    return (
        <div className='about mx-5'>
            <div className="px-5 container-phonea-bout">
                <div className="d-flex mx-5 px-5 container-about">

                    <div className="mx-3">
                        <video controls className='video-about w-100'>
                            <source src="./Videos/video.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento video.
                        </video>
                    </div>

                    <div className="col-md-4 content-about mx-3" style={{height:"320px"}}>
                        <div className="start-0 " style={{height:"320px"}}>
                            <h3 className='m-2 title-about'>Acerca de nosotros</h3>
                            <p className='m-2' style={{fontSize: ".8em"}}>
                                Ximena es una agencia de viajes que ofrece una amplia gama de servicios turísticos a precios accesibles.
                                Con un enfoque en proporcionar un excelente servicio, XImena ha ganado una reputación por su atención al cliente 
                                y por ayudar a sus clientes a planificar sus viajes de manera eficiente y sin estrés.
                            </p>
                            <p className='m-2' style={{fontSize: ".8em"}}>
                                Con Ximena, los clientes pueden elegir entre algunos de los destinos más populares, como Cancún, Playa del Carmen,
                                Cozumel y Puerto Vallarta. Cada destino cuenta con una amplia gama de opciones de alojamiento y actividades para que los clientes
                                puedan personalizar su viaje según sus preferencias y presupuesto. Además, el equipo de Ximena está disponible en todo momento para brindar 
                                asesoramiento y ayuda en caso de cualquier necesidad durante el viaje.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About