import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import data from '../data.json';

const Map = () => {
  const { locations } = data;
  const mapCenter = [51.5, 4.6]; // Centre approximatif entre les villes

  return (
    <MapContainer center={mapCenter} zoom={8} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(location => (
        <Marker key={location.id} position={location.coordinates}>
          <Popup>
            <strong>{location.name}</strong>
            <p>{location.details}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
