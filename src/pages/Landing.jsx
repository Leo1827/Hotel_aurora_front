import PackageHotel from '../components/PackageHotel'
import CardProduct from '../components/CardProduct'
import { useMapping } from '../hooks/useMapping'
import { getProductsService } from '../services/productService'

const Landing = () => {
    const products = useMapping(getProductsService, [])
    return (
        <div className="container-fluid">
            <div className="my-5 py-3">
                <div className="d-flex container-packajetour-medium gap-3 mx-5">
                    <div className="col-md-7 col-lg-6 order-md-1">
                        <div
                            className=" d-flex justify-content-sm-end me-sm-none justify-content-md-end me-md-5"
                            style={{ marginLeft: '80px' }}
                        >
                            <span className=" mt-2 mx-2">Ordenar por</span>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ width: '150px' }}
                            >
                                <option value="1">Más relevante</option>
                            </select>
                        </div>

                        <PackageHotel />

                        <PackageHotel />

                        <PackageHotel />

                        <PackageHotel />

                        <PackageHotel />

                        <PackageHotel />

                        <PackageHotel />

                        <div className="container w-75 my-5">
                            <div className="d-flex justify-content-end">
                                <a
                                    href="#"
                                    style={{
                                        fontSize: '1.7em',
                                        fontWeight: '500',
                                    }}
                                >
                                    Ver mas
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-3 order-md-0">
                        <div className="container-tablet mx-5 ">
                            <span style={{ fontSize: '.8em' }}>
                                Destinos {'>'} Paquetes turisticos
                            </span>
                            <h2>Destinos</h2>
                            <span className="lead">30 resultados</span>

                            <div
                                className="card my-2 border-0 card-destination"
                                style={{
                                    backgroundColor: '#F6F6F6',
                                    boxShadow:
                                        '2px 4px 4px -2px rgba(0,0,0,0.55)',
                                }}
                            >
                                <div
                                    className="row"
                                    style={{ color: '#00AA96' }}
                                >
                                    <div className="start-0 mt-4 mx-2 px-4 row">
                                        <span
                                            className="my-2"
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '1.3em',
                                            }}
                                        >
                                            Pasajes
                                        </span>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            No incluye pasaje (30)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Incluye pasaje (20)
                                        </a>
                                    </div>

                                    <div className="start-0 mx-2 px-4 mt-2 row">
                                        <span
                                            className="my-2"
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '1.3em',
                                            }}
                                        >
                                            Otros destinos
                                        </span>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Distrito capital (1)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Nayarit (2)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Oaxaca (3)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Mazatlán (5)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Cancun (3)
                                        </a>
                                    </div>

                                    <div className="start-0 pb-4 mx-2 px-4 mt-2 row">
                                        <span
                                            className="my-2"
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '1.3em',
                                            }}
                                        >
                                            Meses
                                        </span>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Julio (12)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Agosto (8)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Septiembre (5)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Noviembre (4)
                                        </a>
                                        <a
                                            href="#"
                                            className="text-decoration-none my-1"
                                            style={{
                                                color: '#00AA96',
                                                fontSize: '1em',
                                            }}
                                        >
                                            Diciembre (3)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pt-5 mt-sm-5 order-md-2    align-items-center">
                        <div className="text-start mx-3">
                            <h3 className="title-landing-phone-product text-bold">
                                ¿Buscas algo de última hora?
                            </h3>
                        </div>

                        <div className="row justify-content-center gap-3">
                            {' '}
                            {products.map((product, i) => (
                                <CardProduct key={i} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
