import CardProductVerifyDescription from './CartProductVerifyDescription'

const CartProductVerify = () => {
    return (
        <div className="cartProductVerify">
            <div className="container">
                <div className="row mt-5">
                    {/* En esta seccion el cliente registra sus datos */}
                    <div className="col-md-6">
                        {/* Acordion donde se muestra los datos del cliente */}
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button  bg-primary text-white"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <h4>Datos de los huespedes</h4>
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <form
                                            action=""
                                            className="form row  gap-4"
                                        >
                                            <div className="form-gruop">
                                                <span className="">
                                                    Nombre del huesped 1
                                                </span>
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-gruop">
                                                <span className="">
                                                    DNI del huesped 2
                                                </span>
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-gruop">
                                                <span className="">
                                                    DNI del huesped 2
                                                </span>
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-gruop">
                                                <span className="">
                                                    DNI del huesped 2
                                                </span>
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-success btn-lg">
                                                    Siguiente paso
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button  bg-primary text-white"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        <h4>Datos bancarios</h4>
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        {/* Acordeon en el que se agregan los datos bancarios */}
                                        <h4 className="border-bottom pb-2">
                                            Metodo de pago
                                        </h4>
                                        <div className="d-flex my-3">
                                            <div className="form-check">
                                                {/* <Input
                                        className="form-check-input"
                                        type="radio"
                                        value=""
                                        id="flexCheckDefault"
                                    /> */}
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    Tarjeta de credito
                                                </label>
                                            </div>

                                            <div className="mx-3">
                                                <svg
                                                    width="31"
                                                    height="20"
                                                    viewBox="0 0 31 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.137207"
                                                        y="0.441406"
                                                        width="30"
                                                        height="19"
                                                        rx="3"
                                                        fill="#00579F"
                                                    />
                                                    <path
                                                        d="M13.6175 13.2281H11.7705L12.9257 6.67578H14.7726L13.6175 13.2281Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M20.3128 6.8356C19.9485 6.70302 19.3707 6.55664 18.6563 6.55664C16.8323 6.55664 15.5479 7.44883 15.54 8.72438C15.5249 9.66548 16.4596 10.1882 17.1588 10.502C17.8733 10.8226 18.1162 11.0319 18.1162 11.3177C18.1089 11.7567 17.5388 11.959 17.0071 11.959C16.2697 11.959 15.8746 11.8547 15.2741 11.6105L15.0309 11.5058L14.7725 12.9767C15.2056 13.1577 16.0037 13.3183 16.8323 13.3254C18.7703 13.3254 20.032 12.447 20.0469 11.0877C20.0543 10.3418 19.5607 9.77027 18.4966 9.30324C17.8506 9.00343 17.455 8.80128 17.455 8.49453C17.4626 8.21566 17.7896 7.93003 18.5188 7.93003C19.1192 7.91604 19.5604 8.04843 19.8946 8.18092L20.0617 8.2505L20.3128 6.8356Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M22.7672 10.9069C22.9193 10.5304 23.5046 9.07356 23.5046 9.07356C23.4969 9.08755 23.6564 8.69019 23.7476 8.44625L23.8767 9.01084C23.8767 9.01084 24.2264 10.5793 24.3024 10.9069C24.0137 10.9069 23.132 10.9069 22.7672 10.9069ZM25.0471 6.67578H23.6184C23.1779 6.67578 22.8432 6.79418 22.6531 7.21943L19.9097 13.228H21.8476C21.8476 13.228 22.1667 12.4193 22.2353 12.2451C22.4479 12.2451 24.3331 12.2451 24.6066 12.2451C24.6596 12.4752 24.827 13.228 24.827 13.228H26.5371L25.0471 6.67578Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M10.2275 6.67578L8.41868 11.1438L8.22102 10.2377C7.88662 9.19206 6.83785 8.05603 5.66748 7.49116L7.32426 13.2212H9.27737L12.1805 6.67578H10.2275Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M6.73928 6.67578H3.76771L3.7373 6.80817C6.05532 7.35191 7.5905 8.66258 8.22123 10.2379L7.57525 7.22656C7.4689 6.80808 7.14206 6.68959 6.73928 6.67578Z"
                                                        fill="#FAA61A"
                                                    />
                                                </svg>
                                                <img
                                                    src="/Images/MasterCard.svg"
                                                    className="mx-2"
                                                    alt=""
                                                />
                                                <img
                                                    src="/Images/AmericanExpress.svg"
                                                    className=""
                                                    alt=""
                                                />
                                            </div>
                                        </div>

                                        <form
                                            action=""
                                            className="form d-flex flex-column gap-4"
                                        >
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Numero de la tarjeta:
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">
                                                            Fecha:
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">
                                                            CVC
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Fecha de vencimiento CVC
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Aqui es un visualizador donde mustra todos los precios y se puede pagar */}
                    <div className="col-md-6">
                        <div className="container-cart-phone">
                            <div className="d-flex container-tablet-cart mx-5 gap-5">
                                <div className="row mx-1">
                                    <div className="container">
                                        <div className="d-row my-3">
                                            <CardProductVerifyDescription />
                                        </div>

                                        <div className="d-row gap-5">
                                            <div>
                                                <div className="item mt-1 mb-1">
                                                    <span
                                                        className="lead"
                                                        style={{
                                                            fontWeight: '500',
                                                            fontSize: '1.7em',
                                                        }}
                                                    >
                                                        Precio total:{' '}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row container-info-cart">
                                            <div className="col-md-12">
                                                <div className="ellipse-container mt-5 mx-5">
                                                    <div className="ellipse">
                                                        <span className="dot dot-start">
                                                            <span className="data1">
                                                                Datos
                                                            </span>
                                                        </span>
                                                        <span className="dot dot-middle">
                                                            <span className="data2">
                                                                Cobro
                                                            </span>
                                                        </span>
                                                        <span className="dot dot-end">
                                                            <span className="data3">
                                                                Confirmación
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <span
                                                    className="w-75  text-packaje-cart"
                                                    style={{ fontSize: '.8em' }}
                                                >
                                                    El paquete turístico a
                                                    Vallarta incluye una estadía
                                                    de tres noches en el hotel
                                                    Krystal, uno de los mejores
                                                    en la ciudad. Durante su
                                                    estadía, tendrá la
                                                    oportunidad de disfrutar de
                                                    todas las comodidades que
                                                    ofrece el hotel, incluye
                                                    piscinas, restaurantes y un
                                                    bar. Además, el paquete
                                                    incluye un tour especial
                                                    para nadar con delfines.
                                                    Esta experiencia única le
                                                    permitirá interactuar con
                                                    estos animales maravillosos
                                                    y verlos de cerca en su
                                                    hábitat naturañ. Este tour
                                                    es una oportunidad única
                                                    para los maantes de la
                                                    naturaleza y los animales y
                                                    será un momento inolvidable
                                                    en su viaje a Vallarta.
                                                </span>
                                            </div>

                                            <span
                                                className="mx-5 w-75 my-4 text-fluid"
                                                style={{ color: '#00AA96' }}
                                            >
                                                Una vez realizado el pago tendrá
                                                no hay devoluciones*
                                            </span>

                                            <div className="row">
                                                <div className="col-md-12 mb-4 d-flex justify-content-center">
                                                    <button
                                                        className="form-control w-50 py-3"
                                                        style={{
                                                            backgroundColor:
                                                                '#AEC0B5',
                                                        }}
                                                    >
                                                        <span
                                                            className="text-white"
                                                            style={{
                                                                fontSize:
                                                                    '1.2em',
                                                                fontWeight:
                                                                    '600',
                                                            }}
                                                        >
                                                            Pagar 12500$
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex my-5 mx-5 w-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductVerify
