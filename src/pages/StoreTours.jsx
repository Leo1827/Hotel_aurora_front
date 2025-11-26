import { Link } from "react-router-dom"

const StoreTours = () => {
    return (
        <div id="storeTour" className="w-full">
            
            {/* Banner */}
            <div className="w-full h-64 md:h-80 overflow-hidden">
                <img
                    src="/Images/bannerTour.jpg"
                    alt="Banner Tours"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contenido */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                    ¡Disfruta mejor tu viaje con nuestros Tours!
                </h1>

                {/* Filtro */}
                <div className="flex justify-center mb-10">
                    <select
                        className="border rounded-xl px-4 py-2 w-full max-w-xs bg-gray-100 text-gray-700 focus:outline-none focus:ring focus:ring-teal-400"
                    >
                        <option defaultValue="">Filtrar por estado</option>
                        <option value="1">Nayarit</option>
                        <option value="2">Jalisco</option>
                        <option value="3">Sinaloa</option>
                    </select>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8">
                    
                    {/* Card Tour */}
                    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl duration-300">
                        <div className="grid md:grid-cols-3 gap-0">

                            {/* Imagen */}
                            <div>
                                <img
                                    src="/Images/isla.jpg"
                                    alt="Tour Isla"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Texto */}
                            <div className="md:col-span-2 p-6 flex flex-col justify-between">
                                <div>
                                    <Link to="/show-tour">
                                        <h2 className="text-2xl font-bold text-teal-700 hover:text-teal-800 transition">
                                            Isla Virgen
                                        </h2>
                                    </Link>

                                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                        Únete a nuestro tour a Isla Contoy, una de nuestras mejores
                                        actividades para amantes de la naturaleza. Únicamente habitada por
                                        especies marinas, aves y una riqueza natural impresionante…
                                    </p>

                                    {/* Precios */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                                        <Price label="Adulto" price="$1000.00" />
                                        <Price label="Junior" price="$800.00" />
                                        <Price label="Niños" price="$500.00" />
                                        <Price label="Menor" price="$100.00" />
                                    </div>
                                </div>

                                {/* Estado + Reservar */}
                                <div className="flex items-center justify-between mt-6 border-t pt-4">
                                    <p className="font-semibold text-gray-700">
                                        Estado: <span className="text-red-500 font-bold">Nayarit</span>
                                    </p>

                                    <a
                                        href="#"
                                        className="text-teal-600 font-semibold hover:text-teal-800 transition"
                                    >
                                        Reservar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Repite la misma card si necesitas más */}
                </div>

                {/* Ver más */}
                <div className="flex justify-end mt-10">
                    <a href="#" className="text-teal-700 font-semibold hover:text-teal-900">
                        Ver más →
                    </a>
                </div>
            </div>
        </div>
    )
}

const Price = ({ label, price }) => (
    <div>
        <p className="text-sm font-semibold text-gray-700">{label}:</p>
        <p className="text-teal-600 font-bold">{price}</p>
    </div>
)

export default StoreTours
