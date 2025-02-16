import { useEffect, useState } from "react"
import styles from "./category.module.css"
import axios from "axios"
import CategoryMiddle from "./categoryMiddle/categoryMiddle"
import { Toaster, toaster } from "@/components/Toaster/toaster"

export default function CategoryAdaptive({ setCatalogButtonIpad, setProductsFetch }) {

    const [category, setCategory] = useState([])
    const [name, setName] = useState()
    const [render, setRender] = useState(false)

    useEffect(() => {
        axios.get(`https://zoo.devsrv.ru/api/v1/shop/categories`).then((response) => {
            setCategory(response.data)
        }).catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        if (typeof name === 'string') {
            axios.get(`https://zoo.devsrv.ru/api/v1/shop/products?slugs[]=${name}`).then((response) => {
                setProductsFetch(response.data.data)
            }).catch((error) => console.error(error))
                .finally(() => toaster.create({
                    title: "Каталог обновлен",
                    type: "success",
                    duration: 3000,
                }))
        }
    }, [name])


    return (
        <div className={styles.wrapper}>

            <div className={styles.head}>
                <span onClick={() => {
                    setRender(!render)
                    axios.get(`https://zoo.devsrv.ru/api/v1/shop/products?page=1`).then((response) => {
                        setProductsFetch(response.data.data)
                    }).catch((error) => console.error(error))
                }} className={styles.reset}>Сбросить</span>
                <span onClick={() => setCatalogButtonIpad(true)}>{svg}</span>
            </div>

            <div className={styles.content}>
                <h1 className={styles.h1}>Категории</h1>
                <div className={styles.hidden}>
                    <div className={styles.overflow}>
                        {!close && category.map((item) => (
                            <CategoryMiddle key={item.id} name={item.title} child={item.child} setName={setName} />
                        ))}
                        {close && category.map((item) => (
                            <CategoryMiddle key={item.id} name={item.title} child={item.child} setName={setName} />
                        ))}
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

const svg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z" fill="#264794" />
</svg>

