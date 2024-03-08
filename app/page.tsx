import React from 'react';
import RandomEten from './randometen'; // Import the client component

export default function Home() {
  // No need for state or useEffect here (data passed as props)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-blue">
      <RandomEten /> {/* Render the client component */}
    </main>
  );
}