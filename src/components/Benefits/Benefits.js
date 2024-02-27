import styles from './Benefits.module.css'
import { dataBenefits } from '../../data/dataBenefits';
import arrow from '../../img/imgs/check.png';
 
function Benefits(){
    return(
        <div className={styles.benefits_main}>
            <h2>У чому переваги Інтенсиву?</h2>
            <div className={styles.benefits_container}>
            {dataBenefits.map((item, index) => (
                <div key={index} className={styles.benefit_item}>
                    <img src={arrow} alt='arrow' className={styles.arrow}/>
                    <h4>{item.text}</h4>
                </div>
            ))}
            </div>

        </div>
    )
}

export default Benefits;