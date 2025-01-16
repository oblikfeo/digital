import styles from "./lkAbout.module.css"

export default function LkAbout({ setOpen, open }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.center}>
                <div className={styles.left}>
                    <span>Имя:</span>
                    <span>Адрес:</span>
                    <span>Телефон:</span>
                    <span>Email:</span>
                </div>
                <div className={styles.right}>
                    <span>Иванов Иван Иванович</span>
                    <span>г. Омск, Ул. Комарова, 21</span>
                    <span>+7 (123) 456 - 78 - 90</span>
                    <span>Email@gmail.com</span>
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className={styles.change}>
                Изменить контактную информацию
            </div>
        </div>
    )
}