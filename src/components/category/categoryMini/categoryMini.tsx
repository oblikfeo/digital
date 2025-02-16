import styles from "./categoryMini.module.css"

export default function CategoryMini({ item, setName }) {

    const click = () => {
        setName(item.slug)
    }

    return (
        <>
            <span key={item.id} className={styles.hover}>
                <span onClick={click} key={item.id}>
                    {item.title}
                </span>
            </span>
        </>
    )
}