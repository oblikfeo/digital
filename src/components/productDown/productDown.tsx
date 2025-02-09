import styles from "./productDown.module.css"
import Paragraph from "../UI kit/paragraph/paragraph"

export default function ProductDown({ fetch }) {

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.h2}>Основные характеристики</h2>
            <div className={styles.flex}>

                <Paragraph text={"Форма выпуска:"} props={fetch?.form} />
                <Paragraph text={"Возраст животного:"} props={fetch?.forage} />
            </div>
            <h2 className={styles.h2}>Дополнительные характеристики</h2>
            <div className={styles.flex}>

                <Paragraph text={"Особенности:"} props={fetch?.peculiarities} />
                <Paragraph text={"Возраст животного:"} props={fetch?.age} />
                <Paragraph text={"Код товара:"} props={fetch?.productcode} />
                <Paragraph text={"Назначение:"} props={fetch?.purpose} />
                <Paragraph text={"Применение:"} props={fetch?.application} />
                <Paragraph text={"Объем, в миллилитрах:"} props={fetch?.volume} />
            </div>
            <h2 className={styles.h2}>Состав</h2>
            <div className={styles.flex}>
                <span>{fetch?.text}</span>
            </div>
        </div>
    )
}