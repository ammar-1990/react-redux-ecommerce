import './BlogPage.css'
import { blog } from '../assets/data/data'
import Blog from '../components/Blog'
import AnimPage from '../components/AnimPage'

const BlogPage = () => {
  return (

    <AnimPage>
    <div className='blog_page'>
<h1>latests blog posts</h1>
        <p>latest marketplace news, success stories and tutorials </p>

        <div className="container">
          {blog.map((el)=><Blog data={el} key={el.id} />)}
        </div>

      
    </div>
    </AnimPage>
  )
}

export default BlogPage