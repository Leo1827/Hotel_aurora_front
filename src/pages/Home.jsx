import MyCarousel from '../components/MyCarousel'
import CardProduct from '../components/CardProduct'
import About from '../components/About'
import ImgCard from '../components/ImgCard'
import CardPublicity from '../components/CardPublicity'
import CardPayment from '../components/CardPayment'
import { Link } from 'react-router-dom'

import { useMapping } from '../hooks/useMapping'
import { getProductsService } from '../services/productService'

const Home = () => {
    const products = useMapping(getProductsService, [])

    return (
        <>
            <div>
                <MyCarousel />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="products-fixed">
                                <div className="row" style={{ width: '97%' }}>
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <div className="container-infaltables">
                                            {products
                                                .slice(-5) // seleccion alos ultimos 4 productos del array
                                                .map((product, i) => (
                                                    <CardProduct
                                                        key={i}
                                                        product={product}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-end">
                                        <Link
                                            to="store-products"
                                            style={{
                                                textDecoration: 'underline',
                                            }}
                                        >
                                            Ver mas
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-md-5 containerAbout">
                <About />
            </div>

            <div className="mt-5 md:mx-8 d-flex justify-content-center container-card-img">
                <ImgCard imgSrc="./Images/land.png" title="Playa del carmen" />

                <ImgCard imgSrc="./Images/water.png" title="Los cenotes" />

                <ImgCard imgSrc="./Images/mx.png" title="Chichen-Itza" />
            </div>

            <div className="py-5 publicity-phone">
                <CardPublicity />
            </div>

            <div className="d-flex justify-content-center">
                <CardPayment />
            </div>
        </>
    )
}

export default Home
