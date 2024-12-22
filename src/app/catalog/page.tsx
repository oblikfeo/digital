import styles from "./page.module.css"
import Login from "@/components/login/login";
import CatalogHeader from "@/components/catalogHeader/catalogHeader";
import Catalog from "@/components/catalog/catalog";

export default function Forgot() {
    return (
        <div className={styles.flexContainer}>
            <Login />
            <div className={styles.flex}>
                <CatalogHeader />
                <Catalog />
            </div>
        </div>
    );
}