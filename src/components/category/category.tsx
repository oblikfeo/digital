import styles from "./category.module.css"
import CategoryMain from "./categoryMain/categoryMain"

export default function Category() {

    return (
        <div className={styles.wrapper}>

            <div className={styles.head}>
                <span className={styles.reset}>Сбросить</span>
            </div>

            <div className={styles.content}>
                <h1 className={styles.h1}>Категории</h1>
                <div className={styles.hidden}>
                    <div className={styles.overflow}>
                        <CategoryMain />
                        <CategoryMain />
                        <CategoryMain />
                    </div>
                </div>
                <button className={styles.confirmBut}>Применить</button>
            </div>
        </div>
    )
}
