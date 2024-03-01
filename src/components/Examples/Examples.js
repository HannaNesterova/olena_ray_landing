import React from "react";
import Slider from "react-slick";
import styles from './Examples.module.css'; 
import { dataExamples } from './dataExamples';





function Examples() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    return (
        <div className={styles.container}>
                <h2>Приклади робіт учнів </h2>
            <div className={styles.sliderPhoto}>
            <Slider {...settings}>
                {dataExamples.map((slide, index) => (
                    <div key={index} className={styles.slide}>
                        <img
                            src={slide.img}
                            className={styles.image}
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}

export default Examples;
