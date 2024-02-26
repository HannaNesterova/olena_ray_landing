import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Header.module.css';
import coach from '../../img/hero/None.jpeg';

function Header(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className={styles.main_header}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div  data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                      className={styles.pretitle}>
                        <h1>HIGH QUALITY <br /> COURSES </h1>
                    </div>

                    <div className={styles.title}
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <p>Every day brings with
                         it a fresh set of learning
                         possibilities.</p>
                    </div>
                    <div className={styles.buttons}
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <a href='#'className={styles.first_button} >Дізнатися більше</a>
                        <a href='#' className={styles.sec_button}>Доєднатися</a>
                    </div>
                </div>
                <div className={styles.hero}>
                    <img src={coach} alt='coach' />
                </div>

            </div>
        </div>
    )
}

export default Header;