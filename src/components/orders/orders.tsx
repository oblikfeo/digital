"use client"
import styles from "./orders.module.css"
import Image from "next/image"
import img from '/img/newHaventLogo.svg'
import { useState } from "react"
import { axiosInstance } from "@/api/__API__"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/slices/cartSlice"

export default function Orders({ item, order }) {

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const requests = order.map((item) =>
            axiosInstance.get(`/api/v1/shop/products?query=${item.id},`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("USER_TOKEN")}` }
            })
        );
        Promise.all(requests)
            .then((responses) => {
                const fetchedProducts = responses.map((response) => response.data.data[0]);
                dispatch(addToCart(fetchedProducts[0]))
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    };

    return (
        <>
            <div className={styles.order}>
                <div onClick={() => setOpen(!open)} className={styles.box}>
                    <div className={styles.left}>
                        <h1>Заказ № {item.id} от {item.created_at}</h1>
                        <div className={styles.dotes}></div>
                        {open ? up : down}
                    </div>
                    <button onClick={handleSubmit} className={styles.repeat}>Повторить заказ</button>
                </div>
                {open && <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.flex}>
                            <Image src={img} alt="" height={60} width={60} />
                            <div className={styles.discription}>{item.items.map((each) => each.title)}</div>
                        </div>
                        <div className={styles.prices}>
                            <h2>{item.items.map((each) => each.total)}</h2>
                            <h3>{item.items.map((each) => each.price)} ₽ x {item.items.map((each) => each?.["quantity "])}</h3>
                            <h4></h4>
                        </div>
                    </div>
                </div>}
                {open && <div className={styles.summ}>
                    <div className={styles.text}>Общая сумма заказа:</div>
                    <div className={styles.allPrice}>{item.total} ₽</div>
                </div>}
                <button className={styles.repeat2}>Повторить заказ</button>
            </div>
        </>

    )
}

const down = <svg className={styles.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.6 8.6001L12 13.2001L7.4 8.6001L6 10.0001L12 16.0001L18 10.0001L16.6 8.6001Z" fill="#C51A1A" />
</svg>

const up = <svg className={styles.revert} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.6 8.6001L12 13.2001L7.4 8.6001L6 10.0001L12 16.0001L18 10.0001L16.6 8.6001Z" fill="#C51A1A" />
</svg>