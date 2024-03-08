"use client";
import React, { useState, useEffect } from 'react';

interface ItemType {
  id: number;
  name: string;
}

const RandomEten: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]); // Array to store items from JSON file
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null); // Selected item to display
  const [isCycling, setIsCycling] = useState<boolean>(false); // Flag to control animation

  useEffect(() => {
    // Fetch items from JSON file (replace 'your-json-file.json' with the actual file path)
    fetch('/eten.json')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  const handleButtonClick = () => {
    if (items.length === 0) {
      console.warn('No items available.');
      return;
    }

    setIsCycling(true);

    // Simulate cycling animation for 3 seconds (adjust the duration as needed)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedItem(items[randomIndex]);
      setIsCycling(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={handleButtonClick}
        disabled={isCycling}
      >
        {isCycling ? 'Cycling...' : 'Cycle Random Item'}
      </button>
      <div className={`text-xl ${isCycling ? 'animate-spin' : ''}`}>
        {selectedItem !== null ? `${selectedItem.id}: ${selectedItem.name}` : 'No item selected'}
      </div>
    </div>
  );
};

export default RandomEten;