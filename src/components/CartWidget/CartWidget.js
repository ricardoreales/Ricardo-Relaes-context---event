import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <img src="/images/cart.svg" alt='cart-widget' className='CartImg'/>
            { quantity }
        </Link>
    );
}

export default CartWidget