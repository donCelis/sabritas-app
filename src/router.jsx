import { BrowserRouter, Routes, Route } from 'react-router-dom'

// componentes
// import Navbar from './components/Navbar'
import Countries from './components/Countries'
import App from './pages/App'
import Country from './pages/Country'
// import Navbar from './components/Navbar'

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Countries />} />
          <Route path='country' element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router