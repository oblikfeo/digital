import { useState } from "react"
import styles from "./category.module.css"
import CategoryMain from "./categoryMain/categoryMain"

export default function CategoryAdaptive({ setCatalogButton }) {

    const [close, setClose] = useState(false)

    return (
        <div className={styles.wrapper}>

            <div className={styles.head}>
                <span onClick={() => setClose(!close)} className={styles.reset}>Сбросить</span>
            </div>

            <div className={styles.content}>
                <h1 className={styles.h1}>Категории</h1>
                <div className={styles.hidden}>
                    {close && <div className={styles.overflow}>
                        <CategoryMain />
                        <CategoryMain />
                        <CategoryMain />
                    </div>}
                    {!close && <div className={styles.overflow}>
                        <CategoryMain />
                        <CategoryMain />
                        <CategoryMain />
                    </div>}
                </div>
                <button onClick={() => setCatalogButton(true)} className={styles.confirmBut}>Применить</button>
            </div>
        </div>
    )
}
