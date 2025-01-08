'use client'
import styles from "./page.module.css"
import BasketHeader from "@/components/basketHeader/basketHeader"
import Login from "@/components/login/login"
import BasketPreview from "@/components/basketPreview/basketPreview"

export default function Basket() {
    return (
        <div className={styles.flexContainer}>
            <Login />
            <div className={styles.wrapper}>
                <BasketHeader />
                <BasketPreview />
                <div className={styles.footer}>
                    <span className={styles.redline}>300 ветмир</span>
                    <span className={styles.footerText}>ветеринарные препараты для всех видов животных</span>
                </div>
            </div>
        </div>
    )
}