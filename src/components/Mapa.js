import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Rectangle, Circle, Popup } from 'react-leaflet';

const Mapa = ({ pontos, areasRetangulares, areasCirculares, editarEntidade, removerEntidade }) => {
  const [mapState] = useState({
    lat: 0,
    lng: 0,
    zoom: 2,
  });

  return (
    <MapContainer
      center={[mapState.lat, mapState.lng]}
      zoom={mapState.zoom}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

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

export default Mapa;
