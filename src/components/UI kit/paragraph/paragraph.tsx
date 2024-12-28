import styles from "./paragraph.module.css"

interface MyInterface {
    text: string;
    props: string
}

export default function Paragraph({ text, props }: MyInterface) {

    return (
        <div className={styles.paragraph}>
            <h2>{text}</h2>
            <div className={styles.border}>
                <div className={styles.borderItem}></div>
            </div>
            <h3>{props}</h3>
        </div>
    )
}