'use client'
import styles from "./productUp.module.css"
import img from '/img/newHaventLogo.svg'
import Image from "next/image";
import Paragraph from "../UI kit/paragraph/paragraph";
import ProductDown from "../productDown/productDown";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, AppState, removeFromCart } from '../../redux/slices/cartSlice';
import { Toaster, toaster } from "@/components/Toaster/toaster"
import axios from "axios";
import SquareCard from "../squareСard/squareCard";

export default function ProductUp() {

    const pathname = usePathname()
    const slug = pathname.split('/').pop()

    const [fetch, setFetch] = useState(null)
    const [similar, setSimilar] = useState([])
    const [currentPage, setCurrentPage] = useState(1) // текущая страница пагинации
    const [totalPage, setTotalPage] = useState(1) // последняя страница пагинации

    useEffect(() => {
        axios.get(`https://zoo.devsrv.ru/api/v1/shop/products/${slug}`).then((response) => {
            setFetch(response.data)
        }).catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        axios.get(`https://zoo.devsrv.ru/api/v1/shop/products?&query=${slug}}`).then((response) => {
            setSimilar(response.data.data)
            setTotalPage(response.data.last_page)
        }).catch((error) => console.error(error))
    }, [])


    const dispatch = useDispatch();
    const handleAddToCart = (product) => dispatch(addToCart(product));
    const handleRemoveFromCart = (productId) => dispatch(removeFromCart(productId));

    const [open, setOpen] = useState(false)
    const item = useSelector((state: AppState) => state?.cart?.items?.find(item => item?.id === fetch?.id));


    return (
        <div className={styles.wrapper}>
            <div className={styles.product}>
                <div className={styles.content}>
                    <Image className={styles.shadow} src={fetch?.images[0] ?? img} alt={""} width={322} height={322}></Image>

                    <div className={styles.card}>
                        <div className={styles.head}>
                            <div className={styles.name}>
                                <div>{fetch?.title}</div>
                            </div>
                            <div className={fetch?.rests > 0 ? styles.have : styles.havent}>
                                {fetch?.rests === 0 ? 'Нет в наличии' : 'В наличии'}
                            </div>

                        </div>

                        <div className={styles.description}>

                            <div className={styles.left}>
                                <Paragraph text={"Производитель:"} props={fetch?.manufacturer} />
                                <Paragraph text={"Страна производитель:"} props={fetch?.country} />
                                <Paragraph text={"Категория товара:"} props={fetch?.categories[0].title} />
                                <Paragraph text={"Остаток:"} props={fetch?.rests ? fetch?.rests : "Нет в наличии"} />
                                <Paragraph text={"Минимальный объем заказа:"} props={"2800 ₽"} />
                            </div>

                            <div className={styles.right}>
                                <Paragraph text={"Цена:"} props={`${fetch?.price}  ₽`} />

                                <div className={styles.calc}>
                                    <div className={styles.counter}>
                                        <div onClick={() => {
                                            if (fetch?.rests === 0) {
                                                toaster.create({
                                                    title: "Ошибка",
                                                    description: "Товар отсутствует на складе",
                                                    type: "error",
                                                    duration: 3000,
                                                })
                                            } else {
                                                handleRemoveFromCart(fetch)
                                            }
                                        }} className={styles.button}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="20" height="20" fill="#ECF5FF" />
                                                <rect x="5" y="9" width="10" height="2" fill="#264794" />
                                            </svg>
                                        </div>
                                        <div className={styles.number}>{item?.stack || "0"} шт</div>
                                        <div onClick={() => {
                                            if (item?.stack === fetch?.rests || fetch?.rests === 0) {
                                                toaster.create({
                                                    title: "Ошибка",
                                                    description: "Добавлено максимальное количество",
                                                    type: "error",
                                                    duration: 3000,
                                                })
                                            } else {
                                                handleAddToCart(fetch)
                                            }
                                        }}
                                            className={styles.button}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="20" height="20" fill="#ECF5FF" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9 11V15H11V11H15V9H11V5H9V9H5V11H9Z" fill="#264794" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={styles.h4}>= {fetch?.price * item?.stack || 0} ₽</div>
                                </div>
                                <div onClick={() => {
                                    if (fetch?.rests === 0) {
                                        toaster.create({
                                            title: "Ошибка",
                                            description: "Товар отсутствует на складе",
                                            type: "error",
                                            duration: 3000,
                                        })
                                    } else {
                                        handleAddToCart(fetch)
                                    }
                                }}
                                    className={styles.buyButton}>
                                    <div className={styles.buttonArea}>
                                        <button className={styles.add}>
                                            <span>Добавить в корзину</span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.4286 6.57134H12.2893L9.97923 2.57134L9.97851 2.57348L8.65995 4.85773L9.64924 6.57131H6.35068L8.98931 2.00061C9.14145 1.73775 9.18217 1.42561 9.10431 1.13275C9.02574 0.839883 8.83431 0.590612 8.57145 0.439169C8.30859 0.287026 7.99717 0.24631 7.7043 0.324883C7.41144 0.403455 7.16144 0.594891 7.01001 0.857748L3.71145 6.57131H0.571422C0.419994 6.57131 0.274279 6.63131 0.167143 6.73845C0.0599992 6.84559 0 6.99131 0 7.14273V8.28559C0 8.43702 0.0599992 8.58273 0.167143 8.68987C0.274286 8.79701 0.419998 8.85701 0.571422 8.85701H1.23L2.29357 15.2364C2.33929 15.5121 2.57786 15.7142 2.85714 15.7142H13.1429C13.4221 15.7142 13.6607 15.5121 13.7064 15.2364L14.77 8.85701H15.4286C15.58 8.85701 15.7257 8.79701 15.8329 8.68987C15.94 8.58272 16 8.43701 16 8.28559V7.14273C16 6.9913 15.94 6.84559 15.8329 6.73845C15.7257 6.63131 15.58 6.57134 15.4286 6.57134ZM5.23719 13.4206C5.20576 13.4263 5.17433 13.4285 5.14219 13.4285C4.86291 13.4285 4.62505 13.2263 4.57934 12.9506L4.00791 9.52205C3.95576 9.21062 4.16648 8.91633 4.47791 8.8649C4.78933 8.81275 5.08362 9.02347 5.13506 9.3349L5.70649 12.7635C5.75792 13.0742 5.5479 13.3685 5.23719 13.4206ZM8.57141 12.8571C8.57141 13.1728 8.3157 13.4285 7.99998 13.4285C7.68426 13.4285 7.42855 13.1728 7.42855 12.8571V9.42849C7.42855 9.11277 7.68426 8.85706 7.99998 8.85706C8.3157 8.85706 8.57141 9.11277 8.57141 9.42849V12.8571ZM11.4207 12.9506C11.375 13.2263 11.1371 13.4278 10.8578 13.4285C10.8257 13.4285 10.7943 13.4264 10.7628 13.4206C10.4521 13.3685 10.2421 13.0742 10.2936 12.7635L10.865 9.33491C10.9164 9.02349 11.2107 8.81276 11.5221 8.86491C11.8336 8.91634 12.0443 9.21062 11.9921 9.52206L11.4207 12.9506Z" fill="white" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div onClick={() => setOpen(!open)} className={styles.flex}>
                                <span>Полная характеристика</span>
                                <svg className={open === true ? styles.transform : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.09995 8.30001L5.69995 9.70001L11.7 15.7L17.7 9.70001L16.3 8.30001L11.7 12.9L7.09995 8.30001Z" fill="#C51A1A" />
                                </svg>
                            </div>
                        </div>
                    </div>


                </div>
                {open === true ? <ProductDown fetch={fetch} /> : <></>}
            </div>
            <div className={styles.minicatalog}>
                <h2 className={styles.h2}>Похожие товары</h2>
                <SquareCard
                    totalPage={totalPage}
                    productsFetch={similar}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <div className={styles.footer}>
                <span className={styles.redline}>300 ветмир</span>
                <span className={styles.footerText}>ветеринарные препараты для всех видов животных</span>
            </div>
            <Toaster />
        </div>
    )
}