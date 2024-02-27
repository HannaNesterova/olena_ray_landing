import styles from './AboutAuthor.module.css'
import boom from '../../img/imgs/boom1.png'

function AboutAuthor () {
    return(
        <div className={styles.container}>
                <h2>Про Автора</h2>
            <div className={styles.about_main}>
                <div className={styles.about_img}>
                    <img src='' alt='author' />
                </div>
                <div className={styles.about_text}>
                    <div className={styles.about_text_title}>
                        <p><span>@o.lena.ray - </span>мобільний відеограф, наставник, блогер.<br />
                        За рік розвила блог з нуля </p>
                        <span>до 23500 підписників і заробила 110 тис $  <img src={boom} alt='boom'  className={styles.boom}/> </span>
                    </div>
                    <div className={styles.about_text_pretitle}>
                        <p>Навчає мистецтву створення мобільного відео і фотографії.<br />
                         Проводить майстеркласи, консультує, знімає на замовлення.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAuthor;