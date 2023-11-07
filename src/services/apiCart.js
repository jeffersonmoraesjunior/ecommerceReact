import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://654948b1dd8ebcd4ab247037.mockapi.io/trabalhoFinalReact', // Substitua pela URL da sua API
    timeout: 10000 // Tempo limite das solicitações em milissegundos

});
export default api;

// export const editarProduct = async (cart) => {
//     console.log(cart, 'Edit');
//     try {
//         const data = await api.put(`/lista/${cart.id}`, cart);
//     } catch (error) {}
// };

// export const listarProduct = async () => {
//     const response = await api.get(`/cart`).then(response.data);
//     try {
//         const response = await api.get(`/cart`).then(response.data);
//     } catch (error) {}
//     return response;
// };




