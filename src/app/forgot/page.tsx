import ForgotPassword from "@/components/forgot/Forgot";
import Welcome from "@/components/welcome/welcome";
import styles from "./page.module.css"

export default function Forgot() {
    return (
        <div className={styles.flexContainer}>
            <ForgotPassword />
            <Welcome />
        </div>
    );
}