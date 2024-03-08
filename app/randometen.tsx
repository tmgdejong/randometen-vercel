"use client";
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

interface ItemType {
  id: number;
  name: string;
}

const RandomEten: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]); // Array to store items from JSON file
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null); // Selected item to display
  const [isCycling, setIsCycling] = useState<boolean>(false); // Flag to control animation
  const [isConfetti, setIsConfetti] = useState<boolean>(false); // Flag to control animation


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

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedItem(items[randomIndex]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsCycling(false);
      setIsConfetti(true);
    }, 2000);

    setTimeout(() => {
      setIsConfetti(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-purple-500 text-white px-6 py-3 rounded-lg mb-6 text-2xl font-bold"
        onClick={handleButtonClick}
        disabled={isCycling}
      >
        {isCycling ? 'Nadenken...' : 'Randomize'}
      </button>
      <div className={`text-xl font-cursive text-center md:text-3xl`}>
        {selectedItem !== null ? 
          (selectedItem.id < 110 ? 
            `${selectedItem.id}: ${selectedItem.name}` 
            : `${selectedItem.name}`) 
          : 'Klik voor random eten!'}
      </div>
      {selectedItem !== null && !isCycling ? (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={isConfetti}
        />
      ) : null}
    </div>
  );
};

export default RandomEten;