import { useEffect, useState } from "react"
import styles from "./category.module.css"
import axios from "axios"
import CategoryMiddle from "./categoryMiddle/categoryMiddle"

export default function Category({ setSlug }) {

    const [category, setCategory] = useState([])
    const [render, setRender] = useState(false)

    useEffect(() => {
        axios.get(`https://zoo.devsrv.ru/api/v1/shop/categories`).then((response) => {
            setCategory(response.data)
        }).catch((error) => console.error(error))
    }, [])

    return (
        <div className={styles.wrapper}>

            <div className={styles.head}>
                <span onClick={() => {
                    setRender(!render)
                    setSlug()
                }}
                    className={styles.reset}>Сбросить</span>
            </div>

            <div className={styles.content}>
                <h1 className={styles.h1}>Категории</h1>
                <div className={styles.hidden}>
                    <div className={styles.overflow}>
                        {render && category.map((item) => (
                            <CategoryMiddle key={item.id} name={item.title} child={item.child} setSlug={setSlug} />
                        ))}
                        {!render && category.map((item) => (
                            <CategoryMiddle key={item.id} name={item.title} child={item.child} setSlug={setSlug} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
