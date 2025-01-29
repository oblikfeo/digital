import styles from './welcome.module.css'
import Image from 'next/image';
import logo from '../../../img/miniLogo.svg'
import img from '../../../img/GirlDog.png'
import Paw1 from "@/components/UI kit/paws1/paws"
import Paw2 from "@/components/UI kit/paws2/paws"
import Paw3 from "@/components/UI kit/paws3/paws"
import Paw4 from "@/components/UI kit/paws4/paws"
import Paw5 from "@/components/UI kit/paws5/paws"
import AuthAdaptive from '../adaptive/authAdaptive/authAdaptive';

interface Props {
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    handleSubmit: () => void;
    setCurrentComponent: (value: string) => void;
}

export default function Welcome({ email, setEmail, password, setPassword, handleSubmit, setCurrentComponent }: Props) {
    return (
        <div className={styles.welcomeContainer}>
            <Paw1 />
            <Paw2 />
            <Paw3 />
            <Paw4 />
            <Paw5 />
            <Image className={styles.logo} src={logo} alt='' />
            <div className={styles.header}>
                <div className={styles.contacts}>
                    <a className={styles.link} href="tel:+79994569584">
                        {tel}
                        <span className={styles.font}>+7 (000) 000 - 00 - 00</span>
                    </a>
                    <a className={styles.link} href="mailto:kgc.kurochka@gmail.com">
                        {mail}
                        <span className={styles.font}>Email</span>
                    </a>
                </div>
            </div>

            <div className={styles.contentContainer}>
                <Image className={styles.girl} src={img} alt='' />
                <div className={styles.container}>
                    <div className={styles.sideA}></div>
                    <div className={styles.sideB}></div>
                    <div className={styles.sideC}></div>
                </div>
                <div className={styles.sideD}>
                    <div className={styles.closeMobile}>
                        {white}
                        <div className={styles.whiteClose}></div>
                    </div>
                    <AuthAdaptive
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit}
                        setCurrentComponent={setCurrentComponent}
                    />
                    <div className={styles.textContainer}>
                        <h2>Добро пожаловать</h2>
                        <span className={styles.text}>На сайт магазина<br />«300 ветмир»</span>
                        <span className={styles.subText}>Мы осознаем ценность жизни<br />ваших питомцев</span>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <span className={styles.redline}>300 ветмир</span>
                <span className={styles.footerText}>ветеринарные препараты для всех видов животных</span>
            </div>
        </div>
    );
}

const tel = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.51348 2.00023C4.98112 2.01182 4.75082 2.17686 4.43241 2.54076L2.54053 4.7029C2.1451 5.15483 2 5.85953 2 6.59477C2 9.0496 3.84676 13.0354 7.40535 16.5947C10.9646 20.1533 14.9504 22 17.4052 22C18.1405 22 18.8452 21.8549 19.2971 21.4595L21.4593 19.5676C21.8231 19.2492 21.9882 19.0189 21.9998 18.4865C22.0083 18.0945 21.7759 17.7221 21.4593 17.4055L18.4863 14.4325C18.1527 14.0989 17.8659 13.892 17.4052 13.892C16.9261 13.892 16.6194 14.1373 16.3242 14.4325L15.2431 15.5136C14.7479 15.9906 14.378 16.0269 13.8918 15.7839L8.21615 10.1083C7.97307 9.62201 8.00943 9.25215 8.48642 8.75691L9.56749 7.67584C9.86273 7.3806 10.108 7.07393 10.108 6.59477C10.108 6.13406 9.90115 5.84737 9.56749 5.5137L6.59455 2.54076C6.27788 2.2241 5.90551 1.9917 5.51348 2.00023Z" fill="#C51A1A" />
</svg>

const mail = <svg className={styles.adaptive} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.84653 5.43662C3.21707 5.15536 3.67243 5 4.14296 5H19.8572C20.3278 5 20.7831 5.15536 21.1537 5.43662L12.0001 11.2947L2.84653 5.43662ZM21.9375 6.63038C21.9786 6.79734 22 6.96878 22 7.14288V17.1429C22 17.7116 21.7741 18.2563 21.3723 18.6581C20.9705 19.0598 20.4259 19.2857 19.8571 19.2857H4.14286C3.5741 19.2857 3.02946 19.0598 2.62768 18.6581C2.2259 18.2563 2 17.7116 2 17.1429V7.14288C2 6.96877 2.02143 6.79735 2.0625 6.63038L11.6152 12.7447C11.85 12.8947 12.15 12.8947 12.3848 12.7447L21.9375 6.63038Z" fill="#C51A1A" />
</svg>

const white = <svg className={styles.whiteSvg} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4Z" fill="#4D6887" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M27 14.4L25.6 13L20 18.6L14.4 13L13 14.4L18.6 20L13 25.6L14.4 27L20 21.4L25.6 27L27 25.6L21.4 20L27 14.4Z" fill="white" />
</svg>

