import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import BtnLogin from '../BtnLogin/BtnLogin'

const NavBar = () => {
  return (
      <nav className="NavBar" >
          <Link to='/'>
            <h3 className='h3style'>SHOP</h3>
          </Link>
          <div className="Categories">
              <NavLink to='/category/celular' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
              <NavLink to='/category/tablet' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
              <NavLink to='/category/notebook' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
              <CartWidget />
              <BtnLogin />
          </div>
          
          
      </nav>
  )
}

export default NavBar