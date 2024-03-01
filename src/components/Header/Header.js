import { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Header.module.css';
import coach from '../../img/imgs/Hero_2.png';
import mobile_hero from '../../img/imgs/hero_mob.png';

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
                        <h1> Фото Інтенсив<br />по створенню < br/> мобільних фотографій </h1>
                    </div>

                    <div className={styles.title}
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <p>Навчись фотографувати як в Pinterest,<br /> маючи лише телефон.
                        </p>
                    </div>
                    <div className={styles.buttons}
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                    <Link to="program" 
                        smooth={true} 
                        duration={500} 
                        className={styles.first_button}>Дізнатися більше
                    </Link>
                    <Link to="buy" 
                        smooth={true} 
                        duration={500} 
                        className={styles.sec_button}>Доєднатися
                    </Link>
                    </div>
                </div>
                <div className={styles.hero}>
                    <img src={coach} alt='coach' className={styles.hero_web}/>
                    <img src={mobile_hero} className={styles.mobile_hero} alt='coach' />
                </div>

            </div>
        </div>
    )
}

export default Header;