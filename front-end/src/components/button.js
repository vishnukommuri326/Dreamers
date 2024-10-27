import React from 'react';

function Button({ children }) {
  return (

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-10 rounded">
      {children}
    </button>
  );
}

export default Button;

