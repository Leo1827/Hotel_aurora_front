import { useState } from 'react'
import IconList from './IconList'
import { Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const products = [
    {
        id: 1,
        title: 'Producto 1',
        thumbnailUrl: 'Images/image1.png',
        imageUrl: 'Images/image1.png',
    },
    {
        id: 2,
        title: 'Producto 2',
        thumbnailUrl: 'Images/image2.png',
        imageUrl: 'Images/image2.png',
    },
    {
        id: 3,
        title: 'Producto 3',
        thumbnailUrl: 'Images/image3.png',
        imageUrl: 'Images/image3.png',
    },
    {
        id: 4,
        title: 'Producto 3',
        thumbnailUrl: 'Images/image4.png',
        imageUrl: 'Images/image4.png',
    },
    {
        id: 5,
        title: 'Producto 3',
        thumbnailUrl: 'Images/image5.png',
        imageUrl: 'Images/image5.png',
    },
]

function CartProduct() {
    const [selectedProduct, setSelectedProduct] = useState(products[0])

    function handleSelectProduct(product) {
        setSelectedProduct(product)
    }

    return (
        <div className="cartProduct mx-md-5 px-md-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="container-fluid my-4">
                        <span>Destinos Vallarta Kristal vallarta</span>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="container-main-img p-2  col-md-6 order-md-1">
                        {selectedProduct ? (
                            <img
                                src={selectedProduct.imageUrl}
                                alt={selectedProduct.title}
                                className="main-image"
                            />
                        ) : (
                            <p>
                                Selecciona un producto para ver la imagen
                                principal
                            </p>
                        )}
                    </div>
                    <div className="container-img-cart-min col-md-1 mt-2 px-1 order-md-0">
                        {products.map((product) => (
                            <div
                                className="img-cart-min-item pb-1"
                                key={product.id}
                            >
                                <img
                                    src={product.thumbnailUrl}
                                    alt={product.title}
                                    className=""
                                    onClick={() => handleSelectProduct(product)}
                                />
                            </div>
                        ))}
                    </div>
                    <div
                        id="dataInfoPack"
                        className="col-md-4 ms-4 order-md-2 mt-1 card "
                    >
                        <div className="container-fluid">
                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <h1 style={{ fontWeight: '650' }}>
                                        Kristal Vallarta
                                    </h1>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 mb-4">
                                    <IconList
                                        icon="check-circle"
                                        color="#00AA96"
                                        size="lg"
                                    />
                                    <span
                                        className="col-md-4 mx-2"
                                        style={{ fontWeight: '500' }}
                                    >
                                        Hotel plan todo incluido
                                    </span>
                                </div>
                                <div className="col-6 mb-4">
                                    <IconList
                                        icon="check-circle"
                                        color="#00AA96"
                                        size="lg"
                                    />
                                    <span
                                        className="col-md-6 mx-2"
                                        style={{ fontWeight: '500' }}
                                    >
                                        Autobus en viaje redondo
                                    </span>
                                </div>
                                <div className="col-6 mb-4">
                                    <IconList
                                        icon="xmark-circle"
                                        color="#00AA96"
                                        size="lg"
                                    />
                                    <span
                                        className="col-md-4 mx-2"
                                        style={{ fontWeight: '500' }}
                                    >
                                        x 3 días 2 noches
                                    </span>
                                </div>
                                <div className="col-6 mb-4">
                                    <IconList
                                        icon="xmark-circle"
                                        color="#00AA96"
                                        size="lg"
                                    />
                                    <span
                                        className="col-md-6 mx-2"
                                        style={{ fontWeight: '500' }}
                                    >
                                        x Servicio a la habitación
                                    </span>
                                </div>
                                <div className="col-6 mb-4">
                                    {' '}
                                    <IconList
                                        icon="check-circle"
                                        color="#00AA96"
                                        size="lg"
                                    />
                                    <span
                                        className="col-md-4 mx-2"
                                        style={{ fontWeight: '500' }}
                                    >
                                        Acceso a playas
                                    </span>
                                </div>
                                <div className="col-6 mb-4">
                                    {' '}
                                    <IconList
                                        icon="check-circle"
                                        color="#00AA96"
                                        size="lg"
                                    />
                                    <span
                                        className="col-md-6 mx-2"
                                        style={{ fontWeight: '500' }}
                                    >
                                        Gimnacio
                                    </span>
                                </div>
                                <div className="col-6 mb-4">
                                    <IconList
                                        icon="check-circle"
                                        color="#00AA96"
                                        size="lg"
                                    />
                                    <span
                                        className="col-md-4 mx-2"
                                        style={{ fontWeight: '500' }}
                                    >
                                        Restaurante
                                    </span>
                                </div>
                                <div className="col-6 mb-4">
                                    {' '}
                                    <IconList
                                        icon="check-circle"
                                        color="#00AA96"
                                        size="lg"
                                    />
                                    <span
                                        className="col-md-6 mx-2"
                                        style={{ fontWeight: '500' }}
                                    >
                                        Desayuno
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row container-description"
                            style={{ height: '100%' }}
                        >
                            <div className="row pt-3">
                                <form action="" className="form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label
                                                htmlFor=""
                                                className="mx-1 py-1 text-success"
                                            >
                                                Fechas:
                                            </label>
                                            <Input
                                                type="date"
                                                className="border-input-cart "
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label
                                                htmlFor=""
                                                className="mx-1 py-1 text-success"
                                            >
                                                Tours:
                                            </label>
                                            <Input
                                                type="select"
                                                className="border-input-cart"
                                            >
                                                <option value="1">
                                                    Dolphin Signature Swim{' '}
                                                </option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label
                                                htmlFor=""
                                                className="mx-1 py-1 text-success"
                                            >
                                                Personas:
                                            </label>
                                            <Input
                                                type="number"
                                                className="border-input-cart form-control "
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="row my-4">
                                <div className="col-md-5 my-1">
                                    <span className="price-total">
                                        Sub total: $11000
                                    </span>
                                </div>
                                <div className="col-md-6">
                                    <Link
                                        to="/cart-confirm"
                                        className="btn btn-primary btn-lg"
                                    >
                                        Crear Cotización
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
