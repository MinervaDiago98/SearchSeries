// import { useEffect } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import notFound from '../assets/notFound.png'
import { FaStar } from 'react-icons/Fa'
import Seasons from './Seasons'

const URLSearchId = 'https://api.tvmaze.com/shows/'

const Serie = () => {
  const { serieId } = useParams()
  const [dataId, setDataId] = useState([])
  const { name, image, summary, rating, language, genres, officialSite: site, status, id } = dataId
  // const description = summary.replace(/<[^>]*>/g, '')

  const getDataId = async () => {
    return await axios.get(`${URLSearchId}${serieId}`)
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await getDataId()
      setDataId(data)
      console.log(data)
    }
    getData()
  }, [])

  return (
    <>
      <section className='container'>
        <section className='row text-center mt-3 mb-4'>
          <h3 className=''> <strong>{name}</strong> </h3>
          <p className='text-primary mb-3 '><FaStar className='text-warning fs-4' /> {rating?.average}</p>
          <hr />
        </section>
        <section className='row'>
          <section className='col-2' />
          <section className='col-4 p-0 text-center'>
            <img
              className='img-fluid'
              src={image?.medium || notFound}
              alt=''
              width={300}
            />
          </section>
          <section className='col-4 p-0 mb-5'>
            <p className='text-center fs-5 text-primary'><strong>Description</strong></p>
            <p>{summary?.replace(/<[^>]*>/g, '')} </p>
            <p><strong>Language:</strong> {language}</p>
            <p><strong>Status: </strong>{status}</p>
            <p><strong>Official site: </strong>
              <a href={site} target='blank'>{site}
              </a>
            </p>
            {genres?.map(item => (
              <span className='rounded-1 bg-span  m-1 ps-2 pe-2 pb-1 text-white ' key={item}> {item} </span>
            ))}
          </section>
        </section>
      </section>
      <Seasons id={id} />
    </>
  )
}

export default Serie
