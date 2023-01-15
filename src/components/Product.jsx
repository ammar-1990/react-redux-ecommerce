import './Product.css'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {CiShoppingBasket} from 'react-icons/ci'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ADD } from '../features/cart/cartSlice'
const Product = ({el}) => {
    const [open,setOpen]=useState(false)


    const cart =useSelector(state=>state.cart.cart)
    const dispatch = useDispatch()
  return (
    <div className='product'>
        <div className="img"><img src={el.cover} alt="" />
        
        <div className="buttons">
            <button onClick={()=>setOpen(true)} ><BsSearch /></button>
            <button><AiOutlineHeart/></button>
            <button onClick={()=>dispatch(ADD(el))}><CiShoppingBasket/></button>
            </div></div>

        <div className="content">
            <p className="title">{el.title}</p>
            <p className="author">{el.author}</p>
            <span className="price"> price :{el.price} $</span>
        </div>

     { open &&  <div className="overlay">
        <div className="cover">  <img src={el.cover} alt="" />
        <button className="close" onClick={()=>setOpen(false)}><AiFillCloseCircle className='close_icon'/></button>
        </div>
          
        </div>}
    </div>
  )
}

export default Product