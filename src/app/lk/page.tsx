'use client'
import LkHeader from "@/components/lkHeader/lkHeader"
import styles from "./page.module.css"
import Login from "@/components/login/login"
import LkAbout from "@/components/lkAbout/lkAbout"
import Change from "@/components/UI kit/change/change"
import { useState } from "react"
import NowOrder from "@/components/nowOrder/nowOrder"
import Paw1 from "@/components/UI kit/paws1/paws"
import Paw2 from "@/components/UI kit/paws2/paws"
import Paw3 from "@/components/UI kit/paws3/paws"
import Paw4 from "@/components/UI kit/paws4/paws"
import Paw5 from "@/components/UI kit/paws5/paws"

export default function Lk() {

    const [open, setOpen] = useState(false)
    const [chapter, setChapter] = useState("about")

    return (
        <div className={styles.flexContainer}>
            <Login setSlug={undefined} />
            <div className={styles.wrapper}>
                <Paw1 />
                <Paw2 />
                <Paw3 />
                <Paw4 />
                <Paw5 />
                <LkHeader chapter={chapter} setChapter={setChapter} title={"Личный кабинет"} />
                {chapter === "about" && <LkAbout setOpen={setOpen} open={open} />}
                {open && chapter === "about" && <Change />}
                {chapter === "order" && <NowOrder />}
                <div className={styles.footer}>
                    <span className={styles.redline}>300 ветмир</span>
                    <span className={styles.footerText}>ветеринарные препараты для всех видов животных</span>
                </div>
            </div>
        </div>
    )
}