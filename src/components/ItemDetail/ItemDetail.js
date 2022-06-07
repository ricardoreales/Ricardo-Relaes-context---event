import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)

        addItem({ id, name, price, quantity })
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                { quantity > 0  
                    ? <Link to='/cart' className='Option'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>}
            </footer>
        </article>
    )
}

export default ItemDetail