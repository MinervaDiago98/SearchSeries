import { FaSadCry } from 'react-icons/fa'

const NoResults = () => {
  return (
    <section className='container'>
      <section className='row'>
        <section className='col-3' />
        <section className='col-6 text-center'>
          <p className='fs-3 mt-5'>No se encontraron resultados</p>
          <FaSadCry className='fs-1' />
        </section>
      </section>
    </section>
  )
}

export default NoResults
