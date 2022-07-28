//
import { FaSearch } from 'react-icons/fa'

function App () {
  return (
    <section className='container'>
      <section className='row'>
        <section className='col-3' />
        <section className='col-6 mt-5'>
          <h4 className='text-center'>Search your favorite serie...</h4>
          <form>
            <section className='input-group mt-5'>
              <input
                type='search'
                placeholder='Search series'
                className='form-control'
              />
              <button className='btn btn-primary'> <FaSearch /> Search</button>
            </section>
          </form>
        </section>
        <section className='col-3' />
      </section>

    </section>
  )
}

export default App
