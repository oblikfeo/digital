import { CartState } from "@/redux/slices/cartSlice";
import axios from "axios";

export interface ThunkConfig<T> {
    rejectValue: T,
    state: CartState
}

export const fetchCatalog =
    async () => {
        const response = await axios.get("http://147.45.157.15:8000/api/v1/shop/products")
        return response.data
    }