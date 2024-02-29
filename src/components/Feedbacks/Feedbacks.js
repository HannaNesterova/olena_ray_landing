import styles from './Feedbacks.module.css';

function Feedbacks({item}){
    return(
        <div className={styles.feedback_container}>
            <img src={item.feedback} alt="icon" width='250px'/>
        </div>

    )
}

export default Feedbacks;