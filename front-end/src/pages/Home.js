import React, { useState } from 'react';
import '../assets/styles/App.css';
import map from '../assets/images/map.png';
import Button from '../components/button';
import PinModal from '../components/pinModal';
import PinCreation from '../components/pinCreation';

/**
 * A React component that represents a single page of the app.
 * Use this file to create new pages as needed.
 * Don't forget to add the new route to App.js.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const Home = (props) => {

  // Pin creation state
  const [pins, setPins] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPinLocation, setNewPinLocation] = useState({ x: 0, y: 0 });

  // Handle clicking on the map to place a new pin
  const handleMapClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setNewPinLocation({ x, y });
    setModalOpen(true);  // Open the modal for pin creation
  };

  // Handle creating a new pin from modal submission
  const handleCreatePin = (description) => {
    setPins([...pins, { description, x: newPinLocation.x, y: newPinLocation.y }]);
    setModalOpen(false);  // Close modal after creating pin
  };

  // Handle reporting a pin
  const handleReportPin = (index) => {
    alert(`Reporting pin ${index}`);
  };

  // Zoom functionality for map
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
          <Button>Map Settings</Button>
        </div>

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

        <div className="map-settings">
          <button>Map Settings</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
