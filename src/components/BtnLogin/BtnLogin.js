import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'

const BtnLogin = () => {

    const { user } = useContext(UserContext)

    return(
        <>
            <Link to='/Formulario' className="CartWidget">
                { user.email ? user.name : 'Acceder' }
            </Link> 
        </>
    );
}

export default BtnLogin