import { useEffect, useState } from 'react'

// componentes
import Card from './Card'

const Countries = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const req = await window.fetch('https://restcountries.com/v3.1/all')
      const res = await req.json()
      setData(res)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className='container py-4'>
      <div className='row gy-4'>
        {
        loading
          ? <p className='text-center'>Cargando...</p>
          : data.map((country, index) => (
            <aside key={index} className='col-12 col-md-6 col-lg-3'>
              <Card {...country} />
            </aside>
          ))
        }
      </div>
    </section>
  )
}

export default Countries
