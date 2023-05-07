import React, { useState, useEffect, useRef } from 'react';

import './AutoComplete.css';
import { Option } from './Option';
import { AutoCompleteProps } from './types';
export const AutoComplete: React.FC<AutoCompleteProps> = ({
  placeholder,
  onChangeText,
  inputValue,
  filteredOptions,
  setSearchText,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const buttonRef = useRef<HTMLDivElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChangeText(value);
  };
  const deleteText = () => {
    onChangeText('');
  };
  const onFocus = () => {
    if (filteredOptions && filteredOptions?.length > 0 && !isOpen) {
      setIsOpen(true);
    }
  };

  /*Handle click outside the result box and close the suggestions */

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [buttonRef]);

  /* Avoid changes in the results until the user dont stop typing */

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearchText(inputValue), 250);
    return () => clearTimeout(timeOutId);
  }, [inputValue, setSearchText]);

  return (
    <div className="container" ref={buttonRef}>
      <div className="searchBarContainer">
        <input
          placeholder={placeholder}
          className="searchBar"
          value={inputValue}
          onChange={onChange}
          onFocus={onFocus}
        />
        {inputValue.length > 0 && (
          <div className="deleteIcon" onClick={deleteText}>
            x
          </div>
        )}
      </div>
      <div className="searchResultsContainer">
        {filteredOptions &&
          isOpen &&
          filteredOptions.map((option) => (
            <Option
              label={option?.title}
              changeInput={onChangeText}
              key={`${option?.title}-index`}
            />
          ))}
      </div>
    </div>
  );
};
