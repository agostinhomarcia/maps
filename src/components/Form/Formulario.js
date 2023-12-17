import React, { useState } from 'react';

import './style.css'

const Formulario = ({ adicionarPonto, adicionarAreaRetangular, adicionarAreaCircular }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('ponto')

  const handleAdicionar = () => {
    const novaEntidade = {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      descricao,
    };

    if (tipo === 'ponto') {
      adicionarPonto(novaEntidade);
    } else if (tipo === 'areaRetangular') {
      adicionarAreaRetangular(novaEntidade);
    } else if (tipo === 'areaCircular') {
      adicionarAreaCircular(novaEntidade);
    }

    // Limpar campos após adicionar
    setLatitude('');
    setLongitude('');
    setDescricao('');
  };

  return (
    <div>
      <h2>Formulário</h2>
      <label>
        Latitude:
        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </label>
      <label>
        Longitude:
        <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </label>
      <label>
        Descrição:
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </label>
      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="ponto">Ponto de Interesse</option>
          <option value="areaRetangular">Área Retangular</option>
          <option value="areaCircular">Área Circular</option>
        </select>
      </label>
      <button onClick={handleAdicionar}>Adicionar</button>
    </div>
  );
};

export default Formulario;
