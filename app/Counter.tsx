'use client';
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <button className="mr-4 border p-3" onClick={() => setNumber(number - 1)}>
        Subtract 1
      </button>
      <h1>{number}</h1>
      <button className="ml-4 border p-3" onClick={() => setNumber(number + 1)}>
        Add 1
      </button>
    </>
  );
}
