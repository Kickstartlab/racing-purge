import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from '../assets/slide_1.png';
import slide_2 from '../assets/slide_2.png';
import slide_3 from '../assets/slide_3.png';
import slide from '../assets/slide.png';

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        cssEase: "linear",
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    }

    const slider = React.useRef(null);

    return (
        <div className="">

            <Slider ref={slider} {...settings}>


                <div className="card-wrapper col-span-1">
                    <img src={slide_1} alt="" className='w-full' />
                </div>

                <div className="card-wrapper col-span-1">
                    <img src={slide_2} alt="" className='w-full' />
                </div>

                <div className="card-wrapper col-span-1">
                    <img src={slide_3} alt="" className='w-full' />
                    <img src={slide} alt="" className='absolute -mt-64' />
                </div>

                <div className="card-wrapper col-span-1">
                    <img src={slide_2} alt="" className='w-full' />
                </div>

                <div className="card-wrapper col-span-1">
                    <img src={slide_3} alt="" className='w-full' />
                    <img src={slide} alt="" className='absolute -mt-64' />
                </div>

            </Slider>

        </div>

    )


}

export default ImageSlider 