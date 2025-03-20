import { useEffect, useRef, useState } from "react"
import styles from "./category.module.css"
import CategoryMiddle from "./categoryMiddle/categoryMiddle"
import { axiosInstance } from "@/api/__API__"

export default function Category({ setSlug }) {

    const [category, setCategory] = useState([])
    const [render, setRender] = useState(false)

    const overflowRef = useRef(null)

    useEffect(() => {
        axiosInstance.get(`/api/v1/shop/categories`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("USER_TOKEN")}` }
        }).then((response) => {
            setCategory(response.data)
        }).catch((error) => console.error(error))
    }, [])

    const handleReset = () => {
        setRender(!render)
        setSlug()
        overflowRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.head}>
                <span onClick={handleReset}
                    className={styles.reset}>Сбросить</span>
            </div>

            <div className={styles.content}>
                <h1 className={styles.h1}>Категории</h1>
                <div className={styles.hidden}>
                    <div ref={overflowRef} className={styles.overflow}>
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
