import CartProduct from '../components/CartProduct'

import CardProduct from '../components/CardProduct'
import CardTour from '../components/CardTour'
import { Link } from 'react-router-dom'
import { useMapping } from '../hooks/useMapping'
import { getProductsService } from '../services/productService'

const Cart = () => {
    const products = useMapping(getProductsService, [])
    return (
        <div className="cart">
            <div className="my-5">
                <CartProduct />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="pt-5">
                                <span
                                    className=""
                                    style={{
                                        fontSize: '1.7em',
                                        fontWeight: '700',
                                        color: '#00AA96',
                                    }}
                                >
                                    Descripción
                                </span>

                                <div className="col-md-12">
                                    <p
                                        className="my-2"
                                        style={{
                                            fontSize: '1.1em',
                                            textAlign: 'justify',
                                        }}
                                    >
                                        Krystal Vallarta Hotel & Resort es un
                                        complejo familiar que ofrece con todo
                                        incluido, ubicado en una playa de la
                                        zona hotelera de Puerto Vallarta, a 4
                                        kilometros del Aeropuerto Internacional
                                        Licenciado Gustavo Díaz Ordaz PVR y a 3
                                        kilometros de la marina y del Campo de
                                        Golf Marina Vallarta. El área del centro
                                        y del Malecón están a 4 kilómetros de
                                        distancia. Contruido en el estilo
                                        tradicional de una hacienda, el hotel
                                        parece un típico pueblo mexicano con
                                        ocho hectáreas de jardines, paseos y
                                        fuente....
                                        <Link to="/store-tours">
                                            <span
                                                className="d-flex justify-content-end lead"
                                                style={{
                                                    fontWeight: '700',
                                                    color: '#00AA96',
                                                }}
                                            >
                                                Ver más
                                            </span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="tours mt-5">
                            <span
                                className=""
                                style={{
                                    fontSize: '1.7em',
                                    fontWeight: '700',
                                    color: '#00AA96',
                                }}
                            >
                                Tours Disponibles en puerto vallarta
                            </span>

                            <div className="container-fluid">
                                <div className="row  gap-4 justify-content-center">
                                    <CardTour />
                                    <CardTour />
                                    <CardTour />
                                    <CardTour />
                                </div>
                                <div className="col-md-12 text-end">
                                    <a href="/store-tours">Ver mas</a>
                                </div>
                            </div>

                            <div className="product my-5 py-5">
                                <span
                                    className="lead"
                                    style={{
                                        fontSize: '2em',
                                        fontWeight: '700',
                                        color: '#00AA96',
                                    }}
                                >
                                    Los infaltables
                                </span>

                                <div className="row">
                                    <div className="d-flex gap-3 section-cart-phone">
                                        <div className="row justify-content-center gap-3">
                                            {products.map((product, i) => (
                                                <CardProduct
                                                    key={i}
                                                    product={product}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-end">
                                        <Link to={'/store-products'}>
                                            Ver mas
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
