import styles from "./categoryMiddle.module.css"
import Image from "next/image"
import icon from "../../../../img/expandmore2.svg"
import { useState } from "react"

export default function CategoryMiddle() {

    const [open, setOpen] = useState(true)
    const click = () => {
        setOpen(!open);
    }


    return (
        <>
            <div onClick={click} className={styles.flex}>
                <span className={styles.middleText}>Кошки</span>
                <Image className={styles.icon} src={icon} alt="" />
            </div>
            <div className={open ? styles.categoryLowFalse : styles.categoryLowTrue}>
                <div className={styles.lowText}><span className={styles.hover}>Кошачья еда</span></div>
                <div className={styles.lowText}><span className={styles.hover}>Кошачьи игрушки</span></div>
            </div>
        </>
    )
}