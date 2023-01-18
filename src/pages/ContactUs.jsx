import './ContactUs.css'
import { form } from '../assets/data/data'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import AnimPage from '../components/AnimPage'



const ContactUs = () => {
const [loading,setLoading]=useState(false)
const [input,setInput]=useState(
    {
    firstName:'',
secondName:'',
email:'',
text:''})



 const   handleSubmit= (e)=> {
e.preventDefault()
setLoading(true)
   setTimeout(()=>{
    toast.success('Successfully sent!')
    setLoading(false)
    setInput( {
        firstName:'',
    secondName:'',
    email:'',
    text:''})
},2000)

console.log(input)
    }


 return (
    <AnimPage>
    <div className='contact_page'>


        <form onSubmit={handleSubmit}> 

            <h1>contact with us</h1>
            {form.map((el)=> 
            (<>
            <input name={el.name} placeholder={el.placeholder} type={el.type} required onChange={(e)=>{setInput(
                {...input,[el.name]:e.target.value})}}  value={input[el.name]} key={el.id} />
           
            </>)
            
            )}
        
        <textarea  id='4' name="message"  placeholder='ENTER YOUR MESSAGE HERE' required onChange={(e)=>setInput({...input,text:e.target.value})} value={input.text}></textarea>
       
        <button>{loading ? 'LOADING...' : 'SEND'}</button>
        
        
        </form>
    </div>
    </AnimPage>
  )
}

export default ContactUs