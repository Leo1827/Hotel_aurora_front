import { Link } from 'react-router-dom'

const StoreTours = () => {
    return (
        <div id="storeTour" className="container-fluid">
            <div className="banner">
                <img src="public/Images/bannerTour.jpg" alt="" />
            </div>
            <div className="container text-center">
                <div className="row">
                    <h1 className="text-center">
                        ¡ Disfruta mejor tu viaje con nuestros Tours!
                    </h1>
                    <div
                        className="col-md-3"
                        style={{ backgroundColor: '#F6F6F6' }}
                    >
                        <select
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option selected>Filtra por estado</option>
                            <option value="1">Nayarit</option>
                            <option value="2">Jalisco</option>
                            <option value="3">Sinaloa</option>
                        </select>
                    </div>

                    <div className="col-12 cardContainerTour">
                        <div className="containerTour text-center">
                            <div className="row">
                                <div className="col-md-12 containerCard mt-3">
                                    <div className="card mb-3">
                                        <div className="row g-0 container">
                                            <Link to="/show-tour">
                                                <h5 className="card-title fw-bold fs-3 mt-3">
                                                    Isla virgen
                                                </h5>
                                            </Link>
                                            <div className="col-md-4 containerImg">
                                                <img
                                                    src="./Images/isla.jpg"
                                                    className="img-fluid rounded-start"
                                                    alt="..."
                                                />
                                            </div>

                                            <div className="col-md-8 texto">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p
                                                                className="card-text"
                                                                style={{
                                                                    textAlign:
                                                                        'left',
                                                                }}
                                                            >
                                                                Únete a nuestro
                                                                tour a Isla
                                                                Contoy, una de
                                                                nuestras mejores
                                                                actividades en
                                                                Cancún para
                                                                amantes de la
                                                                naturaleza. El
                                                                Parque Nacional
                                                                Isla Contoy es
                                                                únicamente
                                                                habitado por
                                                                tortugas,
                                                                cangrejos
                                                                ermitaños, aves,
                                                                rayas, langostas
                                                                y cientos de
                                                                coloridos peces
                                                                tropicales...
                                                                ¡un verdadero
                                                                paraíso natural!
                                                            </p>
                                                        </div>
                                                        <div className="col-md-12 mt-4">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Adulto:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $1000.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Junior:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $800.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Niños:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $500.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Menor:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $100.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between state">
                                                    <p>
                                                        <span className="text-dark fw-bold">
                                                            Estado:
                                                        </span>
                                                        <span className="fw-bold fs-6 text-danger">
                                                            {' '}
                                                            Nayarit
                                                        </span>
                                                    </p>
                                                    <a
                                                        className="m-2 fw-bold"
                                                        href=""
                                                    >
                                                        Reservar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 containerCard mt-3">
                                    <div className="card mb-3">
                                        <div className="row g-0 container">
                                            <a href="show-tour">
                                                <h5 className="card-title fw-bold fs-3 mt-3">
                                                    Isla virgen
                                                </h5>
                                            </a>
                                            <div className="col-md-4 containerImg">
                                                <img
                                                    src="./Images/isla.jpg"
                                                    className="img-fluid rounded-start"
                                                    alt="..."
                                                />
                                            </div>

                                            <div className="col-md-8 texto">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p
                                                                className="card-text"
                                                                style={{
                                                                    textAlign:
                                                                        'left',
                                                                }}
                                                            >
                                                                Únete a nuestro
                                                                tour a Isla
                                                                Contoy, una de
                                                                nuestras mejores
                                                                actividades en
                                                                Cancún para
                                                                amantes de la
                                                                naturaleza. El
                                                                Parque Nacional
                                                                Isla Contoy es
                                                                únicamente
                                                                habitado por
                                                                tortugas,
                                                                cangrejos
                                                                ermitaños, aves,
                                                                rayas, langostas
                                                                y cientos de
                                                                coloridos peces
                                                                tropicales...
                                                                ¡un verdadero
                                                                paraíso natural!
                                                            </p>
                                                        </div>
                                                        <div className="col-md-12 mt-4">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Adulto:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $1000.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Junior:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $800.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Niños:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $500.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Menor:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $100.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between state">
                                                    <p>
                                                        <span className="text-dark fw-bold">
                                                            Estado:
                                                        </span>
                                                        <span className="fw-bold fs-6 text-danger">
                                                            {' '}
                                                            Nayarit
                                                        </span>
                                                    </p>
                                                    <a
                                                        className="m-2 fw-bold"
                                                        href=""
                                                    >
                                                        Reservar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 containerCard mt-3">
                                    <div className="card mb-3">
                                        <div className="row g-0 container">
                                            <a href="show-tour">
                                                <h5 className="card-title fw-bold fs-3 mt-3">
                                                    Isla virgen
                                                </h5>
                                            </a>
                                            <div className="col-md-4 containerImg">
                                                <img
                                                    src="./Images/isla.jpg"
                                                    className="img-fluid rounded-start"
                                                    alt="..."
                                                />
                                            </div>

                                            <div className="col-md-8 texto">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p
                                                                className="card-text"
                                                                style={{
                                                                    textAlign:
                                                                        'left',
                                                                }}
                                                            >
                                                                Únete a nuestro
                                                                tour a Isla
                                                                Contoy, una de
                                                                nuestras mejores
                                                                actividades en
                                                                Cancún para
                                                                amantes de la
                                                                naturaleza. El
                                                                Parque Nacional
                                                                Isla Contoy es
                                                                únicamente
                                                                habitado por
                                                                tortugas,
                                                                cangrejos
                                                                ermitaños, aves,
                                                                rayas, langostas
                                                                y cientos de
                                                                coloridos peces
                                                                tropicales...
                                                                ¡un verdadero
                                                                paraíso natural!
                                                            </p>
                                                        </div>
                                                        <div className="col-md-12 mt-4">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Adulto:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $1000.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Junior:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $800.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Niños:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $500.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <p>
                                                                        <span className="fw-bold">
                                                                            Menor:{' '}
                                                                        </span>
                                                                        <span
                                                                            className="fw-bolder fs-6"
                                                                            style={{
                                                                                color: '#00AA96',
                                                                            }}
                                                                        >
                                                                            $100.00
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between state">
                                                    <p>
                                                        <span className="text-dark fw-bold">
                                                            Estado:
                                                        </span>
                                                        <span className="fw-bold fs-6 text-danger">
                                                            {' '}
                                                            Nayarit
                                                        </span>
                                                    </p>
                                                    <a
                                                        className="m-2 fw-bold"
                                                        href=""
                                                    >
                                                        Reservar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 d-flex justify-content-end verMas">
                                    <a href="">Ver mas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreTours
