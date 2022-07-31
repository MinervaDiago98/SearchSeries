import { useEffect, useState } from 'react'
import { getSeries } from '../utils/getSeries'

const useFetcher = (serieName = 'z', id) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getSeries(serieName)
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [serieName])

  return { data, loading }
}

export default useFetcher
