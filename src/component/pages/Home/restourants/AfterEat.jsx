import React from 'react'
import Slider from "react-slick";


const AmericanSandwich = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
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
                    <img src='images/after1.jpg' alt='afterEat' />
                </figure>
                <figure>
                    <img src='images/after2.jpg' alt='afterEat' />
                </figure>
                <figure>
                    <img src='images/after3.jpg' alt='afterEat' />
                </figure>

            </Slider>
        </>
    )
}

export default AmericanSandwich