import './Cart.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext"
import UserContext from "../../context/UserContext"
import { addDoc, collection} from 'firebase/firestore'  
import { db } from '../../services/firebase'
import { useNotification } from '../../notification/Notification'


const Cart = () => {
    
    const { cart, removeItem, getQuantity, clearCart, getTotal } = useContext(CartContext)

    const { user } = useContext(UserContext)
    const { setNotification } = useNotification()

    const createOrder = () => {
        console.log("crear orden")

        const objOrder = {
            user,
            items: cart,
            total: getTotal ()
        }

        console.log(objOrder)
        
        const collectionRef = collection (db, 'orders')


        addDoc(collectionRef, objOrder).then(({id}) => {
            setNotification('success', `se creo la orden con el id: ${id}`)
            console.log(`se creo la orden con el id: ${id}`)
        })
    }

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
                                <thead className='tableTitle'>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Precio Unitario</th>
                                        <th>Sutotal</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{prod.name}</td>
                                        <td>{prod.quantity}</td>
                                        <td>${prod.price}</td>
                                        <td>${prod.price * prod.quantity}</td>
                                        <td>
                                            <button className='btnDelete' onClick={() => removeItem(prod.id)}>eliminar del carrito</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
                }
            </div>

            <button className='btnDelete' onClick={() => clearCart()}>Limpiar carrito</button>
            
            { user.email 
                ? <button className='btnOrden' onClick={createOrder} >Crear Orden</button> 
                : <Link to='/Formulario'>Debe loguearse para continuar</Link>
            }
            

            <h3>Total: ${getTotal()}</h3>
            
        </div>
    )
}

export default Cart