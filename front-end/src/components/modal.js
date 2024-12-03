import React, { useContext, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MapSettings from './MapSettings';
import PinModal from './pinModal';
import { PinContext } from '../PinContext';
import 'leaflet/dist/leaflet.css';

// Custom SVG marker
const createCustomIcon = () => {
    return L.divIcon({
        className: 'custom-icon-container',
        html: `
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" class="custom-icon">
            <path d="M12 2C8.134 2 5 5.134 5 9c0 6.23 7 13 7 13s7-6.77 7-13c0-3.866-3.134-7-7-7zm0 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
          </svg>
        `,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
    });
};

const MapComponent = () => {
    const { pins, addPin } = useContext(PinContext);
    const [isSettingsOpen, setSettingsOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const toggleSettingsModal = () => {
        setSettingsOpen(!isSettingsOpen);
    };

    const filteredPins = searchResults.length > 0 ? searchResults : pins;

    return (
        <div className="map-wrapper w-full h-full relative">
            {/* Map Settings Button */}
            <button
                onClick={toggleSettingsModal}
                className="absolute top-4 right-4 z-[1000] bg-white p-2 rounded-full shadow-md hover:bg-purpleLight"
            >
                Settings
            </button>

            {/* Map */}
            <MapContainer
                center={[40.7309, -73.9973]} // Initial location
                zoom={15}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {/* Render Pins */}
                {filteredPins.map((pin) => (
                    <Marker key={pin.id} position={pin.location} icon={createCustomIcon()}>
                        <Popup>{pin.message}</Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Map Settings Modal */}
            {isSettingsOpen && (
                <MapSettings
                    isOpen={isSettingsOpen}
                    onClose={toggleSettingsModal}
                    onSearchResults={setSearchResults} // Pass search results here
                    onTogglePersonal={() => {}}
                    onToggleFriends={() => {}}
                />
            )}
        </div>
    );
};

export default MapComponent;
