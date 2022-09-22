import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'

import 'bootstrap/dist/css/bootstrap.min.css'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <App />
  </StrictMode>
)
