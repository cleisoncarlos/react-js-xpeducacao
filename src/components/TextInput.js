import React from 'react';

export default function TextInput({
  labelDescription,
  inputValue,
  onInputChange = null,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <>
      <label htmlFor="inputName">{labelDescription}</label>
      <input
        id="inputName"
        type="text"
        className="border"
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
}
