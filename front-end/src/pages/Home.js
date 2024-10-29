import React, { useState } from 'react';
import '../assets/styles/App.css';
import map from '../assets/images/map.png';
import Button from '../components/button';
import PinModal from '../components/pinModal';
import PinCreation from '../components/pinCreation';
import MapSettings from '../components/MapSettings';

/**
 * A React component that represents a single page of the app.
 * Use this file to create new pages as needed.
 * Don't forget to add the new route to App.js.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const Home = (props) => {

  // #region map settings stuff
  const [isMapModalOpen, setMapModalOpen] = useState(false);
  // for future use
  const [viewPersonal, setViewPersonal] = useState(false);
  const [viewFriends, setViewFriends] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Open the map settings modal
  const handleMapSettingsClick = () => {
    setMapModalOpen(true);
  };

  // Toggle for Personal Pins
  const handleTogglePersonal = (isOn) => {
    setViewPersonal(isOn);
    console.log('Personal view toggled:', isOn);
  };

  // Toggle for Friends' Pins
  const handleToggleFriends = (isOn) => {
    setViewFriends(isOn);
    console.log('Friends view toggled:', isOn);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // Implement your map searching logic here
  };



  // #endregion


  // #region pin creation
  const [isModalOpen, setModalOpen] = useState(false);
  const [pins, setPins] = useState([]);
  const [newPinLocation, setNewPinLocation] = useState({ x: 0, y: 0 });

  // handle clicking on the map to place a new pin
  const handleMapClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setNewPinLocation({ x, y });
    setModalOpen(true);  // open the modal for pin creation
  };

  // handle creating a new pin from modal submission
  const handleCreatePin = (description) => {
    setPins([...pins, { description, x: newPinLocation.x, y: newPinLocation.y }]);
    setModalOpen(false);  // close modal after creating pin
  };

  // handle reporting a pin
  const handleReportPin = (index) => {
    alert(`Reporting pin ${index}`);
  };

  // #endregion

  // zoom functionality for map
  const [scale, setScale] = useState(1);
  const handleZoom = (event) => {
    const zoomFactor = event.deltaY < 0 ? 0.1 : -0.1;
    setScale((prevScale) => Math.max(1, prevScale + zoomFactor));
  };

  return (
    <div className="App">

      {/* Map Section */}
      <section className="map-container">
        <div className="map-settings">
        <Button onClick={handleMapSettingsClick}>Map Settings</Button>
        </div>

        <MapSettings
        isOpen={isMapModalOpen}
        onClose={() => setMapModalOpen(false)}
        onTogglePersonal={handleTogglePersonal}
        onToggleFriends={handleToggleFriends}
      />

        {/* Render existing pins */}
        {pins.map((pin, index) => (
          <PinCreation
            key={index}
            description={pin.description}
            x={pin.x}
            y={pin.y}
            onReport={() => handleReportPin(index)}
          />
        ))}

        {/* Modal for creating a new pin */}
        <PinModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onCreate={handleCreatePin}
        />

        {/* Map image with zoom and click functionality */}
        <div className="map" onWheel={handleZoom} onClick={handleMapClick}>
          <img
            src={map}
            alt="Map"
            className="zoomable-map"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
