import React from 'react';

function Button({ children }) {
  return (

    <button className="bg-purpleMedium hover:bg-purpleDark active:bg-purpleDarker text-white py-2 px-4 rounded">
      {children}
    </button>
  );
}

export default Button;

