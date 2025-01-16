import styles from "./change.module.css"

export default function Change() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h1>Изменение личных данных</h1>
                <div className={styles.position}><input type="text" placeholder="Иванов Иван Иванович" /><div>{img}</div></div>
                <div className={styles.position}><input type="text" placeholder="г. Омск, Ул. Комарова, 21" />{img}</div>
                <div className={styles.position}><input type="text" placeholder="+7 (123) 456 - 78 - 90" />{img}</div>
                <div className={styles.position}><input type="text" placeholder="Email@gmail.com" />{img}</div>
            </div>
            <div className={styles.right}>
                <h1>Изменение пароля</h1>
                <div className={styles.position}><input type="text" placeholder="Текущий пароль" /></div>
                <div className={styles.position}><input type="text" placeholder="Новый пароль" /></div>
                <div className={styles.position}><input type="text" placeholder="Повторить пароль" /></div>
                <div className={styles.buttons}>
                    <button className={styles.save}>Сохранить изменения</button>
                    <button className={styles.delete}>Отмена</button>
                </div>
            </div>
        </div>
    )
}

const img = <svg className={styles.absolute} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z" fill="#C51A1A" />
</svg>
