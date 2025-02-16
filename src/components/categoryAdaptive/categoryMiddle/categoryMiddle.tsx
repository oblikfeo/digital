import styles from "./categoryMiddle.module.css"
import Image from "next/image"
import icon from "../../../../img/expandmore2.svg"
import { useState } from "react"
import CategoryMiniAdaptive from "../categoryMain/categoryMain"

export default function CategoryMiddle({ name, child, setName }) {

    const [open, setOpen] = useState(true)
    const click = () => {
        setOpen(!open);
    }


    return (
        <>
            <div onClick={click} className={styles.flex}>
                <span className={styles.middleText}>{name}</span>
                <Image className={open ? styles.icon : styles.none} src={icon} alt="" />
            </div>
            <div className={open ? styles.categoryLowFalse : styles.categoryLowTrue}>
                <div className={styles.lowText}>
                    {child.map((item) => (
                        <CategoryMiniAdaptive key={item.id} item={item} setName={setName} />
                    ))}
                </div>
            </div>
        </>
    )
}