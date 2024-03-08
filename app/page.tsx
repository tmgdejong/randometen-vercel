import React from 'react';
import RandomEten from './randometen'; // Import the client component

export default function Home() {
  // No need for state or useEffect here (data passed as props)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{ background: 'linear-gradient(to bottom, #ffcc00, #ff6699, #cc33ff)' }}>
      <RandomEten /> {/* Render the client component */}
    </main>
  );
}
