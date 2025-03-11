"use client"
import styles from "./orders.module.css"
import Image from "next/image"
import img from '/img/newHaventLogo.svg'
import { useState } from "react"
import { axiosInstance } from "@/api/__API__"
// import { useDispatch } from "react-redux"
// import { addToCart } from "@/redux/slices/cartSlice"
import { Toaster, toaster } from "@/components/Toaster/toaster"

export default function Orders({ item, order }) {

    const [open, setOpen] = useState(false)
    // const dispatch = useDispatch();

    const handleSubmit = async () => {
        const requests = order.map((item) =>
            axiosInstance.get(`/api/v1/shop/products?query=${item.items.map((product) => product.title)},`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("USER_TOKEN")}` }
            })
        );
        Promise.all(requests)
            .then((responses) => {
                const fetchedProducts = responses.map((response) => response.data.data);
                console.log(fetchedProducts)
                // dispatch(addToCart(fetchedProducts))
                toaster.create({
                    title: "Успешно",
                    description: "Товары добавлены в корзину",
                    type: "success",
                    duration: 3000,
                })
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    };

    return (
        <>
            <div className={styles.order}>
                <div className={styles.box}>
                    <div onClick={() => setOpen(!open)} className={styles.left}>
                        <h1>Заказ № {item.id} от {item.created_at}</h1>
                        <div className={styles.dotes}></div>
                        {open ? up : down}
                    </div>
                    <button onClick={handleSubmit} className={styles.repeat}>Повторить заказ</button>
                </div>
                {open && item.items.map((each => (
                    <div className={styles.list} key={each.id}>
                        <div className={styles.item}>
                            <div className={styles.flex}>
                                <Image src={each.image || img} alt="" height={60} width={60} className={styles.img} />
                                <div className={styles.discription}>{each.title}</div>
                            </div>
                            <div className={styles.prices}>
                                <h2>{each.total.slice(0, -3)} ₽</h2>
                                <h3>{each.price.slice(0, -3)} ₽ x {each?.["quantity "].slice(0, -3)}</h3>
                                <h4></h4>
                            </div>
                        </div>
                    </div>
                )))}
                {open && <div className={styles.summ}>
                    <div className={styles.text}>Общая сумма заказа:</div>
                    <div className={styles.allPrice}>{item.total} ₽</div>
                </div>}
                <button className={styles.repeat2}>Повторить заказ</button>
            </div>
            <Toaster />
        </>

    )
}

const down = <svg className={styles.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.6 8.6001L12 13.2001L7.4 8.6001L6 10.0001L12 16.0001L18 10.0001L16.6 8.6001Z" fill="#C51A1A" />
</svg>

const up = <svg className={styles.revert} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.6 8.6001L12 13.2001L7.4 8.6001L6 10.0001L12 16.0001L18 10.0001L16.6 8.6001Z" fill="#C51A1A" />
</svg>