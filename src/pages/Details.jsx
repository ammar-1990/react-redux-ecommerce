import './details.css'
import { useParams } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import {BsStarFill} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import { ADD , REMOVE,DELETE } from '../features/cart/cartSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { products ,topProducts } from '../assets/data/data'
import { Link } from 'react-router-dom'



const Details = ({see}) => {

    const {id} =useParams()
    const dispatch = useDispatch()

    const cart =useSelector(state=>state.cart.cart)
    let item
   !see ? item=cart.find((el)=>el.id===+id) : item= products.find((el)=>el.id===+id) || topProducts.find((el)=>el.id===+id)
const navigat=useNavigate()
    useEffect(()=>{localStorage.setItem('cart',JSON.stringify(cart));},[cart])
    useEffect(()=>{  !item && setTimeout(()=>{navigat('/')},150) },[cart])



    const handleClick =(el)=>{
        dispatch(ADD(el))
        see=false
    }
    
  return (


    <div className='the_details'>
 {item&&  <h1>Product Details Page</h1>}
{
item?
<div className="the_details_content">
    <div className="left"><img src={item.cover} alt="" /></div>
    <div className="right">
        <h1>{item.title}</h1>
        <div className="stars">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <span>{`(1 customer review)`}</span>
        </div>

        <div className="the_price">
            <div>PRICE FOR UNIT:  ${item.price}</div>

           {!see && <div>TOTAL : ${item.price*item.qty}</div>} 
            <div>{item.author}</div>
        </div>


        {!see ? <div className="control">
             <div className="the_amount">
           <span onClick={()=>dispatch(ADD(item))}><AiOutlinePlus/></span> {item.qty} <span><AiOutlineMinus onClick={()=>dispatch(REMOVE(item))}/></span>

       
            </div>
            <button onClick={()=>dispatch(DELETE(item))}>Remove From Cart</button>

        </div> : <Link to={`/cart/${item.id}`}><button className='to_cart' onClick={()=>handleClick(item)}>ADD TO CART</button></Link>} 


        <div className="desc">
            <h3>product,s description</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptatum aperiam itaque voluptatibus rem, doloribus porro veniam nesciunt molestiae laudantium quis reiciendis placeat corrupti a. Blanditiis cupiditate nulla omnis deserunt, accusantium cumque recusandae commodi architecto ex sint. Quis, repellat. Facere?</p>
        </div>

        <div className="product_detail">
            <h3>product,s details</h3>
<div className="all">
<span> Lorem ipsum dolor sit amet consectetur.</span>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
</div>
           
        </div>
    </div>
</div>
  : <div className='deleted'> ITEM DOESN,T EXIST <br/> REDIRECTING....</div>}
    </div>
    
  )
}

export default Details