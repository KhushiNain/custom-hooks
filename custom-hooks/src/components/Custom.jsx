import React from 'react'; 
import { useState, useEffect } from 'react';
const useStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
      sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };




export default function Custom() {
    const [textValue, setTextValue] = useStorage('textValue', '');
    const handleInputChange = (event) => {
        setTextValue(event.target.value);
    };
  return ( 
    <div>
      <input
        type="text"
        value={textValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  
  )
}
