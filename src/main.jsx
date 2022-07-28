// components
import App from './components/App'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
// libraries
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
