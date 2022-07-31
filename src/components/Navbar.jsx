import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/Fa'

export function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg bg-nav'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-link ms-2' aria-current='page' to='/'><FaArrowLeft className='fs-4' /> </NavLink>
            <NavLink className='nav-link' to='/serie' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
