import '../../styles/featuredPost.scss';

const FeaturedPost = () => {
  return (
    <div className="featured_post_container">
        <div className="featured_post_wrapper_one">
            <div className="featured_post">
                <div className="feature_post_img">
                    <img src="https://i.postimg.cc/tgFqQf44/pexels-pixabay-67559-1.jpg" alt="" />
                </div>
                <div className="featured_post_content">
                    <div className="featured_post_time_category">
                        <p>thailand</p>
                        <p>1 hours ago</p>
                    </div>
                    <h1>9 Best Ways to Celebrate Summer in Thailand</h1>
                </div>
            </div>
        </div>
        <div className="featured_post_wrapper_two">
            <div className="featured_post">
                <div className="feature_post_img">
                    <img src="https://i.postimg.cc/W4B71NYb/pexels-pixabay-208444.jpg" alt="" />
                </div>
                <div className="featured_post_content">
                    <div className="featured_post_time_category">
                        <p>thailand</p>
                        <p>1 hours ago</p>
                    </div>
                    <h1>9 Best Ways to Celebrate Summer in Thailand</h1>
                </div>
            </div>

            <div className="featured_post">
                <div className="feature_post_img">
                    <img src="https://i.postimg.cc/W4B71NYb/pexels-pixabay-208444.jpg" alt="" />
                </div>
                <div className="featured_post_content">
                    <div className="featured_post_time_category">
                        <p>thailand</p>
                        <p>1 hours ago</p>
                    </div>
                    <h1>9 Best Ways to Celebrate Summer in Thailand</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPost