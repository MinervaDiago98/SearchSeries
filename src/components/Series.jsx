import CardSerie from './CardSerie'
import NoResults from './NoResults'

const Series = ({ data }) => {
  return (
    data && data.length === 0
      ? <NoResults />
      : (
        <ul className='row gx-3'>
          {data.map(item => (
            <li className='col-6' key={item.imdbID}>
              <CardSerie {...item} />
            </li>
          ))}
        </ul>
        )
  )
}

export default Series
