import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// components
import Router from './router'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <Router />
  </StrictMode>
)
