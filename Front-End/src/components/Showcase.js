import React from "react";
import Slider from "react-slick";

function Showcase(props) {
  
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div style={{overflow:"hidden", padding:0}}>
      <Slider {...settings}>
        <div className="slider-1">
            <div className="slide-content">
            
              <h2>Most Trusted Cab Taxi company <br /> in Yaounde</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                vero dolores, laboriosam et dolorem exercitationem soluta quidem
                possimus placeat eaque!
            </p>
             <button className="btn-default">Discover More</button>
            </div>
        </div>
        <div className="slider-2">
          <div className="slide-content">
              <h2>Pick Me <br /> Move Beyond Your Choice</h2>
              <p>
                Why I say old chap that is spiffing in my flat a blinding shot, Elizabeth blow off arse ummm I'm telling sloshed smashing what a plonker richard quaint brilliant tosser.!
            </p>
             <button className="btn-default">Discover More</button>
            </div>
        </div>
        {/* <div className="slider-3">
            <div className="slide-content">
              <h2>Book a Taxi Service</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                vero dolores, laboriosam et dolorem exercitationem soluta quidem
                possimus placeat eaque!
            </p>
            <button className="btn-default">Discover More</button>
            </div>
        </div> */}
      </Slider>
    </div>
  );
}

export default Showcase;
