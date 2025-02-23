import styles from "./nowOrder.module.css"
import Image from "next/image"
import img from '/img/product.png'
import { useState } from "react"

export default function NowOrder() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={styles.wrapperLoading}>
                <div className={styles.order}>
                    <div onClick={() => setOpen(!open)} className={styles.box}>
                        <div className={styles.left}>
                            <h1>Заказ № 001 от 1.01.2001</h1>
                            <div className={styles.dotes}></div>
                            {open ? up : down}
                        </div>
                        <button className={styles.repeat}>Повторить заказ</button>
                    </div>
                    {open && <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.flex}>
                                <Image src={img} alt="" height={48} width={48} />
                                <div className={styles.discription}>Суспензия для собак средних и крупных пород Pchelodar Ветспокоин 75 мл</div>
                            </div>
                            <div className={styles.prices}>
                                <h2>6 184 ₽</h2>
                                <h3>773 ₽ x 8</h3>
                                <h4>873 ₽</h4>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.flex}>
                                <Image src={img} alt="" height={48} width={48} />
                                <div className={styles.discription}>Суспензия для собак средних и крупных пород Pchelodar Ветспокоин 75 мл</div>
                            </div>
                            <div className={styles.prices}>
                                <h2>6 184 ₽</h2>
                                <h3>773 ₽ x 8</h3>
                                <h4>873 ₽</h4>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.flex}>
                                <Image src={img} alt="" height={48} width={48} />
                                <div className={styles.discription}>Суспензия для собак средних и крупных пород Pchelodar Ветспокоин 75 мл</div>
                            </div>
                            <div className={styles.prices}>
                                <h2>6 184 ₽</h2>
                                <h3>773 ₽ x 8</h3>
                                <h4>873 ₽</h4>
                            </div>
                        </div>
                    </div>}
                    {open && <div className={styles.summ}>
                        <div className={styles.text}>Общая сумма заказа:</div>
                        <div className={styles.allPrice}>18 552 ₽</div>
                    </div>}
                </div>
            </div>
        </>

    )
}

const down = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6 8.6001L12 13.2001L7.4 8.6001L6 10.0001L12 16.0001L18 10.0001L16.6 8.6001Z" fill="#C51A1A" />
</svg>

const up = <svg className={styles.revert} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6 8.6001L12 13.2001L7.4 8.6001L6 10.0001L12 16.0001L18 10.0001L16.6 8.6001Z" fill="#C51A1A" />
</svg>