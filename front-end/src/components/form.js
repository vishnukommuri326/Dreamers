import React, { useState } from 'react';
import Button from './button';

// InputField Component with validation, tooltips, and character count
function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  errorMessage,
  tooltip,
  maxLength,
}) {
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !value) {
      setError(errorMessage || `${label} is required.`);
    } else {
      setError('');
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-purpleGrey">
        {label}
        {tooltip && (
          <span
            title={tooltip}
            className="ml-2 text-gray-400 cursor-pointer"
          >
            ?
          </span>
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        maxLength={maxLength}
        className="border p-2 rounded w-full"
      />
      {maxLength && (
        <p className="text-xs text-gray-500 mt-1">
          {value.length}/{maxLength} characters
        </p>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

// Dropdown Component with multi-select support
function Dropdown({ options, onSelect, isMulti }) {
  const handleChange = (e) => {
    if (isMulti) {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      onSelect(selectedOptions);
    } else {
      onSelect(e.target.value);
    }
  };

  return (
    <select
      onChange={handleChange}
      multiple={isMulti}
      className="border p-2 rounded bg-purpleLighter border-purpleGrey text-gray-400"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

// Textarea Component
function Textarea({ label, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-purpleGrey">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 rounded w-full h-32"
      />
    </div>
  );
}

// DynamicFieldList Component for dynamic field generation
function DynamicFieldList({ fields, setFields }) {
  const addField = () => {
    setFields([...fields, { value: '' }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const updateField = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].value = value;
    setFields(updatedFields);
  };

  return (
    <div className="mb-4">
      {fields.map((field, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            value={field.value}
            onChange={(e) => updateField(index, e.target.value)}
            className="border p-2 rounded w-full mr-2"
          />
          <button
            type="button"
            onClick={() => removeField(index)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addField} className="text-blue-500">
        Add Field
      </button>
    </div>
  );
}

// Form Component with reset button and loading state
function Form({ children, onSubmit, onReset, isLoading }) {
  return (
    <form onSubmit={onSubmit} onReset={onReset} className="p-4">
      {children} {/* Allows dynamic components to be passed in */}
      <div className="flex justify-between mt-4">
        <Button type="reset">Reset</Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

// Export all components
export { Form, InputField, Dropdown, Textarea, DynamicFieldList };
