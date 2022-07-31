import axios from 'axios'
import React, { useState } from 'react'
import notFound from '../assets/notFound.png'

const URLSeasons = 'https://api.tvmaze.com/shows/'

const Seasons = ({ id }) => {
  const [dataSeasons, setDataSeasons] = useState([])
  console.log(dataSeasons)

  const getDataId = async () => {
    return await axios.get(`${URLSeasons}${id}/crew`)
  }

  const getData = async () => {
    const { data } = await getDataId()
    setDataSeasons(data)
  }

  getData()

  return (
    <section className='container'>
      <section className='row'>
        <section className='col-1' />
        <section className='col-10 mt-5'>
          <hr />
          <p className='text-center fw-semibold fs-4'> Cast </p>
          <hr />
          <ul className='row'>
            {
            dataSeasons.map(item => (
              <li className='col-3' key={item}>
                <div class='card mt-5' style={{ maxWidth: 240 }}>
                  <img className='card-img-top img-cards rounded-0' src={item.person.image?.medium || notFound} alt='img' />
                  <div class='card-body'>
                    <p className='card-title text-center fs-5 font-cards'>{item.person.name}</p>
                  </div>
                </div>
              </li>
            ))
          }
          </ul>
        </section>
      </section>
    </section>
  )
}

export default Seasons
