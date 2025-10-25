
const ShowTours = () => {
  return (
    <div id="storeTour" className="container-fluid">
        <div className='banner'>
            <img src="public/Images/bannerTour.jpg" alt="" />
        </div>

        <div className="container text-center">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./Images/delfines.jpg" className="d-block w-100"alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="./Images/delfines1.webp" className="d-block w-100"alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="./Images/delfines2.jpg" className="d-block w-100"alt="" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-md-6 mt-5'>
                    <form className="row g-3">
                        <div className="container text-center mt-5">
                            <div className="row">
                                <div className="col">
                                    <p style={{ color: "green", fontSize: "1em", fontWeight: "bold"}}>Adulto: $1000.00</p>
                                </div>
                                <div className="col">
                                    <p style={{ color: "green", fontSize: "1em", fontWeight: "bold"}}>Junior: $800.00</p>
                                </div>
                                <div className="col">
                                    <p style={{ color: "green", fontSize: "1em", fontWeight: "bold"}}>Niños: $500.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p><label htmlFor="start">Seleccione la fecha</label></p>
                            <input type="date" id="start" name="trip-start"
                            value="2018-07-22"
                            min="2018-01-01" max="2018-12-31"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="tourName">Adulto</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Cuantos adultos</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="tourName">Junior</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Cuantos Junior</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="tourName">Niños</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Cuantos Niños</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <a href="#" className='btn btn-primary'>Añadir al carrito</a>
                    </form>
                </div>
                <div className="col-md-12 mt-5">
                    <div className=''>
                        <a href=""><h5 className='card-title m-3' style={{ fontSize: "2.5em"}}>Paseo a Delfines</h5></a>
                        <p className='card-text' style={{ fontSize: "1.1em", textAlign: 'left'}}>Únete a nuestro tour a Isla Contoy, una de nuestras mejores actividades en Cancún para amantes de la naturaleza. El Parque Nacional Isla Contoy es únicamente habitado por tortugas, cangrejos ermitaños, aves, rayas, langostas y cientos de coloridos peces tropicales... ¡un verdadero paraíso natural!</p>
                        <p><span className='text-danger fw-bold'>Salida: Centro de Vallarta a las 9 am</span></p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container text-center">
            <h1 className='m-5'>¡ Mas tour por la zona !</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-md-3 col-sm-12 mt-3 d-flex justify-content-center">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="./Images/image-dolphin.png" className="card-img-top"alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Paseo con ballenas</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 mt-3 d-flex justify-content-center">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="./Images/image-extra.png" className="card-img-top"alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Extreme Zip Line Adventure</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 mt-3 d-flex justify-content-center">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="./Images/image-ou.png" className="card-img-top"alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Outdoor Zip Line Adventure</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12 mt-3 d-flex justify-content-center">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="./Images/image-ou.png" className="card-img-top"alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Outdoor Zip Line Adventure</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default ShowTours
