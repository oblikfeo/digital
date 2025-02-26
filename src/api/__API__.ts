'use client'
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://zoo.devsrv.ru',
    headers: {
        authorization: `Bearer ${localStorage.getItem('USER_TOKEN')}`
    }
});