'use client'
import LkHeader from "@/components/lkHeader/lkHeader"
import styles from "./page.module.css"
import Login from "@/components/login/login"
import LkAbout from "@/components/lkAbout/lkAbout"
import Change from "@/components/UI kit/change/change"
import { useState } from "react"

export default function Lk() {

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.flexContainer}>
            <Login />
            <div className={styles.wrapper}>
                <LkHeader title={"Личный кабинет"} />
                <LkAbout setOpen={setOpen} open={open} />
                {open && <Change />}
                <div className={styles.footer}>
                    <span className={styles.redline}>300 ветмир</span>
                    <span className={styles.footerText}>ветеринарные препараты для всех видов животных</span>
                </div>
            </div>
        </div>
    )
}