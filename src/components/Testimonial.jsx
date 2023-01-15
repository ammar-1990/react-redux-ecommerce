import './Testimonial.css'
import {FaQuoteLeft} from 'react-icons/fa'

const Testimonial = ({data}) => {
  return (
    <div className='testimonial'>

        <span className="quote"><FaQuoteLeft/></span>

        <p className="desc">{data.desc}</p>
        <p className="name">{data.name}</p>
        <p className="post">{data.post}</p>
    </div>
  )
}

export default Testimonial