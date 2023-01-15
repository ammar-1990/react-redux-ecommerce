import './Blog.css'

const Blog = ({data}) => {
  return (
    <div className='blog'>
        
            <img src={data.cover} alt="" />
            <div className="content">
                <button>{data.category}</button>
                <p>POST DATE : <span className="date">{data.date}</span></p>
                <p>{data.title}</p>
            </div>
        
    </div>
  )
}

export default Blog