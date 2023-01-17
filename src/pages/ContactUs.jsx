import './ContactUs.css'
import { form } from '../assets/data/data'


import { toast } from 'react-hot-toast'







const ContactUs = () => {
 const   handleSubmit=(e)=> {
e.preventDefault()

toast.success('Successfully sent!')
    }
 return (
    <div className='contact_page'>


        <form onSubmit={handleSubmit}> 

            <h1>contact with us</h1>
            {form.map((el)=> 
            (<>
            <input name={el.name} placeholder={el.placeholder} type={el.type} required />
            <p>{el.message}</p>
            </>)
            
            )}
        
        <textarea  id='4' name="message"  placeholder='ENTER YOUR MESSAGE HERE' required></textarea>
        <p>please enter your message</p>
        <button>SEND</button>
        
        
        </form>
    </div>
  )
}

export default ContactUs