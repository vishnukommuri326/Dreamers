import React, { useState } from 'react';
import Modal from '../components/modal';
import ToggleButton from '../components/toggle';

function MapSettings({ isOpen, onClose, onTogglePersonal, onToggleFriends, onSearchResults }) {
    const [personalView, setPersonalView] = useState(false);
    const [friendsView, setFriendsView] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Handle personal toggle
    const handlePersonalToggle = () => {
        setPersonalView(!personalView);
        onTogglePersonal(!personalView);
    };

    // Handle friends toggle
    const handleFriendsToggle = () => {
        setFriendsView(!friendsView);
        onToggleFriends(!friendsView);
    };

    // Fetch search results
    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (!query.trim()) {
            // Clear search results if query is empty
            onSearchResults([]);
            return;
        }

        try {
            const response = await fetch(`/api/pins/search?keyword=${query}`);
            if (!response.ok) {
                throw new Error(`Search failed: ${response.statusText}`);
            }
            const results = await response.json();
            onSearchResults(results); // Pass search results to Map.js
        } catch (err) {
            console.error('Search error:', err);
            onSearchResults([]); // Clear results on error
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Map Settings">
            <div className="p-4 space-y-6">
                {/* Search Field */}
                <div className="space-y-2">
                    <label className="text-purpleDark font-bold" htmlFor="search">
                        Search Location
                    </label>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search for a location..."
                        className="border rounded w-full px-3 py-2"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Personal View Toggle */}
                <div className="space-y-2">
                    <label className="text-purpleDark font-bold">Personal View</label>
                    <ToggleButton isOn={personalView} onToggle={handlePersonalToggle} />
                </div>

                {/* Friends View Toggle */}
                <div className="space-y-2">
                    <label className="text-purpleDark font-bold">Friends View</label>
                    <ToggleButton isOn={friendsView} onToggle={handleFriendsToggle} />
                </div>
            </div>
        </Modal>
    );
}

export default MapSettings;
