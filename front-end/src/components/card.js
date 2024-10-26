import React from 'react';

function Card({ title, children }) {
  return (
    <div className="bg-purpleLight text-purpleDark shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Card;
