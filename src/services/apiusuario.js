import Axios from 'axios';


//RODAR O TERMINAL PARA SERVIDOR: " json-server --watch -p 8080 db.json "
const api = Axios.create({
    baseURL: 'http://localhost:8080', // Substitua pela URL da sua API
    timeout: 10000 // Tempo limite das solicitações em milissegundos
});

export default api;

export const editarPessoa = async (usuario) => {
    console.log(usuario, 'Edit');
    try {
        // const data = await api.put(`/list/${usuario.id}`, usuario);
    } catch (error) {}
};

export const listarPessoa = async () => {
    let response = null; // Inicialize como null
    try {
        response = await api.get('/usuario');
         // Para acessar os dados, use response.data
    } catch (error) {
        console.error(error);
    }
    return response;
};

export const salvarPessoa = async (data) => {
    try {
        const response = await api.post('/usuario', data); // 'data' contém os dados que você deseja enviar no corpo da solicitação.
        return response.data;
    } catch (error) {
        // Lidar com erros, se necessário.
        console.error(error);
        throw error;
    }
};
