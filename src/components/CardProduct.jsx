import PropTypes from 'prop-types'
import { routeStoragePath } from '../helpers/variables'
import { formatMexicanCurrency } from '../helpers/helpers'

const CardProduct = ({ product }) => {
    return (
        <div className="cardProduct" style={{ width: '290px' }}>
            <div className="card border-0 rounded-4 card-border">
                <img
                    src={routeStoragePath + product?.files[0]?.path}
                    className="card-img-top rounded-top img-fluid"
                    alt="Imagen"
                />
                <div className="card-body p-0">
                    <div className="d-flex gap-2 mx-2 my-2">
                        <div className="col-md-6 col-lg-6 title-product-medium">
                            <a className="card-title lead">{product.name}</a>
                        </div>

                        <div className="col-md-6 col-lg-6 mt-1 price-product-medium">
                            <p className="card-text lead text-end mx-2 ">
                                {formatMexicanCurrency(product.salePrice)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object.isRequired,
}

export default CardProduct
