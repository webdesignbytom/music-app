import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleGallery, setToggleGallery] = useState(false);

  return (
    <ToggleContext.Provider
      value={{
        toggleGallery,
        setToggleGallery,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
