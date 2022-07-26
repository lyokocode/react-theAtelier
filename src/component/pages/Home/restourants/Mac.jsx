import React from 'react'
import Slider from "react-slick";


const Mac = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        cssEase: "linear"
    }

    return (
        <>
            <Slider {...settings} className="slider">
                <figure>
                    <img src='images/beauty.jpg' />
                </figure>
                <figure>
                    <img src='images/over.jpg' />
                </figure>
                <figure>
                    <img src='images/ception.jpg' />
                </figure>
                <figure>
                    <img src='images/cheesecake.jpg' />
                </figure>
                <figure>
                    <img src='images/land.jpg' />
                </figure>
                <figure>
                    <img src='images/leon.jpg' />
                </figure>
                <figure>
                    <img src='images/brownie.jpg' />
                </figure>
            </Slider>
        </>
    )
}

export default Mac