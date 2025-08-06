'use client';

import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import L from 'leaflet';
import 'leaflet-draw';

export default function TestMap() {
  useEffect(() => {
    const map = L.map('map', {
      center: [20.5937, 78.9629],
      zoom: 5,
    });

    L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=GVnTZBti6t11NdTUwnpI`, {
      attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a>',
    }).addTo(map);

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // @ts-ignore – because Leaflet Draw types are partial
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
    });

    map.addControl(drawControl);

    // @ts-ignore – to prevent type error for .on('draw:created')
    map.on(L.Draw.Event.CREATED, function (e: any) {
      const layer = e.layer;
      drawnItems.addLayer(layer);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '80vh', width: '100%' }} />;
}
