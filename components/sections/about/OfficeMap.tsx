"use client";

import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { aboutPage } from "@/constants";

const position: [number, number] = [aboutPage.mapLat, aboutPage.mapLng];

export default function OfficeMap() {
  const icon = useMemo(
    () =>
      L.divIcon({
        className: "office-pin",
        iconSize: [32, 42],
        iconAnchor: [16, 42],
        popupAnchor: [0, -38],
        html: `<svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#B71C1C" d="M16 41s14-13.2 14-23A14 14 0 1 0 2 18c0 9.8 14 23 14 23z"/><circle cx="16" cy="17" r="6" fill="#fff"/></svg>`,
      }),
    [],
  );

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="z-0 h-105 w-full md:h-130"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <strong>Autodate</strong>
          <br />
          {aboutPage.mapLabel}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
