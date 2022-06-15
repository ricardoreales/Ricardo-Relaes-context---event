import './Cart.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext"

const Cart = () => {

    const { cart, removeItem, getQuantity, clearCart, getTotal } = useContext(CartContext)

    if (getQuantity() === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link className='Option' to='/'>
                    <h3>Echa un vistaso a nuestros productos</h3>
                </Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map(prod => {
                    return (
                        <div className="cartStyleContainer" key={prod.id}>

                            <table>
                                <tr className='tableTitle'>
                                    <td>Producto</td>
                                    <td>Cantidad</td>
                                    <td>Precio Unitario</td>
                                    <td>Sutotal</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>{prod.name}</td>
                                    <td>{prod.quantity}</td>
                                    <td>${prod.price}</td>
                                    <td>${prod.price * prod.quantity}</td>
                                    <td>
                                        <button className='btnDelete' onClick={() => removeItem(prod.id)}>eliminar del carrito</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )
                })
                }
            </div>
            <button className='btnDelete' onClick={() => clearCart()}>Limpiar carrito</button>
            <button >Crear Orden</button>
            <h3>Total: ${getTotal()}</h3>
        </div>
    )
}

export default Cart