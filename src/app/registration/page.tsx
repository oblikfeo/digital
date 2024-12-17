import Registration from "@/components/registration/Registration";
import Welcome from "@/components/welcome/welcome";
import styles from "./page.module.css"

export default function Authorization() {
    return (
        <div className={styles.flexContainer}>
            <Registration />
            <Welcome />
        </div>
    );
}