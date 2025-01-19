import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';

const initialData = [
  {
    label: "Polygon 1",
    coordinates: [
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]
  },
  {
    label: "Polygon 2",
    coordinates: [
      [51.515, -0.1],
      [51.52, -0.12],
      [51.52, -0.1]
    ]
  }
];

const MapComponent = () => {
  const [polygons, setPolygons] = useState(initialData);
  const featureGroupRef = useRef(null);

  useEffect(() => {
    const map = featureGroupRef.current._map;

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: featureGroupRef.current
      }
    });
    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (event) => {
      const layer = event.layer;
      featureGroupRef.current.addLayer(layer);

      if (layer instanceof L.Polygon) {
        const coordinates = layer.getLatLngs()[0].map(latlng => [latlng.lat, latlng.lng]);
        const label = prompt("Enter a label for this polygon:");
        if (label) {
          layer.bindPopup(label).openPopup();
          setPolygons([...polygons, { label, coordinates }]);
        }
      }
    });

    polygons.forEach(item => {
      const polygon = L.polygon(item.coordinates, { color: 'blue' }).addTo(map);
      polygon.bindPopup(item.label).openPopup();
      featureGroupRef.current.addLayer(polygon);
    });
  }, [polygons]);

  const retrievePolygons = () => {
    console.log('Polygons as JSON:', JSON.stringify(polygons));
    return polygons;
  };

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "600px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup ref={featureGroupRef} />
      </MapContainer>
      <button onClick={retrievePolygons}>Retrieve Polygons</button>
    </div>
  );
};

export default MapComponent;