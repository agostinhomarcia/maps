import React, { useState, useEffect } from 'react';
import Mapa from './components/Mapa';
import Formulario from './components/Form/Formulario';
import mockAPI from './api/api';

const App = () => {
  const [pontos, setPontos] = useState([]);
  const [areasRetangulares, setAreasRetangulares] = useState([]);
  const [areasCirculares, setAreasCirculares] = useState([]);

  // Carregar dados iniciais
  useEffect(() => {
    const carregarDadosIniciais = async () => {
      try {
        const responsePontos = await mockAPI.getPontos();
        const responseAreasRetangulares = await mockAPI.getAreasRetangulares();
        const responseAreasCirculares = await mockAPI.getAreasCirculares();

        setPontos(responsePontos.data);
        setAreasRetangulares(responseAreasRetangulares.data);
        setAreasCirculares(responseAreasCirculares.data);
      } catch (error) {
        console.error('Erro ao carregar dados iniciais:', error);
      }
    };

    carregarDadosIniciais();
  }, []);

  // Adicionar novo ponto
  const adicionarPonto = async (novoPonto) => {
    try {
      const response = await mockAPI.adicionarPonto(novoPonto);
      setPontos([...pontos, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar ponto:', error);
    }
  };

  // Adicionar nova área retangular
  const adicionarAreaRetangular = async (novaArea) => {
    try {
      const response = await mockAPI.adicionarAreaRetangular(novaArea);
      setAreasRetangulares([...areasRetangulares, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar área retangular:', error);
    }
  };

  // Adicionar nova área circular
  const adicionarAreaCircular = async (novaArea) => {
    try {
      const response = await mockAPI.adicionarAreaCircular(novaArea);
      setAreasCirculares([...areasCirculares, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar área circular:', error);
    }
  };

  return (
    <div>
      <Formulario
        adicionarPonto={adicionarPonto}
        adicionarAreaRetangular={adicionarAreaRetangular}
        adicionarAreaCircular={adicionarAreaCircular}
      />
      <Mapa pontos={pontos} areasRetangulares={areasRetangulares} areasCirculares={areasCirculares} />
    </div>
  );
};

export default App;
