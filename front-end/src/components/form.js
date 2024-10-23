import React from 'react';
import Button from './button'

// InputField Component
function InputField({ label, type, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}

// Dropdown Component
function Dropdown({ options, onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} className="border p-2 rounded">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

// Form Component
function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="p-4">
      {children}  {/* Allows dynamic components to be passed in */}
      <Button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </Button>
    </form>
  );
}

export { Form, InputField, Dropdown };
