import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
    // outra api: https://fake-ecommerce-api.netlify.app/docs
});

export default api;