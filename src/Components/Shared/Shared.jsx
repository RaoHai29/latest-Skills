// SharedStateContext.js
import React, { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export function useSharedState() {
  return useContext(SharedStateContext);
}

export function SharedStateProvider({ children }) {
  const [images, setImages] = useState([]);
  
  const addImage = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <SharedStateContext.Provider value={{ images, addImage }}>
      {children}
    </SharedStateContext.Provider>
  );
}
