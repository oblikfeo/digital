import { useEffect, useState } from "react"
import styles from "./category.module.css"
import CategoryMain from "./categoryMain/categoryMain"
import axios from "axios"

export default function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get(`http://147.45.157.15:8000/api/v1/shop/categories`).then((response) => {
            setCategory(response.data)
        }).catch((error) => console.error(error))
    }, [])

    const [close, setClose] = useState(false)

    return (
        <div className={styles.wrapper}>

            <div className={styles.head}>
                <span onClick={() => setClose(!close)} className={styles.reset}>Сбросить</span>
            </div>

            <div className={styles.content}>
                <h1 className={styles.h1}>Категории</h1>
                <div className={styles.hidden}>
                    <div className={styles.overflow}>
                        {!close && category.map((item) => (
                            <CategoryMain key={item.id} cata={item.title} />
                        ))}
                        {close && category.map((item) => (
                            <CategoryMain key={item.id} cata={item.title} />
                        ))}
                    </div>

                </div>
                <button className={styles.confirmBut}>Применить</button>
            </div>
        </div>
    )
}
