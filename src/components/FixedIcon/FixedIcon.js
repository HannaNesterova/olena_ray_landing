import { useState } from "react";
import styles from './FixedIcon.module.css'
import { MdOutlineContactSupport } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";


function FixedIcon (){



    const [iconOne, setIconTwo] = useState(true);

    const handleClick =() => {
        setIconTwo(iconOne => !iconOne)
    }

    return (
        <div className={styles.fixed_container_icon} 
        onClick={handleClick}>

            {iconOne ? (

            <button rel="noreferrer">
                <MdOutlineContactSupport />
            </button>) : (
            <div>
                <button rel="noreferrer">
                <MdOutlineContactSupport />
            </button>
            
            <a href="https://t.me/o_lena_ray" rel="noreferrer" target="_blank"> 
                <PiTelegramLogoLight />
            </a>
            </div>
            )}


        </div>
    )
}

export default FixedIcon;