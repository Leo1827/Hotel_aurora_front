import { useEffect } from 'react'
import CartProductDetails from '../components/CartProductVerify'

const CartConfirm = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <CartProductDetails />
        </div>
    )
}

export default CartConfirm
