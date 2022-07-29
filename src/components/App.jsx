// HOOKS
import { useRef, useState } from 'react'
import useFetcher from '../hooks/useFetcher'

// Libraries
import { FaSearch } from 'react-icons/fa'
// Components
import Series from './Series'
import Loading from './Loading'
import Navbar from './Navbar'

function App () {
  const searchRef = useRef(null)
  const [serieName, setSerieName] = useState('z')
  const { data: series, loading } = useFetcher(serieName)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const { data } = await getSeries(searchRef.current.value)
    // setSeries(data)
    setSerieName(searchRef.current.value)
    e.target.reset()
  }

  return (
    <>
      <Navbar />
      <section className='container'>
        <section className='row mt-5'>
          <section className='col-3' />
          <section className='col-6'>
            <form onSubmit={handleSubmit}>
              <section className='input-group'>
                <input
                  ref={searchRef}
                  type='search'
                  placeholder='Search series'
                  className='form-control border-warning'
                  name='buscador'
                />
                <button className='btn bg-warning'> <FaSearch /> Search</button>
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
    </>
  )
}

export default App
