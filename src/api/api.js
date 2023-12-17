import axios from 'axios';

const API_URL = 'https://api.mock.com'; // Substitua pelo URL da sua API mock

const mockAPI = {
  getPontos: () => axios.get(`${API_URL}/pontos`),
  getAreasRetangulares: () => axios.get(`${API_URL}/areasRetangulares`),
  getAreasCirculares: () => axios.get(`${API_URL}/areasCirculares`),
  adicionarPonto: (ponto) => axios.post(`${API_URL}/pontos`, ponto),
  adicionarAreaRetangular: (area) => axios.post(`${API_URL}/areasRetangulares`, area),
  adicionarAreaCircular: (area) => axios.post(`${API_URL}/areasCirculares`, area),
  // Adicione métodos para editar e remover conforme necessário
};

export default mockAPI;
