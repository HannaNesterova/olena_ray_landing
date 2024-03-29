import styles from './PayBlock.module.css'
import icon from '../../img/icons/pay.svg'

function PayBlock(){
    return(
        <div className={styles.container}> 
            <div className={styles.icon_style}>
                <img src={icon} alt='icon' />
            </div>
            <div className={styles.text_style}>
                <h2>Вартість Програми</h2>
                <p>Старт навчання: <br />відразу після оплати</p>
            </div>
            <div className={styles.price_style}>
                <h2><span>CAD</span> 160</h2>
                <p>$ 118</p>
            </div>
            <div className={styles.buttons}>
            <div className={styles.button_style}>
                    <a href='https://buy.stripe.com/9AQcPa1g0bw0bBKdRb' target='_blank' rel="noreferrer">Замовити Курс</a>
                </div>
                <div className={styles.credit}>
                    <a href='https://app.paythen.co/company/videotouch/plan/wlp6j1dv1b' target='_blank' rel="noreferrer">Придбати у розсрочку </a>
                </div>

            </div>


        </div>
    )
}

export default PayBlock;