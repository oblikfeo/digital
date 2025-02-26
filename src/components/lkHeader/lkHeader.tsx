import styles from './lkHeader.module.css'
import Image from 'next/image';
import logo from '../../../img/miniLogo.svg'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectTotalQuantity } from '@/redux/slices/cartSlice';
import { clearData } from '@/redux/slices/userSlice';

export default function LkHeader({ title, chapter, setChapter }) {

    const totalQuantity = useSelector(selectTotalQuantity)
    const dispatch = useDispatch()

    return (
        <div className={styles.welcomeContainer}>
            <Link href="/catalog">
                <Image className={styles.logo} src={logo} alt='' />
            </Link>
            <div className={styles.header}>
                <div className={styles.contacts}>
                    <div className={totalQuantity === 0 ? "" : styles.totalQuantity}>
                        <span>{totalQuantity === 0 ? "" : totalQuantity}</span>
                    </div>
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
                        <Link href="/catalog">
                            <div className={styles.back}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4 7.4L14 6L8 12L14 18L15.4 16.6L10.8 12L15.4 7.4Z" fill="#264794" />
                                </svg>
                                Вернуться в каталог

                            </div>
                        </Link>
                        <div onClick={() => {
                            localStorage.removeItem("USER_TOKEN")
                            dispatch(clearData())
                            dispatch(clearCart())
                        }
                        }>
                            <Link href="/" className={styles.exit}>
                                {exit}
                            </Link>
                        </div>

                        <span>{title}</span>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.allChapter}>
                        <div onClick={() => setChapter("about")} className={chapter === "about" ? styles.red : styles.chapter}>Контактная информация</div>
                        <div onClick={() => setChapter("order")} className={chapter === "order" ? styles.red : styles.chapter}>Итория заказов</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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

const exit = <svg className={styles.exit} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="4" fill="#C51A1A" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3288 13.6574V15.4999C12.3288 15.7759 12.1163 16 11.8545 16H5.47432C5.21254 16 5 15.7764 5 15.4999V4.50009C5 4.22408 5.21205 4 5.47432 4H11.855C12.1168 4 12.3293 4.22357 12.3293 4.50009V6.34264H11.3807L11.3802 5.0002H5.94821V14.9998H11.3802V13.6574H12.3288ZM14.1184 10.5001L13.0157 11.6627L13.686 12.3694L15.5979 10.3537C15.7832 10.1584 15.7832 9.84177 15.5979 9.64697L13.6865 7.63074L13.0162 8.33743L14.1189 9.50001H7.95999V10.5002L14.1184 10.5001Z" fill="white" />
</svg>
