'use client'
import styles from "./basketPreview.module.css"
import Image from 'next/image';
import img from '/img/haventlogo.png'
import basketImg from '../../../img/basketImg.png'
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalAmount, removeFromCart, addToCart, selectTotalQuantity } from '../../redux/slices/cartSlice';
import { Toaster, toaster } from "@/components/Toaster/toaster"
import Delivery from "../delivery/delivery";
import { useEffect, useState, useRef } from "react";
import { axiosInstance } from "@/api/__API__";

export default function BasketPreview({ open, setOpen, setModalChange, name, phone, minOrder, setProduct, product, cartItems, buy, setEntrance, setFloor, setApartment, setComment, buy2, setAdress, address, show, setShow }) {

    const dispatch = useDispatch();
    const totalAmount = useSelector(selectTotalAmount);
    const quantity = useSelector(selectTotalQuantity);
    const inputRef = useRef(null);
    const isFirstAdd = useRef(true);

    const [where, setWhere] = useState("Доставка")
    const [isChecking, setIsChecking] = useState(false)

    const checkProductsAvailability = async () => {
        setIsChecking(true);
        try {
            const requests = cartItems.map((item) =>
                axiosInstance.get(`/api/v1/shop/products?query=${item.id},`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("USER_TOKEN")}` }
                })
            );

            const responses = await Promise.all(requests);
            const fetchedProducts = responses.map((response) => response.data.data[0]);

            // Проверяем каждый товар
            for (let i = 0; i < cartItems.length; i++) {
                const cartItem = cartItems[i];
                const fetchedProduct = fetchedProducts[i];

                if (cartItem.price !== fetchedProduct.price) {
                    toaster.create({
                        title: "Внимание",
                        description: `Цена товара "${cartItem.title}" изменилась, обновите страницу`,
                        type: "warning",
                        duration: 4000,
                    });
                    return false;
                }

                if (cartItem.stack > fetchedProduct.rests) {
                    toaster.create({
                        title: `${cartItem.title}`,
                        description: `Товар отсутствует в достаточном количестве, доступно к заказу ${fetchedProduct.rests} шт`,
                        type: "warning",
                        duration: 4000,
                    });
                    return false;
                }
            }

            return true;
        } catch (error) {
            console.error('Ошибка при проверке товаров:', error);
            toaster.create({
                title: "Ошибка",
                description: "Не удалось проверить доступность товаров",
                type: "error",
                duration: 3000,
            });
            return false;
        } finally {
            setIsChecking(false);
        }
    };

    useEffect(() => {
        const requests = cartItems.map((item) =>
            axiosInstance.get(`/api/v1/shop/products?query=${item.id},`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("USER_TOKEN")}` }
            })
        );
        Promise.all(requests)
            .then((responses) => {
                const fetchedProducts = responses.map((response) => response.data.data[0]);
                setProduct(fetchedProducts);
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    useEffect(() => {
        // Выделяем значение только при первом добавлении товара
        if (cartItems.length > 0 && inputRef.current && isFirstAdd.current) {
            inputRef.current.focus();
            inputRef.current.select();
            isFirstAdd.current = false;
        }
    }, [cartItems]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        if (!quantity || totalAmount < minOrder) {
            setOpen(false)
        }
    }, [quantity, totalAmount])

    const repeatFunction = (times, item) => {
        for (let i = 0; i < times; i++) {
            handleRemoveFromCart(item);
        }
    };

    const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    useEffect(() => {
        if (open) {
            scrollToTop();
        }
    }, [open]);

    return (
        <div className={styles.open}>
            <div className={styles.wrapper}>
                {cartItems.map((item) => (
                    <div className={styles.card} key={item.id}>
                        <div className={styles.leftCard}>
                            <Image className={styles.cardImg} src={item.images[0] || img} alt="" width={80} height={80} />
                            <div className={styles.description}>
                                {item.title}
                            </div>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.quantityControls}>
                                <button
                                    onClick={() => handleRemoveFromCart(item)}
                                    className={styles.quantityButton}
                                    aria-label="Уменьшить количество"
                                >
                                    {minus}
                                </button>

                                <input
                                    ref={inputRef}
                                    type="number"
                                    min="0"
                                    max={product?.find(elem => item?.id === elem.id)?.rests || 0}
                                    value={cartItems.find(cartItem => cartItem.id === item.id)?.stack || 0}
                                    onChange={(e) => {
                                        const newValue = parseInt(e.target.value) || 0;
                                        const currentValue = cartItems.find(cartItem => cartItem.id === item.id)?.stack || 0;
                                        const maxRests = product?.find(elem => item?.id === elem.id).rests;

                                        if (newValue > currentValue) {
                                            const diff = newValue - currentValue;
                                            for (let i = 0; i < diff; i++) {
                                                if (newValue <= maxRests) {
                                                    handleAddToCart(item);
                                                }
                                            }
                                        } else if (newValue < currentValue) {
                                            const diff = currentValue - newValue;
                                            for (let i = 0; i < diff; i++) {
                                                handleRemoveFromCart(item);
                                            }
                                        }
                                    }}
                                    className={styles.quantityInput}
                                    aria-label="Количество товара"
                                />

                                <button
                                    onClick={() => {
                                        if (item.rests === 0) {
                                            toaster.create({
                                                title: "Ошибка",
                                                description: "Товар отсутствует на складе",
                                                type: "error",
                                                duration: 3000,
                                            })
                                        } else if (cartItems.find(cartItem => cartItem.id === item.id)?.stack === item.rests) {
                                            toaster.create({
                                                title: "Ошибка",
                                                description: "количество единиц товара превышает остаток на складе",
                                                type: "error",
                                                duration: 3000,
                                            })
                                        } else {
                                            handleAddToCart(item)
                                        }
                                    }}
                                    className={styles.quantityButton}
                                    aria-label="Увеличить количество"
                                >
                                    {plus}
                                </button>
                            </div>
                        </div>
                        <div className={styles.flex}>
                            <div className={styles.price}>
                                <div className={styles.mainPrice}>{item.price * cartItems.find(cartItem => cartItem.id === item.id)?.stack} ₽</div>
                                <div className={styles.allPrice}>{item.price} ₽ x 1</div>
                                <div className={styles.subPrice}>нету ₽</div>
                            </div>
                            <div onClick={() => repeatFunction(cartItems.find(cartItem => cartItem.id === item.id)?.stack, item)} className={styles.buy}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.610985 2.70239V4.1123H2.08013L3.24563 17.3569C3.27759 17.7209 3.58239 18 3.94777 18H14.0285C14.3939 18 14.6989 17.7206 14.7306 17.3566L15.8961 4.1123H17.389V2.70239H0.610985ZM13.3828 16.5901H4.59331L3.49545 4.1123H14.4809L13.3828 16.5901Z" fill="#C51A1A" />
                                    <path d="M11.3033 0H6.6976C6.04974 0 5.52268 0.527062 5.52268 1.17492V3.40731H6.93258V1.40991H11.0684V3.40731H12.4783V1.17492C12.4783 0.527062 11.9512 0 11.3033 0Z" fill="#C51A1A" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
                {!open && <div className={styles.next}>
                    <div className={styles.totalAmount}><span className={styles.itogo}>Итого:</span> {totalAmount} ₽</div>
                    <button
                        onClick={() => {
                            if (quantity === 0) {
                                toaster.create({
                                    title: "Ошибка",
                                    description: "Корзина пуста, добавьте товары",
                                    type: "error",
                                    duration: 3000,
                                })
                            } else if (totalAmount < minOrder) {
                                toaster.create({
                                    title: "Ошибка",
                                    description: `Минимальный заказ ${minOrder} ₽`,
                                    type: "warning",
                                    duration: 3000,
                                })
                            } else {
                                setOpen(true)
                                scrollToTop();
                            }
                        }}
                        className={styles.but}>
                        Перейти к оформлению заказа
                    </button>
                </div>}
                {open && <div className={styles.next}>
                    <div className={styles.totalAmount}><span className={styles.itogo}>Итого:</span> {totalAmount} ₽</div>
                    <button onClick={async () => {
                        if (where === "Самовывоз") {
                            const isAvailable = await checkProductsAvailability();
                            if (isAvailable) {
                                buy();
                                scrollToTop();
                            }
                        }
                        if (where === "Доставка") {
                            const isAvailable = await checkProductsAvailability();
                            if (isAvailable) {
                                buy2();
                                scrollToTop();
                            }
                        }
                    }}
                        disabled={isChecking}
                        className={styles.but}>
                        {isChecking ? "Проверка товаров..." : "Оформить заказ"}
                    </button>
                </div>}
                <Image className={styles.img} src={basketImg} alt="" />
            </div>
            {open ? <Delivery
                setModalChange={setModalChange}
                name={name}
                address={address}
                phone={phone}
                setEntrance={setEntrance}
                setFloor={setFloor}
                setApartment={setApartment}
                setComment={setComment}
                setWhere={setWhere}
                setAdress={setAdress}
                show={show}
                setShow={setShow}
            /> : <></>}
            <Toaster />
        </div>


    )
}

const minus = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" fill="#ECF5FF" />
    <rect x="5" y="9" width="10" height="2" fill="#264794" />
</svg>

const plus = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" fill="#ECF5FF" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9 11V15H11V11H15V9H11V5H9V9H5V11H9Z" fill="#264794" />
</svg>