import Accordion from 'react-bootstrap/Accordion';
import styles from './Program.module.css';
import PayBlock from '../PayBlock/PayBlock';

function Program (){
    return(
        <div className={styles.program_container}>
            <div className={styles.container}>
                <h2>Програма Інтенсиву</h2>
            </div>
    <Accordion defaultActiveKey="0" flush className={styles.accordion}>
      <Accordion.Item eventKey="0" className={styles.item} >
        <Accordion.Header >Блок 0</Accordion.Header>
        <Accordion.Body >
            <ul>
                <li> Початок.</li>
                <li>Вступне слово.</li>
                <li>Лайфхаки для ефективного проходження Інтенсиву.</li>
                <li>Налаштування камери телефону.</li>
                <li>Реквізити для проходження навчання.</li>
                <li>Базові застосунки.</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className={styles.item}>
        <Accordion.Header>Блок 1: Основи мобільної фотографії.</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Що таке фото?</li>
                <li>Різновиди фото.</li>
                <li>План. Ракурс. Експозиція. Фокус.</li>
                <li>Композиція. </li>
                <li>Види освітлення.</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className={styles.item}>
        <Accordion.Header>Блок 2: Предметна фотографія</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Пошук і аналіз референсів.</li>
                <li>Відтворення референсів.</li>
                <li>Композиція. Світло. Ракурс. Перспектива. Flat lay.</li>
                <li>Ретуш: Базова корекція, заміна фону. Заміна декорацій. </li>
                <li>Робота з мобільним фотошопом.</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className={styles.item}>
        <Accordion.Header>Блок 3: Food photo. Смачні кадри</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Пошук і аналіз референсів.</li>
                <li>Макрозйомка.</li>
                <li>План, ракурс, освітлення.</li>
                <li>Ретуш: заміна кольору, заміна фону, точкова корекція. </li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className={styles.item}>
        <Accordion.Header>Блок 4: Лайфстайл</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>Пошук і аналіз референсів.</li>
                <li>Зйомка людей.</li>
                <li>Портрети і рух у кадрі.</li>
                <li>Ретуш: розмиття фону. Фотошоп обличчя і тіла. </li>
                <li>Позування. </li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className={styles.item}>
        <Accordion.Header>Блок 5: Пейзажна зйомка</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li> Пошук і аналіз референсів.</li>
                <li>Правила композиції.</li>
                <li>Створення перспективи у кадрі.</li>
                <li>Ретуш: базова і креативна. </li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className={styles.item}>
        <Accordion.Header>Блок 6: Креативи</Accordion.Header>
        <Accordion.Body>
            <ul>
                <li> Пошук і аналіз референсів.</li>
                <li>Генерація власних ідей.</li>
                <li>Подвійна експозиція.</li>
                <li>Вірусні фото в Інсті вони які? </li>
                <li>﻿Секрет створення якісних скріншотів з ваших відео
                    + додаткові розбори і фішки по мірі їх наявності і 
                    трендовості у майбутньому </li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        <PayBlock />
            </div>
    )
}

export default Program;