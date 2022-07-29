import notFound from '../assets/notFound.png'

const CardSerie = ({ show }) => {
  const { name, image } = show

  return (
    <section className='card mb-3' style={{ maxWidth: 640 }}>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img classname='card-img' src={image?.medium || notFound} alt='img' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>Descripción... </p>
            <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
            <a href='none' classname='btn btn-primary'>Ver más...</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CardSerie
