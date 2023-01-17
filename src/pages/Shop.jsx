import './Shop.css'
import Product from '../components/Product'
import {products} from '../assets/data/data'
import { topProducts } from '../assets/data/data'

const Shop = () => {
  return (
    <div className='shop'>
<h1>trendings products</h1>
  <p>check the hottest designs of the week . these rising stars are worth your attention</p>

  <div className="container">
{products.map((el)=> <Product el={el} key={el.id} />)}
  </div>


  <h1>
              top selling products
            </h1>
            <p>meet our newbies! the latest templates uploaded to the market place</p>


            <div className="container">
            {topProducts.map((el)=><Product el={el} key={el.id} />)}
          </div>
    </div>
  )
}

export default Shop