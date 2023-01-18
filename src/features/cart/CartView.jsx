import './cartView.css'
import {FaRegTrashAlt} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {ADD,REMOVE, DELETE ,REMOVE_ALL} from './cartSlice'
import cartImg from '../../assets/images/cart.png'
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'



const CartView = () => {

    const cart =useSelector(state=>state.cart.cart)
    const dispatch=useDispatch()

  return (
    <div className='the_cart'>
        {cart.length===0? (<div className='no_cart'>
            <span>your cart is empty</span>
            <img src={cartImg} alt="" />
        </div>)
        : (  <><div className="details">
        <span>Photo</span>
        <span>Product Details</span>
    </div>
    <div className="container">
    {cart.map(el=>(<div key={el.id} className='cart_el'>
        <div className="content">
        <div className='left'><Link to={`/cart/${el.id}`}><img src={el.cover} alt="" /></Link></div>
        <div className="center">
             <span>{el.title}</span>
            <span>Price : $ {el.price}</span>
            <span className='the_qty'>Quantity :   
              <span className='qty'>
                <span><AiOutlineMinus onClick={()=>dispatch(REMOVE(el))}/></span>
                {el.qty} 
                <span><AiOutlinePlus  onClick={()=>dispatch(ADD(el))}/></span>
                 </span> 
                  </span>
            </div>
        <div className='right' onClick={()=>dispatch(DELETE(el))}>
           <FaRegTrashAlt />
        </div>
        </div>
      
         </div> ))}</div>
         <div className="end">
         <div className="total">
            total : ${cart.reduce((init,el)=>{
                return (init+ el.price*el.qty)},0)}</div>
                <div className="remove">
                  <button onClick={()=>dispatch(REMOVE_ALL())}>Remove All</button>
                </div>
         </div>
        </>) }
      
    </div>
  )
}

export default CartView