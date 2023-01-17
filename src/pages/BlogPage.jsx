import './BlogPage.css'
import { blog } from '../assets/data/data'
import Blog from '../components/Blog'

const BlogPage = () => {
  return (
    <div className='blog_page'>
<h1>latests blog posts</h1>
        <p>latest marketplace news, success stories and tutorials </p>

        <div className="container">
          {blog.map((el)=><Blog data={el} key={el.id} />)}
        </div>

      
    </div>
  )
}

export default BlogPage