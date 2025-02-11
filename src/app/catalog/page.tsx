'use client'
import styles from "./page.module.css"
import Login from "@/components/login/login";
import CatalogHeader from "@/components/catalogHeader/catalogHeader";
import { useEffect, useState } from "react";
import ListCard from '../../components/listCard/listCard'
import SquareCard from '../../components/squareСard/squareCard'
import { Toaster, toaster } from "@/components/Toaster/toaster"
import Paw1 from "@/components/UI kit/paws1/paws"
import Paw2 from "@/components/UI kit/paws2/paws"
import Paw3 from "@/components/UI kit/paws3/paws"
import Paw4 from "@/components/UI kit/paws4/paws"
import Paw5 from "@/components/UI kit/paws5/paws"
import axios from "axios";

export default function Catalog() {

    const [productsFetch, setProductsFetch] = useState([]) // рендерим этот массив
    const [currentPage, setCurrentPage] = useState(1) // текущая страница пагинации
    const [totalPage, setTotalPage] = useState(1) // последняя страница пагинации
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://zoo.devsrv.ru/api/v1/shop/products?page=${currentPage}`).then((response) => {
            setProductsFetch(response.data.data)
            setTotalPage(response.data.last_page)
        }).catch((error) => console.error(error))
            .finally(() => setIsLoading(false))
        console.log(currentPage)
    }, [currentPage])

    useEffect(() => {
        toaster.create({
            title: "Успешная авторизация",
            description: "Добро пожаловать admin",
            type: "success",
            duration: 4000,
        })
    }, [])



    // switch кейсы переключения вида каталога
    const [view, setView] = useState('list')
    let viewCatalog;
    switch (view) {
        case "list":
            viewCatalog = (
                <ListCard productsFetch={productsFetch} currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
            )
            break;

        case "square":
            viewCatalog = (
                <SquareCard productsFetch={productsFetch} currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
            )
            break;
    }

    return (
        <div className={styles.flexContainer}>
            <Login setProductsFetch={setProductsFetch} />
            <div className={styles.flex}>
                <Paw1 />
                <Paw2 />
                <Paw3 />
                <Paw4 />
                <Paw5 />
                <CatalogHeader
                    setView={setView}
                    setProductsFetch={setProductsFetch}
                    setTotalPage={setTotalPage}
                />
                <div className={view === 'list' ? styles.list : styles.square}>
                    {isLoading ? <><span className={styles.load}>загрузка товаров...</span></> : viewCatalog}
                </div>
                <div className={styles.footer}>
                    <span className={styles.redline}>300 ветмир</span>
                    <span className={styles.footerText}>ветеринарные препараты для всех видов животных</span>
                </div>
            </div>
            <Toaster />
        </div>
    );
}