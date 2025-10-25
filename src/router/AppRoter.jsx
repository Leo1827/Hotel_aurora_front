import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '../pages/Home'
import CartProduct from '../pages/Cart'
import CartDetails from '../pages/CartConfirm'
import Landing from '../pages/Landing'
import PublicRoute from './PublicRoute'
import RegistCollaborator from '../pages/RegistCollaborator'
import StoreProducts from '../pages/StoreProducts'
import ShowProduct from '../pages/ShowProduct'
import StoreTours from '../pages/StoreTours'
import ShowTour from '../pages/ShowTour'
const AppRoter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    element={
                        <PublicRoute
                            isAuthenticated={false}
                            permissions={'Authenticathed'}
                        />
                    }
                >
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartProduct />} />
                    <Route path="cart-confirm" element={<CartDetails />} />
                    <Route
                        path="register-colaborator"
                        element={<RegistCollaborator />}
                    />
                    <Route path="landing" element={<Landing />} />
                    <Route path="store-products" element={<StoreProducts />} />
                    <Route path="show-product/:id" element={<ShowProduct />} />
                    <Route path="store-tours" element={<StoreTours />} />
                    <Route path="show-tour" element={<ShowTour />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoter
