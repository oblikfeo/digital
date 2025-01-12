import styles from "./page.module.css"
import Login from "@/components/login/login"
import ProductHeader from "@/components/productHeader/productHeader"
import ProductUp from "@/components/productUp/productUp"
import catalogjson from "../../../catalog.json"


export default function Product() {

    return (
        <div className={styles.flexContainer}>
            <Login />
            <div className={styles.wrapper}>
                <ProductHeader />
                <ProductUp />
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const allIds = catalogjson.map((item) => ({
        id: String(item.id),
    }));

    return allIds;
}