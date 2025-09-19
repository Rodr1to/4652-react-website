import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainBanner.css'
import slide1 from './../assets/images/banner1.jpg'
import slide2 from './../assets/images/banner2.jpg'
import slide3 from './../assets/images/banner3.jpg'

const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img src={slide1} alt="" />
          <div className="banner-caption">
            <h5>Nuevos Proyectos</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A qui dolorum aperiam perspiciatis rerum nisi eum debitis assumenda laborum et? Facere explicabo illum maxime.</p>
          </div>
        </div>
        <div>
          <img src={slide2} alt="" />
        </div>
        <div>
          <img src={slide3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default MainBanner