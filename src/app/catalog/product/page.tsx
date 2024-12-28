'use client'
import styles from "./page.module.css"
import Login from "@/components/login/login"
import ProductHeader from "@/components/productHeader/productHeader"
import ProductUp from "@/components/productUp/productUp"


export default function Product() {

    return (
        <div className={styles.flexContainer}>
            <Login />
            <div className={styles.wrapper}>
                <ProductHeader />
                <ProductUp />
            </div>
        </div>)

}