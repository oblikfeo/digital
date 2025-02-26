'use client'; // Убедитесь, что файл исполняется на клиенте

import axios from 'axios';

let token = '';

if (typeof window !== 'undefined') {
    // Этот блок будет выполнен только на клиенте
    token = localStorage.getItem('USER_TOKEN');
}

export const axiosInstance = axios.create({
    baseURL: 'https://zoo.devsrv.ru',
    headers: {
        Authorization: `Bearer ${token}` // Используйте переменную token
    }
});