import { ref } from "vue"
import axios from "axios"

export default function useProducts() {
    const featuredProducts = ref([]);
    const products = ref([])
    const categories = ref([]);

    const getFeaturedProducts = async (limit) => {
        let response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
        featuredProducts.value = response.data;
    }

    const getProducts = async (limit) => {
        let response = await axios.get(`https://fakestoreapi.com/products?sort=desc&&limit=${limit}`);
        products.value = response.data;
    }

    const getCategories = async () => {
        let response = await axios.get('https://fakestoreapi.com/products/categories');
        categories.value = response.data;
    }

    return {
        featuredProducts,
        categories,
        products,
        getFeaturedProducts,
        getCategories,
        getProducts
    }
}