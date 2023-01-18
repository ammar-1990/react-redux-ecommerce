import './AboutUs.css'
import { customer } from '../assets/data/data'
import Testimonial from '../components/Testimonial'
import AnimPage from '../components/AnimPage'

const AboutUs = () => {
  return (
    <AnimPage>
    <div className='about-us'>

<h1>choose the planes</h1>
        <p>meet our newbies ! the latest templates uploaded to the market place</p>

        <div className="container">
{customer.map((el)=><Testimonial key={el.id}  data={el}/>)}
        </div>



    </div>

    </AnimPage>


  )
}

export default AboutUs