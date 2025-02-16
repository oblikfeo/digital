import { useEffect, useState } from "react"
import styles from "./category.module.css"
import axios from "axios"
import CategoryMiddle from "./categoryMiddle/categoryMiddle"
import { Toaster, toaster } from "@/components/Toaster/toaster"

export default function Category({ setProductsFetch }) {

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
            </div>

            <div className={styles.content}>
                <h1 className={styles.h1}>Категории</h1>
                <div className={styles.hidden}>
                    <div className={styles.overflow}>
                        {render && category.map((item) => (
                            <CategoryMiddle key={item.id} name={item.title} child={item.child} setName={setName} />
                        ))}
                        {!render && category.map((item) => (
                            <CategoryMiddle key={item.id} name={item.title} child={item.child} setName={setName} />
                        ))}
                    </div>

                </div>
            </div>
            <Toaster />
        </div>
    )
}
