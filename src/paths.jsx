import { Navbar } from './components/Navbar'
import { Routes, Route, Outlet } from 'react-router-dom'
import App from './components/App'
import Serie from './components/Serie'
// import NoResults from './components/NoResults'

const Paths = () => {
  return (
    <section className='container-fluid p-0'>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/serie' element={<Outlet />}>
          <Route index element={<App />} />
          <Route path=':serieId' element={<Serie />} />
        </Route>
        {/* <Route path='/404' element={<NoResults />} />
        <Route path='*' element={<Navigate to='/404' />} /> */}
        {/* idicamos una ruta din´amica con ':' */}
      </Routes>
    </section>

  )
}

export default Paths
