import styles from '../Footer/Footer.module.css';
import { SlSocialInstagram } from "react-icons/sl";
import { SiTelegram } from "react-icons/si";


function Footer(){
    return(
        <div className={styles.footer_container}>
            <div className={styles.footer_box}>
                <a href='https://www.instagram.com/o.lena.ray/?igsh=MXg5ZXgwaTc4cDhtOA%3D%3D' target='_blank' rel="noreferrer"><SlSocialInstagram /></a>
                <a href='https://t.me/o_lena_ray' target='_blank' rel="noreferrer"><SiTelegram /></a>
            </div>
            <div className={styles.developing}>
                <a href='https://www.instagram.com/hanna_nesterova' target='_blank' rel="noreferrer"> ⓒ made by Nesterova Hanna </a>
            </div>
        </div>
    )
}
export default Footer;