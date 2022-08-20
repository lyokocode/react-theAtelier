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
                    <img src='images/beauty.jpg' alt='macGuffin' />
                </figure>
                <figure>
                    <img src='images/over.jpg' alt='macGuffin' />
                </figure>
                <figure>
                    <img src='images/ception.jpg' alt='macGuffin' />
                </figure>
                <figure>
                    <img src='images/cheesecake.jpg' alt='macGuffin' />
                </figure>
                <figure>
                    <img src='images/land.jpg' alt='macGuffin' />
                </figure>
                <figure>
                    <img src='images/leon.jpg' alt='macGuffin' />
                </figure>
                <figure>
                    <img src='images/brownie.jpg' alt='macGuffin' />
                </figure>
            </Slider>
        </>
    )
}

export default Mac