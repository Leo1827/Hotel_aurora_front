import CardProductStore from '../components/CardProductStore'
import bannerProd from '../../public/Images/banner-product.png'
import { useMapping } from '../hooks/useMapping'
import parse from 'html-react-parser'
import {
    getProductByIdService,
    getProductsService,
} from '../services/productService'
import { useParams } from 'react-router-dom'
import { formatMexicanCurrency } from '../helpers/helpers'
import { useState } from 'react'
import { routeStoragePath } from '../helpers/variables'

const ShowProduct = () => {
    const [imgSelectedIndex, setimgSelectedIndex] = useState(0)

    const productsRelated = useMapping(getProductsService, [])

    const params = useParams()

    const product = useMapping(getProductByIdService, {}, params.id)

    /* Function to change image selected */
    const changeImgSelected = (index) => {
        setimgSelectedIndex(index)
    }

    return (
        <div id="showProduct" className="container-fluid">
            <div className="banner">
                <img src={bannerProd} alt="" />
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 mt-5 p-0 containerImg">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-md-2 p-0 imageSmall">
                                    <div className="container text-center">
                                        <div className="row">
                                            {product?.files?.map(
                                                (imgProd, i) => (
                                                    <div
                                                        className="col-12 p-0 img m-1"
                                                        key={i}
                                                        onClick={() =>
                                                            changeImgSelected(i)
                                                        }
                                                    >
                                                        <img
                                                            src={
                                                                routeStoragePath +
                                                                imgProd.path
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-sm-12 imageBig">
                                    <div className="img">
                                        {product?.files && (
                                            <img
                                                src={
                                                    routeStoragePath +
                                                    product?.files[
                                                        imgSelectedIndex
                                                    ]?.path
                                                }
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  mt-4 containerImg">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <h3 className="fw-bold text-success">
                                    {product?.name}
                                </h3>
                                <p className="fw-semibold fs-5">
                                    {product?.description &&
                                        parse(product?.description)}
                                </p>
                                <p className="text-primary fs-4 fw-bold">
                                    Precio:{' '}
                                    {formatMexicanCurrency(product?.salePrice)}
                                </p>
                                <div className="row ms-5 justify-content-center">
                                    <div className="col">
                                        <label htmlFor="">Cantidad: </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="quantity"
                                            id="quantity"
                                            min={1}
                                            max={product?.stock}
                                            placeholder="1"
                                        />
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>

                                <div className="containerButton">
                                    <a href="#" className="btn btn-primary">
                                        Añadir al carrito
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <h1 className="m-5">¡ Productos Relacionados !</h1>
                <div className="row ">
                    {productsRelated.map((product, i) => (
                        <div className="col-md-4 col-sm-12 mt-3" key={i}>
                            <CardProductStore product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShowProduct
