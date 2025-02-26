'use client'
import { axiosInstance } from "@/api/__API__"
import styles from "./page.module.css"
import Login from "@/components/login/login"
import ProductHeader from "@/components/productHeader/productHeader"
import ProductUp from "@/components/productUp/productUp"
import Paw1 from "@/components/UI kit/paws1/paws"
import Paw2 from "@/components/UI kit/paws2/paws"
import Paw3 from "@/components/UI kit/paws3/paws"
import Paw4 from "@/components/UI kit/paws4/paws"
import Paw5 from "@/components/UI kit/paws5/paws"
import { setUserData } from "@/redux/slices/userSlice"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function Product() {

    const dispatch = useDispatch()

    useEffect(() => {
        axiosInstance.get('/api/v1/user').then((response) => {
            dispatch(setUserData(response.data))
        }).catch((error) => {
            if (error.code === '401') {
                redirect('/')
            }
        })
    }, [])

    return (
        <div className={styles.flexContainer}>
            <Login setSlug={undefined} />
            <div className={styles.wrapper}>
                <Paw1 />
                <Paw2 />
                <Paw3 />
                <Paw4 />
                <Paw5 />
                <ProductHeader />
                <ProductUp />
            </div>
        </div>
    )
}

