import Carousel from 'react-bootstrap/Carousel'

const MyCarousel = () => {
    return (
        <div className="myCarousel" style={{ width: '100%' }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        src="./Images/defaulthotel.png"
                        className="d-block w-100"
                        alt="First slide"
                    />
                    <Carousel.Caption className="top-50 start-50 w-100 translate-middle h-100">
                        <div className="package-carousel w-25">
                            <h1 className="d-flex row-carousel">HARD ROCK</h1>
                            <span className="d-flex row-carousel">
                                Puerto Vallarta - 2 noches y 3 días
                            </span>
                            <span className="d-flex row-carousel">
                                Disponible: Mayo - Junio - Julio
                            </span>
                            <p
                                className="d-flex row-carousel"
                                style={{ fontWeight: '700', fontSize: '2.5em' }}
                            >
                                $11,200 MXN
                            </p>
                            <span className="d-flex row-carousel">
                                Ciertas condiciones aplican**
                            </span>
                            <button
                                className="btn text-white my-3 d-flex justify-content-center"
                                style={{
                                    width: '300px',
                                    backgroundColor: '#00AA96',
                                }}
                            >
                                <span
                                    className="fw-bolder"
                                    style={{ fontSize: '1.8em' }}
                                >
                                    Cotizar
                                </span>
                            </button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 margin-img-carousel"
                        src="./Images/island.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="top-50">
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 margin-img-carousel"
                        src="./Images/city.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="top-50">
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MyCarousel
