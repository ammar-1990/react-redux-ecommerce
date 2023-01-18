import './Product.css'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {CiShoppingBasket} from 'react-icons/ci'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ADD ,DELETE} from '../features/cart/cartSlice'
import {AiOutlineEye} from 'react-icons/ai'


const Product = ({el}) => {
    const [open,setOpen]=useState(false)


    const cart =useSelector(state=>state.cart.cart)
    const item =cart.find((item)=> item.id===el.id)
    const dispatch = useDispatch()
    const handleClick =()=>{
console.log(item,el.id)
      !item ? dispatch(ADD(el)) : dispatch(DELETE(el))
    }
  return (
    <div className='product'>
        <div className="img"><img src={el.cover} alt="" />
        
        <div className="buttons">
            <button onClick={()=>setOpen(true)} ><BsSearch /></button>
            <Link to={`/products/${el.id}`}><button className='see'><AiOutlineEye/></button></Link>
            <button style={{backgroundColor:item &&'orangered',color :item && 'white'}} onClick={handleClick}><CiShoppingBasket/></button>
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