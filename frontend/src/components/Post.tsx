import { type TypeBlog } from '../redux/typs';
import '../styles/post.scss';

type TypePostProps = {
  blog:TypeBlog
}

const Post = ({blog}:TypePostProps) => {
  return (
    <a href={`/blog/${blog.slug}`} className='post_container'>
    <div className="post_img_container">
        <img src={blog.image} alt={blog.title} />
    </div>
    <div className="post_content_container">
        <div className="post_content_category_time_container">
            <p>{blog.category}</p>
        </div>
        <h3>{blog.title}</h3>
        <p>{blog.summary.substring(0,200)}....</p>
        <p className='read_more'>Read More</p>
    </div>
</a>
  )
}

export default Post