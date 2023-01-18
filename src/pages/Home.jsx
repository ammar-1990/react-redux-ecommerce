import './home.css'
import {BsSearch} from 'react-icons/bs'
import {hero} from '../assets/data/data'
import {products} from '../assets/data/data'
import Cards from '../components/Cards'
import Product from '../components/Product'
import { useState,useEffect } from 'react'
import {banner} from "../assets/data/data"
import { topProducts } from '../assets/data/data'
import { price } from '../assets/data/data'
import Price from '../components/Price'
import { customer } from '../assets/data/data'
import Testimonial from '../components/Testimonial'
import { blog } from '../assets/data/data'
import Blog from '../components/Blog'
import { useSelector } from 'react-redux'
import AnimPage from '../components/AnimPage'

const Home = () => {
  const cart =useSelector(state=>state.cart.cart)
  const [value ,setValue] = useState('')
  const [search,setSearch]=useState([])
  const [data,setData]=useState(topProducts)
  const [category,setCategory] =useState('all')
const categories = ['all', ...new Set(topProducts.map((product)=>product.category))]
const categorySet = (cat)=> {
  if (cat==='all')
  setData(topProducts)
  else {
    setData(topProducts.filter((product)=>product.category===cat))
  }

}

  const onSearch = ()=> {
    !value ? setSearch([])
    :setSearch(products.filter((product)=>product.title.toLowerCase().includes(value)))
    console.log(search)
  }


useEffect(()=>{localStorage.setItem('cart',JSON.stringify(cart))},[cart])

  return (
    <AnimPage>
    <div className='home'>
      <h1>over <span>6.500</span> curated design <br />
      resources , <span>graphics&websites</span> templates</h1>
      <p>heigh quality design themes for personal and cmmercial use contains 6k+ items in 100 categories </p>
<div className="the_search">
<div className="search">
        <span>All Caegories</span>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <span onClick={onSearch}><BsSearch /></span>
        </div>
{search.length> 0 && <>
  <div className="products">


  <div className="container s">
{products.map((el)=> <Product el={el} key={el.id} />)}
  </div>
</div></>}
      
</div>
    

      <p>examplex : mochup , psd ,theme design ,image...</p>
{!search.length>0 && <>
  <div className="cards">{hero.map((el)=><Cards key={el.id} el={el}/>)}</div>

<div className="products">
  <h3>trendings products</h3>
  <p>check the hottest designs of the week . these rising stars are worth your attention</p>

  <div className="container">
{products.map((el)=> <Product el={el} key={el.id} />)}
  </div>
</div>
</>}
     
      
      <div className="banner">
{banner.map((el)=> (
  <div  key={el.id} className="el">
    <img src={el.cover} alt="" />
    <div className="content">
      <h1>{el.title1}</h1>
      <h1>{el.title2}</h1>
      <p>{el.desc}</p>
      <button>Shop Now</button>
    </div>
  </div>
))}
      </div>
      <div className="top_products">
        <div className="menu">
          <div className="left">
            <h1>
              top selling products
            </h1>
            <p>meet our newbies! the latest templates uploaded to the market place</p>
            </div>
          <div className="right">
            {categories.map((cat,i)=>(<button key={i} onClick={()=>categorySet(cat)}>{cat}</button>))}
          </div>
        </div>
          <div className="container">
            {data.map((el)=><Product el={el} key={el.id} />)}
          </div>
      </div>




      <div className="prices">
<h1>choose the planes</h1>
<p>meet our newbies ! the latest templates uploaded to the market place</p>
<div className="container">
  {price.map((el)=>(<Price key={el.id} price={el}/>))}
</div>
      </div>


      <div className="testimonials">
        <h1>choose the planes</h1>
        <p>meet our newbies ! the latest templates uploaded to the market place</p>


        <div className="container">
{customer.map((el)=><Testimonial key={el.id}  data={el}/>)}
        </div>
      </div>

      <div className="blogs">
        <h1>latests blog posts</h1>
        <p>latest marketplace news, success stories and tutorials </p>

        <div className="container">
          {blog.map((el)=><Blog data={el} key={el.id} />)}
        </div>
      </div>
    </div>
    </AnimPage>
  )
}

export default Home