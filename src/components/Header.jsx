import './header.css'
import logo from '../assets/images/logo.svg'
import { navlist } from '../assets/data/data'
import { Link } from 'react-router-dom'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState } from 'react'
import {TfiClose} from 'react-icons/tfi'
import { useSelector } from 'react-redux'
import CartView from '../features/cart/CartView'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'



const Header = () => {


    const cart =useSelector(state=>state.cart.cart)
    const [open ,setOpen]=useState(false)
    const [openCart,setOpenCart]=useState(false)
const location=useLocation()
useEffect(()=> {setOpenCart(false);setOpen(false)},[location])
  
  return (
    <header>
        
        <nav>
       {openCart&& <CartView />} 
          {!open&&  <div className="hamburger" onClick={()=>setOpen(val=>!val)}>
                <RxHamburgerMenu/>
            </div >}
            <div className="left" style={{marginLeft:open&& '50%'}}>
                {open? <button className='close' onClick={()=>setOpen(val=>!val)}><TfiClose/></button> : <img src={logo} alt="" />}
               </div>
            <div className={`center  ${open && 'show'}`}>
                {
                    navlist.map(((nav,i)=>
                        (
                            <Link to={nav.path} key={i}><span>{nav.text}</span></Link>
                        )))
                }
            </div>
            <div className="right">
                <div className="input">
                    <input type="text" placeholder='Search Products...' />
                    <BiSearchAlt2  className='icon'/>
                </div> 
                <span><AiOutlineHeart className='icon'/></span>
                <span><AiOutlineUser className='icon'/></span>

                <button onClick={()=>setOpenCart(val=>!val)} className='cart'> <BsCart/> My Cart ({cart.reduce((init,el)=>{return(init + el.qty)},0)}) </button>
            </div>
        </nav>
    </header>
  )
}

export default Header