import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Header.module.css';
import coach from '../../img/hero/None.jpeg';
import smallImage from '../../img/imgs/phone1.png';

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
                        <h1> "Фото Інтенсив"<br />по створенню мобільних фотографій </h1>
                    </div>

                    <div className={styles.title}
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <p>Навчись фотографувати як в Pinterest,<br /> маючи лише телефон.
                        <img src={smallImage} alt="Small Image" className={styles.small_image} />
                        </p>
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