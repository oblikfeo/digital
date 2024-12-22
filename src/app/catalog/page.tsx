'use client'
import styles from "./page.module.css"
import Login from "@/components/login/login";
import CatalogHeader from "@/components/catalogHeader/catalogHeader";
import { useState } from "react";
import ListCard from '../../components/listCard/listCard'
import SquareCard from '../../components/squareСard/squareCard'

export default function Catalog() {

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
        </div>
    );
}