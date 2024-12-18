import styles from "./page.module.css"
import HelloUser from "@/components/helloUser/helloUser";
import Catalog from "@/components/catalog/catalog";

export default function Forgot() {
    return (
        <div className={styles.flexContainer}>
            <HelloUser />
            <Catalog />
        </div>
    );
}