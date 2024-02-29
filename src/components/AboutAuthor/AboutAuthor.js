import styles from './AboutAuthor.module.css';
import hero from '../../img/imgs/hero_3.png'

function AboutAuthor () {
    return(
        <div className={styles.container}>
                <h2>Про Автора</h2>
            <div className={styles.about_main}>
                <div className={styles.about_img}>
                    <img src={hero} alt='author' className={styles.hero}/>
                </div>
                <div className={styles.about_text}>
                    <div className={styles.about_text_title}>
                        <p><span>@o.lena.ray -</span>мобільний відеограф, наставник, блогер.
                        За рік розвила блог з нуля
                        до 23500 підписників і заробила 110 тис $.</p>
                        <p>Навчає мистецтву створення мобільного відео і фотографії.
                         Проводить майстеркласи, консультує, знімає на замовлення.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAuthor;