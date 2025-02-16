import styles from "./categoryMain.module.css"

export default function CategoryMiniMobile({ item, setName }) {

    const shows = () => {
        setName(item.slug)
    }

    return (
        <>
            <span key={item.id} className={styles.hover}>
                <span onClick={shows} key={item.id}>
                    {item.title}
                </span>
            </span>
        </>
    )
}