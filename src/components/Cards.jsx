import './cards.css'

const Cards = ({el}) => {
  return (
    <div className='card'>
        <div className="left"><img src={el.cover} alt="" /></div>
        <div className="right">
            <h3>{el.name}</h3>
            <span>{el.items} items</span>
        </div>
    </div>
  )
}

export default Cards