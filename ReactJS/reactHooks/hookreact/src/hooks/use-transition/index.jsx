import React, { useState, useTransition } from 'react';

export const TransitionExample = () => {
  const [input, setInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Non-urgent update
    startTransition(() => {
      setFilteredItems(
        items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      );
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search items..."
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};