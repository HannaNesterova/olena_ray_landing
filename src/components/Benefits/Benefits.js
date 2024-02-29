import styles from './Benefits.module.css'
import { dataBenefits } from '../../data/dataBenefits';
import icon7 from '../../img/icons/07.png';
import icon8 from '../../img/icons/08.png';
 
function Benefits(){
    return(
        <div className={styles.benefits_main}>
            <img src={icon7} alt='icon' className={styles.icon_top}/>
            <h2>У чому переваги Інтенсиву?</h2>
            <div className={styles.benefits_container}>
            {dataBenefits.map((item, index) => (
                <div key={index} className={styles.benefit_item}>
                    <img src={item.icon} alt='arrow' className={styles.icon}/>
                    <p>{item.text}</p>
                </div>
            ))}
            </div>
            <img src={icon8} alt='icon' className={styles.icon_bottom}/>
        </div>
    )
}

export default Benefits;