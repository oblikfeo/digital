'use client'
import styles from "./page.module.css"
import Login from "@/components/login/login";
import CatalogHeader from "@/components/catalogHeader/catalogHeader";
import { useEffect, useState } from "react";
import ListCard from '../../components/listCard/listCard'
import SquareCard from '../../components/squareСard/squareCard'
import { toaster, Toaster } from "@/components/Toaster/toaster"
import Paw1 from "@/components/UI kit/paws1/paws"
import Paw2 from "@/components/UI kit/paws2/paws"
import Paw3 from "@/components/UI kit/paws3/paws"
import Paw4 from "@/components/UI kit/paws4/paws"
import Paw5 from "@/components/UI kit/paws5/paws"
import { Suspense } from 'react';
import { axiosInstance } from "../../api/__API__";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/slices/userSlice";
import { redirect, useSearchParams, useRouter } from "next/navigation";

export default function Catalog() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [productsFetch, setProductsFetch] = useState([])
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1)
    const [totalPage, setTotalPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [check, setCheck] = useState(false)

    const [find, setFind] = useState<string>(searchParams.get('query') || '')
    const [sortBy, setSortBy] = useState<string>(searchParams.get('order') || '')
    const [slug, setSlug] = useState<string>(searchParams.get('slug') || '')
    const [view, setView] = useState(searchParams.get('view') || 'list')

    const [isFirstRender, setIsFirstRender] = useState(true)

    const dispatch = useDispatch()

    // Обновляем URL при изменении параметров
    useEffect(() => {
        const params = new URLSearchParams();
        if (find) params.set('query', find);
        if (sortBy) params.set('order', sortBy);
        if (slug) params.set('slug', slug);
        if (view) params.set('view', view);
        if (currentPage > 1) params.set('page', currentPage.toString());
        
        const newUrl = params.toString() ? `?${params.toString()}` : '';
        router.push(`/catalog${newUrl}`, { scroll: false });
    }, [find, sortBy, slug, view, currentPage, router]);

    useEffect(() => {
        setCheck(true)
        axiosInstance.get('/api/v1/user', {
            headers: { Authorization: `Bearer ${localStorage.getItem("USER_TOKEN")}` }
        }).then((response) => {
            dispatch(setUserData(response?.data))
        }).catch((error) => {
            if (error.status === 401) {
                localStorage.removeItem("USER_TOKEN")
                setCheck(false)
                redirect('/')
            }
        })
    }, [])

    useEffect(() => {
        setIsLoading(true)
        axiosInstance.get(getQueries(currentPage, find, sortBy, slug), {
            headers: { Authorization: `Bearer ${localStorage.getItem("USER_TOKEN")}` }
        }).then((response) => {
            setProductsFetch(response.data.data)
            setTotalPage(response.data.last_page)
        }).catch((error) => console.error(error))
            .finally(() => {
                setIsLoading(false)
                if (!isFirstRender) {
                    toaster.create({
                        title: "Каталог обновлен",
                        type: "success",
                        duration: 2000,
                    })
                }
                setIsFirstRender(false)
            })
    }, [currentPage, find, sortBy, slug])

    useEffect(() => {
        if (productsFetch.length === 0 && currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [currentPage, productsFetch])

    const getQueries = (currentPage: number, find?: string, sortBy?: string, slug?: string) => {
        let baseUrl = `https://zoo.devsrv.ru/api/v1/shop/products?`

        if (currentPage) {
            baseUrl += `page=${currentPage}`
        }
        if (find) {
            baseUrl += `&query=${find}`
        }
        if (sortBy) {
            baseUrl += `&order=${sortBy}`
        }
        if (slug) {
            baseUrl += `&slugs[]=${slug}`
        }
        return baseUrl
    }

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
            <Login
                setSlug={setSlug}
            />
            <div className={styles.flex}>
                <Paw1 />
                <Paw2 />
                <Paw3 />
                <Paw4 />
                <Paw5 />
                <Suspense fallback={<></>}>
                    {check && <CatalogHeader
                        setView={setView}
                        setSortBy={setSortBy}
                        setFind={setFind}
                        setProductsFetch={setProductsFetch}
                        setSlug={setSlug}
                        initialFind={find}
                        initialSortBy={sortBy}
                        initialSlug={slug}
                        initialView={view}
                    />}
                </Suspense>

                {check && <div className={view === 'list' ? styles.list : styles.square}>
                    {isLoading ? (
                        <span className={styles.load}>загрузка товаров...</span>
                    ) : productsFetch.length === 0 && find ? (
                        <div className={styles.noFind}>
                            <h1>Ошибка</h1>
                            <h2>Такой запрос не найден.</h2>
                        </div>
                    ) : (
                        viewCatalog
                    )}
                </div>}
                {check && <div className={styles.footer}>
                    <span className={styles.redline}>ЗооВетМир</span>
                    <span className={styles.footerText}>ветеринарные препараты для всех видов животных</span>
                </div>}
            </div>
            <Toaster />
        </div>
    );
}