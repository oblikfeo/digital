import styles from './listCard.module.css'
import Image from 'next/image';
import catalogjson from '../../catalog.json'
import img from '/img/product.png'

export default function ListCard() {
    return (
        <>
            <div className={styles.wrapper}>
                {catalogjson.map((item) => (
                    <div className={styles.cart}>
                        <Image src={img} alt='' width={80} height={80} />
                        <div className={styles.discription}>
                            {item.description}
                        </div>
                        <div className={item.have > 0 ? styles.have : styles.havent}>{item.have === 0 ? 'Нет в наличии' : 'В наличии'}</div>
                        <div className={styles.counter}>
                            <div className={styles.button}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="#ECF5FF" />
                                    <rect x="5" y="9" width="10" height="2" fill="#264794" />
                                </svg>
                            </div>
                            <div className={styles.number}>1 шт</div>
                            <div className={styles.button}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="#ECF5FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 11V15H11V11H15V9H11V5H9V9H5V11H9Z" fill="#264794" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.mainPrice}>50 ₽</div>
                            <div className={styles.allPrice}>50 ₽ x 1</div>
                            <div className={styles.subPrice}>55 ₽</div>
                        </div>
                        <div className={styles.buy}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4286 6.57145H12.2893L9.97923 2.57144L9.97851 2.57359L8.65995 4.85784L9.64924 6.57141H6.35068L8.98931 2.00071C9.14145 1.73786 9.18217 1.42572 9.10431 1.13285C9.02574 0.83999 8.83431 0.590719 8.57145 0.439276C8.30859 0.287133 7.99717 0.246416 7.7043 0.32499C7.41144 0.403562 7.16144 0.594997 7.01001 0.857855L3.71145 6.57141H0.571422C0.419994 6.57141 0.274279 6.63141 0.167143 6.73856C0.0599992 6.8457 0 6.99141 0 7.14284V8.28569C0 8.43712 0.0599992 8.58284 0.167143 8.68997C0.274286 8.79712 0.419998 8.85712 0.571422 8.85712H1.23L2.29357 15.2365C2.33929 15.5122 2.57786 15.7143 2.85714 15.7143H13.1429C13.4221 15.7143 13.6607 15.5122 13.7064 15.2365L14.77 8.85712H15.4286C15.58 8.85712 15.7257 8.79712 15.8329 8.68997C15.94 8.58283 16 8.43712 16 8.28569V7.14284C16 6.99141 15.94 6.84569 15.8329 6.73856C15.7257 6.63141 15.58 6.57145 15.4286 6.57145ZM5.23719 13.4207C5.20576 13.4264 5.17433 13.4286 5.14219 13.4286C4.86291 13.4286 4.62505 13.2264 4.57934 12.9507L4.00791 9.52216C3.95576 9.21073 4.16648 8.91644 4.47791 8.865C4.78933 8.81286 5.08362 9.02358 5.13506 9.335L5.70649 12.7636C5.75792 13.0743 5.5479 13.3686 5.23719 13.4207ZM8.57141 12.8572C8.57141 13.1729 8.3157 13.4286 7.99998 13.4286C7.68426 13.4286 7.42855 13.1729 7.42855 12.8572V9.42859C7.42855 9.11287 7.68426 8.85716 7.99998 8.85716C8.3157 8.85716 8.57141 9.11287 8.57141 9.42859V12.8572ZM11.4207 12.9507C11.375 13.2265 11.1371 13.4279 10.8578 13.4286C10.8257 13.4286 10.7943 13.4265 10.7628 13.4207C10.4521 13.3686 10.2421 13.0743 10.2936 12.7636L10.865 9.33502C10.9164 9.02359 11.2107 8.81287 11.5221 8.86502C11.8336 8.91645 12.0443 9.21073 11.9921 9.52217L11.4207 12.9507Z" fill="#C51A1A" />
                            </svg>
                        </div>
                    </div>

                )
                )}
            </div>
        </>
    )
}