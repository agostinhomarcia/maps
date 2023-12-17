import axios from 'axios';

const API_URL = 'http://localhost:3001';

const mockAPI = {
  getPontos: () => axios.get(`${API_URL}/pontos`),
  getAreasRetangulares: () => axios.get(`${API_URL}/areasRetangulares`),
  getAreasCirculares: () => axios.get(`${API_URL}/areasCirculares`),
  adicionarPonto: (ponto) => axios.post(`${API_URL}/pontos`, ponto),
  adicionarAreaRetangular: (area) => axios.post(`${API_URL}/areasRetangulares`, area),
  adicionarAreaCircular: (area) => axios.post(`${API_URL}/areasCirculares`, area),
  editarPonto: (id, ponto) => axios.put(`${API_URL}/pontos/${id}`, ponto),
  editarAreaRetangular: (id, area) => axios.put(`${API_URL}/areasRetangulares/${id}`, area),
  editarAreaCircular: (id, area) => axios.put(`${API_URL}/areasCirculares/${id}`, area),
  removerPonto: (id) => axios.delete(`${API_URL}/pontos/${id}`),
  removerAreaRetangular: (id) => axios.delete(`${API_URL}/areasRetangulares/${id}`),
  removerAreaCircular: (id) => axios.delete(`${API_URL}/areasCirculares/${id}`),
};

export default mockAPI;
