import { dataFeedbacks } from "../../data/dataFeedbacks";
import Feedbacks from "./Feedbacks";
import styles from './Feedbacks.module.css'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ShowFeedback(){
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
            breakpoint: 970,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 690,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className={styles.main_container_feedbacks} id="feedbacks" >
        <div className={styles.container}>
            <h2>Відгуки кристувачів</h2>

                <Slider {...settings} className={styles.card_container}>
                    {dataFeedbacks.map(item => <Feedbacks item={item} key={item.id}/>)}
                </Slider>
            </div>
        </div>
    )
}

export default ShowFeedback;