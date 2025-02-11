import { useState } from "react"
import styles from "./categoryMini.module.css"

export default function CategoryMini({ item, setName }) {

    const [pick, setPick] = useState(false)

    const click = () => {
        setPick(!pick)
        setName(item.slug)
    }

    return (
        <>
            <span key={item.id} className={!pick ? styles.hover : styles.active}>
                <span onClick={click} key={item.id}>
                    {item.title}
                </span>
            </span>
        </>
    )
}