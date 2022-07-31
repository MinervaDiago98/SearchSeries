import { Link } from 'react-router-dom'
import notFound from '../assets/notFound.png'

const CardSerie = ({ show }) => {
  const { name, image, language, status, premiered, genres, id } = show
  console.log(genres)

  return (
    <section className='card mb-3 bg-white shadow gradient card-border' style={{ maxWidth: 640, maxHeight: 360 }}>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img className='card-img img-cards rounded-0' src={image?.medium || notFound} alt='img' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title fs-4 font-cards'>{name}</h5>
            <p className='fw-semibold'> {language} language </p>
            <p className='fs-6 text-muted fit-content'><strong>Status: </strong>{status}</p>
            <p className='fs-6 text-muted fit-content'><strong>Premiered: </strong>{premiered}</p>
            <p className='fs-6 text-muted mb-5'><strong>Gender: </strong>{genres.map((item) => `${item} `)}
            </p>
            <Link to={`/serie/${id}`} classname='btn btn-primary'>Ver más ...</Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CardSerie
