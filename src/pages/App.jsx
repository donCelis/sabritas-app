import { useEffect, useRef, useState } from 'react'

function App () {
  /*
    Reglas de los hooks
    -- Van en la cabecera del componente
    -- No se pueden ejecutar dentro de un scope
  */
  // side effects

  const [number, setNumber] = useState(0)
  const [test, setTest] = useState(false)

  const elementRef = useRef(null)

  // cambiar un estado a partir de un side effect
  // se ejecuta cada que cambia cualquier estado
  /* useEffect(() => {
    setNumber(10)
    console.log(number)
  }) */

  // se ejecuta solo la primera vez que se monta el componente
  /* useEffect(() => {
    setNumber(10)
    console.log(number)
  }, []) */

  // se ejecuta cada que hay un cambio en cualquiera de las dependencias
  /* useEffect(() => {
    setNumber(10)
    console.log(number)
  }, [test]) */

  const handler = (event) => {
    event.target.style.color = 'red'
    elementRef.current.classList.add('bg-primary', 'text-light')
  }

  return (
    <>
      <section className='app'>
        <p ref={elementRef}>Reset App</p>
        <p>{number}</p>
        <button onClick={handler}>Cambiar</button>
      </section>
    </>
  )
}

export default App
