import styles from "./categoryMain.module.css"
import Image from "next/image"
import icon from "../../../../img/expandmore2.svg"
import CategoryMiddle from "../categoryMiddle/categoryMiddle"
import { useState } from "react"

export default function CategoryMain() {

    const [show, setShow] = useState(false)
    const shows = () => {
        setShow(!show);
    }

    return (
        <div className={styles.categoryMiddle}>
            <div className={styles.categoryMain}>
                <div onClick={shows} className={styles.flex}>
                    <span className={styles.MainText}>Домашние животные</span>
                    <Image className={styles.icon} src={icon} alt="" />
                </div>
                <div className={show ? styles.showTrue : styles.showFalse}>
                    <CategoryMiddle />
                    <CategoryMiddle />
                    <CategoryMiddle />
                </div>
            </div>
        </div>
    )
}