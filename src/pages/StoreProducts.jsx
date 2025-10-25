import CardProductStore from '../components/CardProductStore'
import Range from '../components/Range'
import imgBanner from '../../public/Images/banner-product.png'
import { useMapping } from '../hooks/useMapping'
import { getProductsService } from '../services/productService'
const StoreProducts = () => {
    const products = useMapping(getProductsService, [])
    return (
        <div id="storeProduct" className="container-fluid">
            <div className="banner">
                <img src={imgBanner} alt="" />
            </div>
            <div className="container text-center">
                <div className="row d-flex justify-content-center">
                    <h1 className="text-center m-5">
                        ¡ Disfruta mejor viaje con nuestros productos
                        infaltables!
                    </h1>
                    <div className="col-md-3">
                        <Range range="" />
                    </div>
                    <div className="col-9 cardContainer">
                        <div className="container text-center">
                            <div className="row">
                                {products.map((product, i) => (
                                    <div
                                        className="col-md-4 col-sm-12 mt-3"
                                        key={i}
                                    >
                                        <CardProductStore product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreProducts
