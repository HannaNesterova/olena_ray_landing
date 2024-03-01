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
                <p>Старт навчання: 12 / 04 / 2024</p>
            </div>
            <div className={styles.price_style}>
                <h2><span>$</span> 118</h2>
                <p>160 CAD</p>
            </div>
            <div className={styles.button_style}>
                <a href='https://buy.stripe.com/9AQcPa1g0bw0bBKdRb' target='_blank' rel="noreferrer">Замовити Курс</a>
            </div>


        </div>
    )
}

export default PayBlock;