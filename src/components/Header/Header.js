import styles from './Header.module.css';
import coach from '../../img/hero/None.jpeg';

function Header(){
    return(
        <div className={styles.main_header}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.pretitle}>
                        <h1>HIGH QUALITY <br /> COURSES </h1>
                    </div>

                    <div className={styles.title}>
                        <p>Every day brings with
                         it a fresh set of learning
                         possibilities.</p>
                    </div>
                    <div className={styles.buttons}>
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