import styles from "./nowOrder.module.css"
import Image from "next/image"
import girlLoading from "../../../img/girlLoading.png"
import arrowLoading from "../../../img/arrowLoading.png"
import girlFinish from "../../../img/girlFinish.png"
import arrrowFinish from "../../../img/arrowFinish.png"
import img from '/img/product.png'

export default function NowOrder() {

    return (
        <>
            <div className={styles.wrapperLoading}>
                <div className={styles.order}>
                    <h1>Заказ № 001 от 1.01.2001</h1>
                    <div className={styles.list}>
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
                    </div>
                    <div className={styles.summ}>
                        <div className={styles.text}>Общая сумма заказа:</div>
                        <div className={styles.allPrice}>18 552 ₽</div>
                    </div>
                </div>
                <Image className={styles.girlLoading} src={girlLoading} alt="" />
                <Image className={styles.arrowLoading} src={arrowLoading} alt="" />
            </div>
            <div className={styles.wrapperFinish}>
                <div className={styles.order}>
                    <h1>Заказ № 001 от 1.01.2001</h1>
                    <div className={styles.list}>
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
                    </div>
                    <div className={styles.summ}>
                        <div className={styles.text}>Общая сумма заказа:</div>
                        <div className={styles.allPrice}>18 552 ₽</div>
                    </div>
                </div>
                <Image className={styles.girlFinish} src={girlFinish} alt="" />
                <Image className={styles.arrrowFinish} src={arrrowFinish} alt="" />
            </div>
        </>

    )
}