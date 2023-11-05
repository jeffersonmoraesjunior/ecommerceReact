import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:8080", // Substitua pela URL da sua API
  timeout: 10000, // Tempo limite das solicitações em milissegundos
  
});

export default api;

export const editarPessoa=async(usuario) =>{
  console.log(usuario,"Edit")
  try {
      const data = await api.put(`/lista/${usuario.id}`,usuario)
  } catch (error) {
      
  }
}

export const listarPessoa=async() =>{
    const response = await api.get(`/usuario`).then(response.data)
  try {
      const response = await api.get(`/usuario`).then(response.data)
  } catch (error) {
      
  }
  return(response);
}

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