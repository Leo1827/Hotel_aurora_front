import PackageHotel from '../components/PackageHotel'
import CardProduct from '../components/CardProduct'
import { useMapping } from '../hooks/useMapping'
import { getProductsService } from '../services/productService'

const Landing = () => {
    const products = useMapping(getProductsService, [])

    return (
        <div className="w-full px-4 md:px-10 lg:px-20 py-10">
            <div className="grid grid-cols-1 mt-14 md:grid-cols-4 gap-10">

                {/* --- COLUMNA IZQUIERDA (Destinos / Filtros) --- */}
                <div className="md:col-span-1 bg-gray-100 p-5 rounded-xl shadow-sm">
                    <p className="text-xs text-gray-500">
                        Destinos {'>'} Paquetes turísticos
                    </p>
                    <h2 className="text-2xl font-bold mt-2">Destinos</h2>
                    <span className="text-gray-600 text-sm">30 resultados</span>

                    {/* Tarjeta de filtros */}
                    <div className="mt-5 space-y-6">
                        {/* Pasajes */}
                        <div>
                            <p className="font-semibold text-lg text-gray-900 mb-2">
                                Pasajes
                            </p>
                            <ul className="space-y-1 text-emerald-600 text-sm">
                                <li><a href="#" className="hover:underline">No incluye pasaje (30)</a></li>
                                <li><a href="#" className="hover:underline">Incluye pasaje (20)</a></li>
                            </ul>
                        </div>

                        {/* Otros destinos */}
                        <div>
                            <p className="font-semibold text-lg text-gray-900 mb-2">
                                Otros destinos
                            </p>
                            <ul className="space-y-1 text-emerald-600 text-sm">
                                <li><a href="#" className="hover:underline">Distrito capital (1)</a></li>
                                <li><a href="#" className="hover:underline">Nayarit (2)</a></li>
                                <li><a href="#" className="hover:underline">Oaxaca (3)</a></li>
                                <li><a href="#" className="hover:underline">Mazatlán (5)</a></li>
                                <li><a href="#" className="hover:underline">Cancún (3)</a></li>
                            </ul>
                        </div>

                        {/* Meses */}
                        <div>
                            <p className="font-semibold text-lg text-gray-900 mb-2">
                                Meses
                            </p>
                            <ul className="space-y-1 text-emerald-600 text-sm">
                                <li><a href="#" className="hover:underline">Julio (12)</a></li>
                                <li><a href="#" className="hover:underline">Agosto (8)</a></li>
                                <li><a href="#" className="hover:underline">Septiembre (5)</a></li>
                                <li><a href="#" className="hover:underline">Noviembre (4)</a></li>
                                <li><a href="#" className="hover:underline">Diciembre (3)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- COLUMNA CENTRAL (Paquetes) --- */}
                <div className="md:col-span-2">
                    {/* Ordenar */}
                    <div className="flex justify-end items-center gap-3 mb-6">
                        <span className="text-sm text-gray-700">Ordenar por</span>
                        <select className="border rounded-lg px-3 py-2 text-sm bg-white shadow-sm">
                            <option value="1">Más relevante</option>
                        </select>
                    </div>

                    {/* Lista de paquetes */}
                    <div className="space-y-6">
                        <PackageHotel />
                        <PackageHotel />
                        <PackageHotel />
                        <PackageHotel />
                        <PackageHotel />
                        <PackageHotel />
                        <PackageHotel />
                    </div>

                    <div className="flex justify-end mt-8">
                        <a href="#" className="text-xl font-semibold text-emerald-600 hover:underline">
                            Ver más
                        </a>
                    </div>
                </div>

                {/* --- COLUMNA DERECHA (Última hora) --- */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-bold mb-4">
                        ¿Buscas algo de última hora?
                    </h3>

                    <div className="grid gap-5">
                        {products.map((product, i) => (
                            <CardProduct key={i} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
