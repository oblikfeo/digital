import styles from "./productDown.module.css"
import Paragraph from "../UI kit/paragraph/paragraph"

export default function ProductDown({ targetItem }) {

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.h2}>Основные характеристики</h2>
            <div className={styles.flex}>

                <Paragraph text={"Форма выпуска:"} props={targetItem?.form} />
                <Paragraph text={"Возраст животного:"} props={targetItem?.forage} />
            </div>
            <h2 className={styles.h2}>Дополнительные характеристики</h2>
            <div className={styles.flex}>

                <Paragraph text={"Особенности:"} props={targetItem?.peculiarities} />
                <Paragraph text={"Возраст животного:"} props={targetItem?.age} />
                <Paragraph text={"Особенности:"} props={targetItem?.productcode} />
                <Paragraph text={"Назначение::"} props={targetItem?.purpose} />
                <Paragraph text={"Применение:"} props={targetItem?.application} />
                <Paragraph text={"Объем, в миллилитрах:"} props={targetItem?.volume} />
            </div>
            <h2 className={styles.h2}>Состав</h2>
            <div className={styles.flex}>
                <span>{targetItem?.compound}</span>
            </div>
        </div>
    )
}