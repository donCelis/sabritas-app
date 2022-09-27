import { useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { alphaCode } = useParams()
  const navigate = useNavigate()

  const { data, loading } = useGetData(
    `https://restcountries.com/v3.1/alpha/${alphaCode}`
  )

  useEffect(() => {
    data.status === 400 && navigate('/404')
  }, [data.status])

  return (
    <section className='container py-4'>
      <div className='row justify-content-center text-white'>
        <aside className='col-6'>
          {loading
            ? <p className='text-center text-white'>Cargando...</p>
            : (
              <article>
                <img className='img-fluid' src={data[0]?.flags?.svg} alt='bandera' />
                <h1 className='text-center'>{data[0]?.name?.common || data.message}</h1>
              </article>
              )}
        </aside>
        {/* {data.status === 400 && <Navigate to='/404' />} */}
      </div>
    </section>
  )
}

export default Country
