import React from 'react';

export default function DateInput({
  labelDescription = 'Descrição do label',
  inputValue = '2024-01-30',
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
        type="date"
        className="border"
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
}
