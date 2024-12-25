import { useState } from 'react'
import styles from './customSelect.module.css'

export default function CustomSelect() {

    const [active, setActive] = useState(false)
    const open = () => {
        setActive(!active);
    }

    return (
        <div onClick={open} className={styles.selectContainer}>
            <div className={styles.select}>
                <span >По умолчанию</span>
                <svg className={active ? styles.icon : styles.none} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.6 0.599976L6 5.19998L1.4 0.599976L0 1.99998L6 7.99998L12 1.99998L10.6 0.599976Z" fill="#C51A1A" />
                </svg>
            </div>
            <div
                className={active ? styles.selectOptionsTrue : styles.selectOptionsFalse}>
                <span className={styles.option1}>
                    <div className={styles.border}>
                        <span className={styles.hover}>По цене</span>
                    </div>
                </span>
                <span className={styles.option2}>
                    <div className={styles.border}>
                        <span className={styles.hover}>По алфавиту</span>
                    </div>
                </span>
            </div>
        </div>
    )
}