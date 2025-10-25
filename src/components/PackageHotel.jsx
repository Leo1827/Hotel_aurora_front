import { Link } from 'react-router-dom'
import IconList from './IconList'

const PackageHotel = () => {
    return (
        <div className="packageHotel my-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="d-flex col-md-10 px-0 card-package">
                        <div
                            id="carouselPackajeHotel"
                            className="carousel slide carousel-tablet w-50 p-0"
                        >
                            <div className="carousel-indicators invisible">
                                <button
                                    type="button"
                                    data-bs-target="#carouselPackajeHotel"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselPackajeHotel"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselPackajeHotel"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>

                            <div
                                className="carousel-inner carousel-container-tablet"
                                style={{ borderRadius: '10px 0px 0px 10px' }}
                            >
                                <div className="carousel-item active">
                                    <img
                                        src="./Images/eat-product.png"
                                        className="d-block img-packaje"
                                        style={{
                                            width: '280px',
                                            height: '280px',
                                        }}
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="./Images/pool.png"
                                        className="d-block img-packaje"
                                        style={{
                                            width: '280px',
                                            height: '280px',
                                        }}
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="./Images/play.png"
                                        className="d-block img-packaje"
                                        style={{
                                            width: '280px',
                                            height: '280px',
                                        }}
                                        alt="..."
                                    />
                                </div>
                            </div>

                            <button
                                className="carousel-control-prev bg-danger position-absolute"
                                type="button"
                                data-bs-target="#carouselPackajeHotel"
                                data-bs-slide="prev"
                                style={{ opacity: '0' }}
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden ">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselPackajeHotel"
                                data-bs-slide="next"
                                style={{ opacity: '0' }}
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="pt-3 mx-3">
                            <div className="font-weight-bold mt-2">
                                <span>Puerto Vallarta</span>
                            </div>

                            <div className="mt-2">
                                <Link to="/cart">
                                    <h1 className="title-package">
                                        Kristal vallarta
                                    </h1>
                                </Link>
                            </div>

                            <div className="d-flex gap-3 mt-1">
                                <a href="#" className="text-price">
                                    Adulto: $5500
                                </a>
                                <a href="#" className="text-price">
                                    Junior: $3500
                                </a>
                                <a href="#" className="text-price">
                                    Niño: $2000
                                </a>
                                <a href="#" className="text-price">
                                    Menor: $1000
                                </a>
                            </div>

                            <div className="w-100 mt-1">
                                <p className="text-description ">
                                    Este complejo mexicano está situado frente a
                                    la playa en la Bahía de Banderas. El hotel
                                    dispone de 3 piscinas al aire libre, 4
                                    restaurantes y bares, discoteca y spa de
                                    servicio completo.
                                </p>
                            </div>

                            <div className="row mt-5 pt-2 px-2 btn-medium">
                                <button
                                    className="btn w-100 "
                                    style={{ backgroundColor: '#00AA96' }}
                                >
                                    <span className="text-white">
                                        Cotizar ahora
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row position-absolute w-25 start-50 mt-2 mx-5 favorite-packaje">
                        <div className="row mx-5">
                            <div className="row">
                                <IconList
                                    icon={'favorite'}
                                    color={'#00AA96'}
                                    size={'lg'}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="position-relative text-tarjet"
                        style={{ marginRight: '10em' }}
                    >
                        <div
                            className="position-absolute bottom-0 end-0 p-2 text-white row mx-5 px-2"
                            style={{ backgroundColor: '#00AA96' }}
                        >
                            <span className="d-flex justify-content-center">
                                No incluye pasaje
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageHotel
