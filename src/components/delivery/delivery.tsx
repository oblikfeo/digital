'use client'
import { useState } from "react"
import styles from "./delivery.module.css"

export default function Delivery() {

    const [pick, setPick] = useState(true)
    const [where, setWhere] = useState(true)

    return (
        <div className={styles.wrapper}>
            <h1>Доставка</h1>
            <div className={styles.way}>
                <div onClick={() => setPick(true)} className={pick ? styles.pick : styles.ways}>Доставка</div>
                <div onClick={() => setPick(false)} className={pick ? styles.ways : styles.pick}>Самовывоз</div>
            </div>
            <div className={styles.mainFlex}>
                <div onClick={() => setWhere(true)} className={styles.flex}>
                    {where ? redPick : whitePick}
                    <div>Омск, проспект Комарова, 21</div>
                </div>
                <div onClick={() => setWhere(false)} className={styles.flex}>
                    {where ? whitePick : redPick}
                    <div>Другой адрес</div>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.upInputs}>
                    <div>
                        <div className={styles.adress}>Подъезд</div>
                        <input className={styles.input} type="text" />
                    </div>
                    <div>
                        <div className={styles.adress}>Этаж</div>
                        <input className={styles.input} type="text" />
                    </div>
                    <div>
                        <div className={styles.adress}>Квартира</div>
                        <input className={styles.input} type="text" />
                    </div>
                </div>
                <div>
                    <input className={styles.inputBig} type="text" placeholder="Комментарий курьеру" />
                </div>
            </div>
            <div className={styles.who}>
                <h1>Получатель</h1>
                <div>
                    <div className={styles.name}>Иванов Иван Иванович</div>
                    <div className={styles.number}>+7 (913) 999 - 88 - 88</div>
                </div>
                <div className={styles.change}>Изменить</div>
            </div>
        </div>
    )
}

const redPick = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.2 5 5 7.2 5 10C5 12.8 7.2 15 10 15C12.8 15 15 12.8 15 10C15 7.2 12.8 5 10 5ZM10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="#C51A1A" />
</svg>

const whitePick = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="#ECF5FF" />
</svg>
