import '../../styles/hero.scss';

const Hero = () => {
  return (
    <div className="hero_section_main_container">
        <div className="hero_section_text_content_container">
            <h1>Your Destination for Creativity, Knowledge, and Growth</h1>
            <p>Discover insight, tips, and trends to fuel your creativity and success.</p>
        </div>
        <div className="hero_image_container">
            <img src="/assets/images/hero_banner_img.png" alt="Travelvago" />
        </div>   
    </div>
  )
}

export default Hero