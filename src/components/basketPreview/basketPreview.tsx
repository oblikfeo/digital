'use client'
import styles from "./basketPreview.module.css"
import Image from 'next/image';
import img from '/img/product.png'
import basketImg from '../../../img/basketImg.png'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalAmount, removeFromCart, addToCart } from '../../redux/features/cartSlice';
import { toaster } from "@/components/Toaster/toaster"

export default function BasketPreview() {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.wrapper}>
            {cartItems.map((item) => (
                <div className={styles.card} key={item.id}>
                    <div className={styles.leftCard}>
                        <Image src={img} alt="" width={80} height={80} />
                        <div className={styles.description}>
                            {item.description}
                        </div>
                    </div>
                    <div className={styles.counter}>
                        <div
                            onClick={() => {
                                if (item.quantity === 0) {
                                    toaster.create({
                                        title: "Ошибка",
                                        description: "Товар отсутствует на складе",
                                        type: "error",
                                        duration: 3000,
                                    })
                                } else {
                                    handleRemoveFromCart(item)
                                }
                            }}
                            className={styles.button}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" fill="#ECF5FF" />
                                <rect x="5" y="9" width="10" height="2" fill="#264794" />
                            </svg>
                        </div>
                        <div className={styles.number}>{cartItems.find(cartItem => cartItem.id === item.id)?.stack || 0} шт</div>
                        <div
                            onClick={() => {
                                if (item.quantity === 0) {
                                    toaster.create({
                                        title: "Ошибка",
                                        description: "Товар отсутствует на складе",
                                        type: "error",
                                        duration: 3000,
                                    })
                                } else {
                                    handleAddToCart(item)
                                }
                            }}
                            className={styles.button}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" fill="#ECF5FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 11V15H11V11H15V9H11V5H9V9H5V11H9Z" fill="#264794" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.price}>
                            <div className={styles.mainPrice}>{item.price} ₽</div>
                            <div className={styles.allPrice}>{item.optPrice} ₽ x 1</div>
                            <div className={styles.subPrice}>{item.subPrice} ₽</div>
                        </div>
                        <div onClick={() => handleRemoveFromCart(item)} className={styles.buy}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.610985 2.70239V4.1123H2.08013L3.24563 17.3569C3.27759 17.7209 3.58239 18 3.94777 18H14.0285C14.3939 18 14.6989 17.7206 14.7306 17.3566L15.8961 4.1123H17.389V2.70239H0.610985ZM13.3828 16.5901H4.59331L3.49545 4.1123H14.4809L13.3828 16.5901Z" fill="#C51A1A" />
                                <path d="M11.3033 0H6.6976C6.04974 0 5.52268 0.527062 5.52268 1.17492V3.40731H6.93258V1.40991H11.0684V3.40731H12.4783V1.17492C12.4783 0.527062 11.9512 0 11.3033 0Z" fill="#C51A1A" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
            <div className={styles.next}>
                <div className={styles.totalAmount}><span className={styles.itogo}>Итого:</span> {totalAmount} ₽</div>
                <button className={styles.but}>Перейти к оформлению заказа</button>
            </div>
            <Image className={styles.img} src={basketImg} alt="" />
        </div>
    )
}