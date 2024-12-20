import styles from "./page.module.css"
import HelloUser from "@/components/helloUser/helloUser";
import CatalogHeader from "@/components/catalogHeader/catalogHeader";
import Catalog from "@/components/catalog/catalog";

export default function Forgot() {
    return (
        <div className={styles.flexContainer}>
            <HelloUser />
            <div className={styles.flex}>
                <CatalogHeader />
                <Catalog />
            </div>
        </div>
    );
}