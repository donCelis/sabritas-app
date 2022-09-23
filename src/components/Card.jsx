const Card = ({ name = {}, flags = {}, capital = [] }) => {
  return (
    <div className='card'>
      <img src={flags.svg} className='card-img-top' alt={name.common} />
      <div className='card-body'>
        <h5 className='card-title'>{name.common}</h5>
        <p className='m-0'>{capital[0]}</p>
      </div>
    </div>
  )
}

export default Card
