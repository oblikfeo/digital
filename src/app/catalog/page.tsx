'use client'
import styles from "./page.module.css"
import Login from "@/components/login/login";
import CatalogHeader from "@/components/catalogHeader/catalogHeader";
import { useEffect, useState } from "react";
import ListCard from '../../components/listCard/listCard'
import SquareCard from '../../components/squareСard/squareCard'
import { Toaster, toaster } from "@/components/ui/toaster"

export default function Catalog() {

    useEffect(() => {
        toaster.create({
            title: "Успешная авторизация",
            description: "Добро пожаловать admin",
            type: "success",
            duration: 4000,
        })
    })

    // switch кейсы переключения вида каталога
    const [view, setView] = useState('list')
    let viewCatalog;
    switch (view) {
        case "list":
            viewCatalog = (
                <ListCard />
            )
            break;

        case "square":
            viewCatalog = (
                <SquareCard />
            )
            break;
    }

    return (
        <div className={styles.flexContainer}>
            <Login />
            <div className={styles.flex}>
                <CatalogHeader
                    setView={setView}
                />
                <div className={view === 'list' ? styles.list : styles.square}>
                    {viewCatalog}
                </div>
            </div>
            <Toaster />
        </div>
    );
}