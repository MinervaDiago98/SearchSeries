// HOOKS
import { useRef, useEffect, useState } from 'react'
// Libraries
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
// Components
import Series from './Series'
import Loading from './Loading'

const URLSearch = 'https://api.tvmaze.com/search/shows?q='

function App () {
  const searchRef = useRef(null)
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)

  const getSeries = async (serieName = 'girl') => {
    return await axios.get(`${URLSearch}${serieName}`)
  }

  const getData = async () => {
    const { data } = await getSeries()
    setSeries(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getSeries(searchRef.current.value)
    setSeries(data)
  }

  return (
    <section className='container'>
      <section className='row mt-5'>
        <section className='col-3' />
        <section className='col-6'>
          <h4 className='text-center'>Search your favorite serie...</h4>
          <form onSubmit={handleSubmit}>
            <section className='input-group'>
              <input
                ref={searchRef}
                type='search'
                placeholder='Search series'
                className='form-control'
                // Por si ocupamos el name de este input consultando el target
                name='buscador'
              />
              <button className='btn btn-primary'> <FaSearch /> Search</button>
            </section>
          </form>
        </section>
      </section>
      <section className='row'>
        <section className='mt-5'>
          {loading ? <Loading /> : <Series data={series} />}
        </section>
      </section>
    </section>
  )
}

export default App
