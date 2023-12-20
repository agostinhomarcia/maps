/* eslint-disable no-unused-vars */

import { MapContainer, Marker, Rectangle, Circle, Popup } from 'react-leaflet';

const Visualizacao = ({ pontos, areasRetangulares, areasCirculares }) => {
  // Funções de edição e remoção (pode variar dependendo da estrutura dos dados)
  const editarEntidade = (entidade) => {
    // Lógica de edição aqui (usando mockAPI.editarPonto, editarAreaRetangular, editarAreaCircular)
    console.log('Editar:', entidade);
  };

  const removerEntidade = (id) => {
    // Lógica de remoção aqui (usando mockAPI.removerPonto, removerAreaRetangular, removerAreaCircular)
    console.log('Remover:', id);
  };

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      {/* TileLayer e outras configurações do mapa */}

      {/* Mostrar pontos no mapa */}
      {pontos.map((ponto, index) => (
        <Marker
          key={index}
          position={[ponto.latitude, ponto.longitude]}
          eventHandlers={{
            click: () => editarEntidade(ponto),
          }}
        >
          <Popup>{ponto.descricao}</Popup>
        </Marker>
      ))}

      {/* Mostrar áreas retangulares no mapa */}
      {areasRetangulares.map((area, index) => (
        <Rectangle
          key={index}
          bounds={[
            [area.latTopLeft, area.lonTopLeft],
            [area.latBottomRight, area.lonBottomRight],
          ]}
          eventHandlers={{
            click: () => editarEntidade(area),
          }}
        >
          <Popup>{area.descricao}</Popup>
        </Rectangle>
      ))}

      {/* Mostrar áreas circulares no mapa */}
      {areasCirculares.map((area, index) => (
        <Circle
          key={index}
          center={[area.latitude, area.longitude]}
          radius={area.raio * 1000} // convert km to meters
          eventHandlers={{
            click: () => editarEntidade(area),
          }}
        >
          <Popup>{area.descricao}</Popup>
        </Circle>
      ))}
    </MapContainer>
  );
};

export default Visualizacao;
