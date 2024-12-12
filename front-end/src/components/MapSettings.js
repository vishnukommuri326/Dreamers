import React, { useState, useEffect, useContext } from 'react';
import Modal from '../components/modal';
import ToggleButton from '../components/toggle';
import { UserContext } from '../UserContext';

function MapSettings({ isOpen, onClose, onTogglePersonal, onToggleFriends }) {
  const { isLoggedIn } = useContext(UserContext); // Get isLoggedIn status
  const [personalView, setPersonalView] = useState(() => {
    const storedValue = localStorage.getItem('personalView');
    return storedValue === null ? false : JSON.parse(storedValue);
  });

  const [friendsView, setFriendsView] = useState(() => {
    const storedValue = localStorage.getItem('friendsView');
    return storedValue === null ? false : JSON.parse(storedValue);
  });

  const [showGuestModal, setShowGuestModal] = useState(false); // Modal for guests

  const handlePersonalToggle = () => {
    if (!isLoggedIn) {
      setShowGuestModal(true); // Show modal if guest
      return;
    }

    const newPersonalView = !personalView;
    setPersonalView(newPersonalView);
    localStorage.setItem('personalView', JSON.stringify(newPersonalView));
    onTogglePersonal(newPersonalView);
  };

  const handleFriendsToggle = () => {
    if (!isLoggedIn) {
      setShowGuestModal(true); // Show modal if guest
      return;
    }

    const newFriendsView = !friendsView;
    setFriendsView(newFriendsView);
    localStorage.setItem('friendsView', JSON.stringify(newFriendsView));
    onToggleFriends(newFriendsView);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Map Settings">
        <div className="p-4 space-y-6">
          <div className="space-y-2">
            <label className="text-purpleDark font-bold">Personal View Toggle</label>
            <ToggleButton
              isOn={personalView}
              onToggle={handlePersonalToggle}
            />
          </div>

          <div className="space-y-2">
            <label className="text-purpleDark font-bold">Friends View Toggle</label>
            <ToggleButton
              isOn={friendsView}
              onToggle={handleFriendsToggle}
            />
          </div>
        </div>
      </Modal>

      {/* Guest modal */}
      <Modal
        isOpen={showGuestModal}
        onClose={() => setShowGuestModal(false)}
        title="Feature Unavailable"
      >
        <div className="p-4 text-center">
          <p className="text-purpleDark mb-4">
            These features are only available for registered users.
          </p>
          <button
            onClick={() => {
              // Redirect to the registration page (update with actual route)
              window.location.href = '/register';
            }}
            className="bg-purpleMedium text-white px-4 py-2 rounded-md hover:bg-purpleDarker transition"
          >
            Create an Account
          </button>
        </div>
      </Modal>
    </>
  );
}

export default MapSettings;
