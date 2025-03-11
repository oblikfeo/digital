import styles from "./paragraph.module.css"


export default function Paragraph({ text, props }) {

    return (
        <div className={styles.paragraph}>
            <h2>{text}</h2>
            <div className={styles.border}>
                <div className={styles.borderItem}></div>
            </div>
            <div className={styles.hidden}>
                <h3 className={styles.hidden}>{props ? props : ""}</h3>
            </div>
        </div>
    )
}