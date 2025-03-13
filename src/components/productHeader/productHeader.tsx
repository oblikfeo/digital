'use client'
import styles from './productHeader.module.css'
import Image from 'next/image';
import logo from '../../../img/miniLogo.svg'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '@/redux/slices/cartSlice';
import { axiosInstance } from '@/api/__API__';
import wa from '../../../img/whatsapp.png'

export default function ProductHeader() {

    const totalQuantity = useSelector(selectTotalQuantity)

    const [productSearch, setProductSearch] = useState("")

    const pathname = usePathname()
    const slug = pathname.split('/').pop()

    const [fetch, setFetch] = useState(null)

    useEffect(() => {
        axiosInstance.get(`/api/v1/shop/products/${slug}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("USER_TOKEN")}` }
        }).then((response) => {
            setFetch(response.data.title)
        }).catch((error) => console.error(error))
    }, [])

    return (
        <div className={styles.welcomeContainer}>
            <Link href="/catalog" >
                <Image className={styles.logo} src={logo} alt='' />
            </Link>
            <div className={styles.header}>
                <div className={styles.contacts}>
                    <div className={totalQuantity === 0 ? "" : styles.totalQuantity}>
                        <span>{totalQuantity === 0 ? "" : totalQuantity}</span>
                    </div>
                    <a className={styles.link1} href="https://wa.me/79048299202" target="_blank">
                        <Image src={wa} alt='' width={24} height={24} />
                        <span className={styles.font}>Перейти в чат</span>
                    </a>
                    <a className={styles.link1} href="tel:+79048299202">
                        {tel}
                        <span className={styles.font}>+7 904 829‑92‑02</span>
                    </a>
                    <Link href="/lk">
                        {lkImg}
                    </Link>
                    <Link href="/basket">
                        {basketImg}{totalQuantity === 0 ? "" : basketImg2}
                    </Link>
                    <a className={styles.link2} href="mailto:info@ozvm.ru">
                        {mail}
                        <span className={styles.font}>info@ozvm.ru</span>
                    </a>
                </div>
            </div>
            <div className={styles.hello}>
                <div className={styles.container}>
                    <div className={styles.sideA}></div>
                    <div className={styles.sideB}></div>
                    <div className={styles.text}>
                        <div className={styles.flex}>
                            <Link className={styles.flex} href="/catalog">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4 7.4L14 6L8 12L14 18L15.4 16.6L10.8 12L15.4 7.4Z" fill="#264794" />
                                </svg>
                                <h2>Вернуться в каталог</h2>
                            </Link>
                        </div>
                        <span>{fetch}</span>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.search}>
                        <input
                            onChange={(e) => setProductSearch(e.target.value)}
                            className={styles.input}
                            type="text"
                            placeholder='Поиск'
                            value={productSearch}
                        />
                        <Link href={{
                            pathname: `/catalog`,
                            query: { productSearch: productSearch }, // Передаем id через query параметры
                        }}>
                            {searchIcon}
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
}

const searchIcon = <svg className={styles.searchImg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.00059 8.99975C2.00059 5.13465 5.13467 2.00057 8.99977 2.00057C12.8658 2.00057 15.9999 5.13465 15.9999 8.99975C15.9999 10.8831 15.2555 12.5932 14.0462 13.8512C14.0106 13.8784 13.9759 13.9084 13.9431 13.9412C13.9103 13.974 13.8803 14.0087 13.8531 14.0443C12.595 15.2556 10.8841 15.9999 8.9997 15.9999C5.1346 15.9999 2.00059 12.8658 2.00059 8.99975ZM14.619 16.0308C13.0787 17.2627 11.1259 17.9995 8.99977 17.9995C4.02926 17.9995 0 13.9703 0 8.99977C0 4.02926 4.02926 0 8.99977 0C13.9703 0 17.9995 4.02926 17.9995 8.99977C17.9995 11.1241 17.2636 13.0768 16.0327 14.6161L19.7075 18.2909C20.0975 18.6818 20.0975 19.3146 19.7075 19.7055C19.3166 20.0955 18.6838 20.0955 18.2929 19.7055L14.619 16.0308Z" fill="#C51A1A" />
</svg>

const tel = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.51348 2.00023C4.98112 2.01182 4.75082 2.17686 4.43241 2.54076L2.54053 4.7029C2.1451 5.15483 2 5.85953 2 6.59477C2 9.0496 3.84676 13.0354 7.40535 16.5947C10.9646 20.1533 14.9504 22 17.4052 22C18.1405 22 18.8452 21.8549 19.2971 21.4595L21.4593 19.5676C21.8231 19.2492 21.9882 19.0189 21.9998 18.4865C22.0083 18.0945 21.7759 17.7221 21.4593 17.4055L18.4863 14.4325C18.1527 14.0989 17.8659 13.892 17.4052 13.892C16.9261 13.892 16.6194 14.1373 16.3242 14.4325L15.2431 15.5136C14.7479 15.9906 14.378 16.0269 13.8918 15.7839L8.21615 10.1083C7.97307 9.62201 8.00943 9.25215 8.48642 8.75691L9.56749 7.67584C9.86273 7.3806 10.108 7.07393 10.108 6.59477C10.108 6.13406 9.90115 5.84737 9.56749 5.5137L6.59455 2.54076C6.27788 2.2241 5.90551 1.9917 5.51348 2.00023Z" fill="#C51A1A" />
</svg>

const mail = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.84653 5.43662C3.21707 5.15536 3.67243 5 4.14296 5H19.8572C20.3278 5 20.7831 5.15536 21.1537 5.43662L12.0001 11.2947L2.84653 5.43662ZM21.9375 6.63038C21.9786 6.79734 22 6.96878 22 7.14288V17.1429C22 17.7116 21.7741 18.2563 21.3723 18.6581C20.9705 19.0598 20.4259 19.2857 19.8571 19.2857H4.14286C3.5741 19.2857 3.02946 19.0598 2.62768 18.6581C2.2259 18.2563 2 17.7116 2 17.1429V7.14288C2 6.96877 2.02143 6.79735 2.0625 6.63038L11.6152 12.7447C11.85 12.8947 12.15 12.8947 12.3848 12.7447L21.9375 6.63038Z" fill="#C51A1A" />
</svg>

const basketImg = <svg className={styles.basketImg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.2857 7.85695H15.3616L12.474 2.85694L12.4731 2.85962L10.8249 5.71494L12.0616 7.85691H7.93835L11.2366 2.14353C11.4268 1.81496 11.4777 1.42479 11.3804 1.05871C11.2822 0.692626 11.0429 0.381037 10.7143 0.191734C10.3857 0.00155577 9.99646 -0.0493403 9.63038 0.048877C9.2643 0.147092 8.95179 0.386386 8.76251 0.714958L4.63931 7.85691H0.714277C0.524993 7.85691 0.342848 7.93191 0.208928 8.06584C0.074999 8.19977 0 8.3819 0 8.57119V9.99976C0 10.189 0.074999 10.3712 0.208928 10.5051C0.342858 10.639 0.524997 10.714 0.714277 10.714H1.5375L2.86696 18.6882C2.92411 19.0329 3.22233 19.2855 3.57142 19.2855H16.4286C16.7777 19.2855 17.0759 19.0329 17.133 18.6882L18.4625 10.714H19.2857C19.475 10.714 19.6572 10.639 19.7911 10.5051C19.925 10.3712 20 10.189 20 9.99976V8.57119C20 8.3819 19.925 8.19976 19.7911 8.06584C19.6571 7.93191 19.475 7.85695 19.2857 7.85695ZM6.54649 16.4186C6.5072 16.4257 6.46792 16.4284 6.42774 16.4284C6.07864 16.4284 5.78131 16.1757 5.72417 15.8311L5.00989 11.5453C4.94471 11.1561 5.2081 10.7882 5.59738 10.7239C5.98666 10.6587 6.35453 10.9221 6.41882 11.3114L7.13311 15.5971C7.1974 15.9855 6.93488 16.3534 6.54649 16.4186ZM10.7143 15.7141C10.7143 16.1088 10.3946 16.4284 9.99998 16.4284C9.60532 16.4284 9.28569 16.1088 9.28569 15.7141V11.4284C9.28569 11.0337 9.60532 10.7141 9.99998 10.7141C10.3946 10.7141 10.7143 11.0337 10.7143 11.4284V15.7141ZM14.2759 15.8311C14.2187 16.1757 13.9214 16.4275 13.5723 16.4284C13.5321 16.4284 13.4928 16.4257 13.4535 16.4186C13.0652 16.3534 12.8026 15.9855 12.8669 15.5971L13.5812 11.3114C13.6455 10.9221 14.0134 10.6587 14.4027 10.7239C14.792 10.7882 15.0554 11.156 14.9902 11.5454L14.2759 15.8311Z" fill="#C51A1A" />
</svg>

const basketImg2 = <svg className={styles.basketImg2} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.2" cx="20" cy="20" r="14" fill="#C51A1A" />
    <circle opacity="0.2" cx="20" cy="20" r="20" fill="#C51A1A" />
</svg>

const lkImg = <svg className={styles.lkimg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99992 20C6.93302 20 4.19946 18.6224 2.3559 16.4444C2.28906 16.3776 2.24479 16.3333 2.20052 16.2665C0.822046 14.5555 0 12.3776 0 10C0 4.48868 4.48868 0 10 0C15.5114 0 20 4.48868 20 10C20 12.3776 19.178 14.5556 17.7778 16.2665C17.7336 16.3333 17.6893 16.4002 17.6224 16.4444C15.8004 18.6224 13.0668 20 9.99992 20ZM9.99992 11.5998C12.6224 11.5998 15.0884 12.5998 16.9557 14.4002C17.7552 13.1337 18.2222 11.6224 18.2222 9.99998C18.2222 5.46708 14.5329 1.77773 9.99996 1.77773C5.46706 1.77773 1.77772 5.46708 1.77772 9.99998C1.77772 11.6224 2.24474 13.1338 3.04421 14.4002C4.91139 12.5998 7.37747 11.5998 9.99992 11.5998ZM9.99992 9.99993C8.15529 9.99993 6.66658 8.51122 6.66658 6.66659C6.66658 4.82196 8.15529 3.33325 9.99992 3.33325C11.8445 3.33325 13.3333 4.82196 13.3333 6.66659C13.3333 8.51122 11.8445 9.99993 9.99992 9.99993Z" fill="#C51A1A" />
</svg>
