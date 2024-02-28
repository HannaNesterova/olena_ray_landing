import styles from './Feedbacks.module.css'

function Feedbacks({item}){
    return(
        <div className={styles.feedback_container}>
            <img src="" alt="picture" />
            <h4>{item.id}</h4>
            <h4>{item.name}</h4>
            <p>{item.text}</p>
        </div>

    )
}

export default Feedbacks;