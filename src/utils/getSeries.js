import axios from 'axios'

const URLSearch = 'https://api.tvmaze.com/search/shows?q='
const URLSearchId = 'https://api.tvmaze.com/shows/'

export const getSeries = async (serieName) => {
  return await axios.get(`${URLSearch}${serieName}`)
}

export const getSerie = async (id) => {
  return await axios.get(`${URLSearchId}${id}`)
}
