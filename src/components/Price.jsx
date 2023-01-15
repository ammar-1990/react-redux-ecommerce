import './Price.css'

const Price = ({price}) => {
  return (
    <div className='price'>
        <h4 className="name">{price.name}</h4>
        <div className="info">
            <span className="amount">{price.price}</span>
            <span className='users'> /user per mounth</span>
            </div>

            <p className="desc">{price.desc}</p>

            <div className="button"><button>get started</button></div>
            <ul>
                {price.list.map((el)=>(
                    <li ><span className="icon">{el.icon}</span>
                    <span className="title">{el.para}</span>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Price