import '../styles/post.scss';


const Post = () => {
  return (
    <div className='post_container'>
        <div className="post_img_container">
            <img src="https://i.postimg.cc/tgFqQf44/pexels-pixabay-67559-1.jpg" alt="" />
        </div>
        <div className="post_content_container">
            <div className="post_content_category_time_container">
                <p>thailand</p>
                <p>2 hours ago</p>
            </div>
            <h3>9 Best Ways to Celebrate Summer in Thailand</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, accusamus voluptate itaque dolore voluptates quibusdam perspiciatis optio sunt, odit velit dolores quis corrupti magni natus blanditiis labore! Molestias, voluptate ex.</p>
            <p className='read_more'>Read More</p>
        </div>
    </div>
  )
}

export default Post