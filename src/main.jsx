// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
// libraries
import { createRoot } from 'react-dom/client'
// import { StrictMode } from 'react'
import Paths from './paths'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)
