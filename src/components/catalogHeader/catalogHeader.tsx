import styles from './catalogHeader.module.css'
import Image from 'next/image';
import logo from '../../../img/miniLogo.svg'
import CustomSelect from '../select/customSelect'
import { useState } from 'react';

interface Props {
    setView: (value: string) => void;
    select: (value: boolean) => void;
}

export default function CatalogHeader({ setView }: Props) {

    const [borderList, setBorderList] = useState(true)
    const [borderSquare, setBorderSquare] = useState(false)

    const selectList = () => {
        if (!borderList) {
            setBorderList(!borderList)
            setBorderSquare(!borderSquare)
        }
    }

    const selectSquare = () => {
        if (!borderSquare) {
            setBorderList(!borderList)
            setBorderSquare(!borderSquare)
        }
    }

    return (
        <div className={styles.welcomeContainer}>
            <Image className={styles.logo} src={logo} alt='' />
            <div className={styles.header}>
                <div className={styles.contacts}>
                    <a className={styles.link} href="tel:+79994569584">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.51348 2.00023C4.98112 2.01182 4.75082 2.17686 4.43241 2.54076L2.54053 4.7029C2.1451 5.15483 2 5.85953 2 6.59477C2 9.0496 3.84676 13.0354 7.40535 16.5947C10.9646 20.1533 14.9504 22 17.4052 22C18.1405 22 18.8452 21.8549 19.2971 21.4595L21.4593 19.5676C21.8231 19.2492 21.9882 19.0189 21.9998 18.4865C22.0083 18.0945 21.7759 17.7221 21.4593 17.4055L18.4863 14.4325C18.1527 14.0989 17.8659 13.892 17.4052 13.892C16.9261 13.892 16.6194 14.1373 16.3242 14.4325L15.2431 15.5136C14.7479 15.9906 14.378 16.0269 13.8918 15.7839L8.21615 10.1083C7.97307 9.62201 8.00943 9.25215 8.48642 8.75691L9.56749 7.67584C9.86273 7.3806 10.108 7.07393 10.108 6.59477C10.108 6.13406 9.90115 5.84737 9.56749 5.5137L6.59455 2.54076C6.27788 2.2241 5.90551 1.9917 5.51348 2.00023Z" fill="#C51A1A" />
                        </svg>
                        <span>+7 (000) 000 - 00 - 00</span>
                    </a>
                    <a className={styles.link} href="mailto:kgc.kurochka@gmail.com">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.84653 5.43662C3.21707 5.15536 3.67243 5 4.14296 5H19.8572C20.3278 5 20.7831 5.15536 21.1537 5.43662L12.0001 11.2947L2.84653 5.43662ZM21.9375 6.63038C21.9786 6.79734 22 6.96878 22 7.14288V17.1429C22 17.7116 21.7741 18.2563 21.3723 18.6581C20.9705 19.0598 20.4259 19.2857 19.8571 19.2857H4.14286C3.5741 19.2857 3.02946 19.0598 2.62768 18.6581C2.2259 18.2563 2 17.7116 2 17.1429V7.14288C2 6.96877 2.02143 6.79735 2.0625 6.63038L11.6152 12.7447C11.85 12.8947 12.15 12.8947 12.3848 12.7447L21.9375 6.63038Z" fill="#C51A1A" />
                        </svg>
                        <span>Email</span>
                    </a>
                </div>
            </div>
            <div className={styles.hello}>
                <div className={styles.container}>
                    <div className={styles.sideA}></div>
                    <div className={styles.sideB}></div>
                    <div className={styles.text}><span>Добро пожаловать в каталог</span></div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.search}>
                        <input className={styles.input} type="text" placeholder='Поиск' />
                        <svg className={styles.searchImg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.00059 8.99975C2.00059 5.13465 5.13467 2.00057 8.99977 2.00057C12.8658 2.00057 15.9999 5.13465 15.9999 8.99975C15.9999 10.8831 15.2555 12.5932 14.0462 13.8512C14.0106 13.8784 13.9759 13.9084 13.9431 13.9412C13.9103 13.974 13.8803 14.0087 13.8531 14.0443C12.595 15.2556 10.8841 15.9999 8.9997 15.9999C5.1346 15.9999 2.00059 12.8658 2.00059 8.99975ZM14.619 16.0308C13.0787 17.2627 11.1259 17.9995 8.99977 17.9995C4.02926 17.9995 0 13.9703 0 8.99977C0 4.02926 4.02926 0 8.99977 0C13.9703 0 17.9995 4.02926 17.9995 8.99977C17.9995 11.1241 17.2636 13.0768 16.0327 14.6161L19.7075 18.2909C20.0975 18.6818 20.0975 19.3146 19.7075 19.7055C19.3166 20.0955 18.6838 20.0955 18.2929 19.7055L14.619 16.0308Z" fill="#C51A1A" />
                        </svg>
                    </div>

                    <CustomSelect />

                    <button onClick={() => {
                        setView('list');
                        selectList();
                    }}
                        className={`${styles.view} ${borderList ? styles.borderTrue : styles.borderFalse}`}>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#264794" />
                        </svg>
                    </button>
                    <button onClick={() => {
                        setView('square')
                        selectSquare();
                    }}
                        className={`${styles.view} ${borderSquare ? styles.borderTrue : styles.borderFalse}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z" fill="#040D23" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
