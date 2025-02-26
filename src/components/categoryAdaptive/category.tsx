import { useEffect, useState } from "react"
import styles from "./category.module.css"
import CategoryMiddle from "./categoryMiddle/categoryMiddle"
import { Toaster } from "@/components/Toaster/toaster"
import { axiosInstance } from "@/api/__API__"

export default function CategoryAdaptive({ setCatalogButtonIpad, setSlug, setSortBy }) {

    const [category, setCategory] = useState([])
    const [render, setRender] = useState(false)

    useEffect(() => {
        axiosInstance.get(`/api/v1/shop/categories`).then((response) => {
            setCategory(response.data)
        }).catch((error) => console.error(error))
    }, [])

    return (
        <div className={styles.wrapper}>

            <div className={styles.head}>
                <span onClick={() => {
                    setRender(!render)
                    setSlug()
                    setSortBy()
                }} className={styles.reset}>Сбросить</span>
                <span onClick={() => setCatalogButtonIpad(true)}>{svg}</span>
            </div>

            <div className={styles.content}>
                <h1 className={styles.h1}>Категории</h1>
                <div className={styles.hidden}>
                    <div className={styles.overflow}>
                        {!close && category.map((item) => (
                            <CategoryMiddle key={item.id} name={item.title} child={item.child} setSlug={setSlug} />
                        ))}
                        {close && category.map((item) => (
                            <CategoryMiddle key={item.id} name={item.title} child={item.child} setSlug={setSlug} />
                        ))}
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

const svg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z" fill="#264794" />
</svg>

