import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  SVGOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MapMarker from "./MapMarker";
import { useDispatch, useSelector } from "react-redux";
import { mapRequest } from "../../../Redux/Actions/MapAction";
import { CountryData } from "./CountryData";
import "../ShipmentTable/Booking.css";

// Define the position and coordinates
const position = [10.586958, -34.623453];

// const numberIcon = L.divIcon({
//   html: `<div style="color: red; font-size: 16px; background: white; border-radius: 50%; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center;">${markernumber}</div>`,
//   className: "",
//   iconSize: [24, 24],
// });

// Define the component
export default function Americas() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const dispatch = useDispatch();
  const handleMarkerClick = (id) => {
    setShowModal(true);
    setSelectedMarkerId(id);
    console.log("id.", id);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMarkerId(null);
  };
  // useEffect(() => {
  //   dispatch(mapRequest());
  // }, [dispatch]);

  const MapDatas = useSelector((state) => state.Map?.MapData?.countries);
  console.log("map....", MapDatas);

  const filteredCountryData = MapDatas
    ? CountryData.filter((country) =>
        MapDatas.some((data) => data.country_code === country.countryCode)
      )
    : [];

  // const filteredCountryData = MapDatas
  // ? MapDatas.filter((data) =>
  //     CountryData.some((country) => country.countryCode === data.country_code)
  //   )
  // : [];
  console.log("filter", filteredCountryData);
  // const markernumber = MapDatas?.map((data) => data.no_of_shipments);

  return (
    <div className="mb-5">
      <MapContainer
        center={position}
        zoom={1.5}
        minZoom={1.5}
        style={{ height: "300px", position: "relative" }}
      >
        <TileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png" />
        {/* Markers with icon 1 */}
        {filteredCountryData.map((location, index) => {
          const mapData = MapDatas.find(
            (data) => data.country_code === location.countryCode
          );
          const markerNumber = mapData?.no_of_shipments || 0;
          const markerId = mapData.country_code;
          console.log("datamap", markerId);

          const numberIcon = L.divIcon({
            html: `<div style="color: white; font-size: 10px; background: red; border-radius: 50%; width: 35px; height: 35px; display: flex; justify-content: center; align-items: center;border:5px solid white">${markerNumber}</div>`,
            className: "",
            iconSize: [24, 24],
          });
          return (
            <Marker
              key={index}
              position={[location.latitude, location.longitude]}
              icon={numberIcon}
              eventHandlers={{
                click: () => handleMarkerClick(markerId),
              }}
            ></Marker>
          );
        })}
      </MapContainer>
      <MapMarker
        showModal={showModal}
        onClose={handleModalClose}
        markerId={selectedMarkerId}
        // mapDataa={MapDatas}
      />
    </div>
  );
}
