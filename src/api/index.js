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
  try {
      const response = await api.get(`/usuario`).then(response.data)
  } catch (error) {
      
  }
  return(response);
}

export const salvarPessoa=async() =>{
  try {
      const response = await api.po(`/usuario`).then(response.data)
  } catch (error) {
      
  }
  return(response);
}