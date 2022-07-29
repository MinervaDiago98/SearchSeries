import { FaHome } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='navbar bg-nav'>
      <div className='container-fluid'>
        <FaHome className='text-white fs-2 ms-2' />
        {/* <a className='navbar-brand text-white '>Series</a> */}
      </div>
    </nav>

  )
}

export default Navbar
