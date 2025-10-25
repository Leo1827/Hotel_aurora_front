import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatMexicanCurrency } from '../helpers/helpers'
import { routeStoragePath } from '../helpers/variables'
import * as cheerio from 'cheerio'
const CardProductStore = ({ product }) => {
    const $ = cheerio.load(product.description)
    const firstPTagContent = $('p').text()
    const first10Words =
        firstPTagContent.split(' ').slice(0, 10).join(' ') +
        (firstPTagContent.split(' ').length >= 10 ? ' ...' : '.')

    return (
        <div className="card">
            <Link to={`/show-product/${product.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={routeStoragePath + product.files[0].path}
                    alt=""
                />
            </Link>

            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{first10Words}</p>
                <h4> {formatMexicanCurrency(product.salePrice)}</h4>
                <a href="#" className="btn btn-primary">
                    Añadir al carrito
                </a>
            </div>
        </div>
    )
}

CardProductStore.propTypes = {
    product: PropTypes.object.isRequired,
}

export default CardProductStore
