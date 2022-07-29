import axios from 'axios'

const URLSearch = 'https://api.tvmaze.com/search/shows?q='

const getSeries = async (serieName) => {
  return await axios.get(`${URLSearch}${serieName}`)
}

export default getSeries
