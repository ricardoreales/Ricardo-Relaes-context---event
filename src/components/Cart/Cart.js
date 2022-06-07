import './Cart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div className="cartStyleContainer" key={prod.id}>
                          <table>
                                  <td>Cantidad:
                                  <tr>
                                  {prod.quantity}
                                  </tr>
                                  </td>
                                  <td>Precio x Uni:
                                  <tr> ${prod.price}</tr>
                                  </td>
                                  <td>Subtotal:
                                  <tr> ${prod.price * prod.quantity}</tr>
                                  </td>
                                  <td> <button className='btnDelete' onClick={() => removeItem(prod.id)}>eliminar del carrito</button></td>
                          </table>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart