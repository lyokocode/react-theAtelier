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
                    <img src='images/asc1.jpg' alt='americanSandwichClup' />
                </figure>
                <figure>
                    <img src='images/asc2.jpg' alt='americanSandwichClup' />
                </figure>
                <figure>
                    <img src='images/asc3.jpg' alt='americanSandwichClup' />
                </figure>

            </Slider>
        </>
    )
}

export default AmericanSandwich