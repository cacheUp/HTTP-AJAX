import React, { useState, createContext } from "react";

export const UpdatedContext = createContext();

function UpdatedProvider(props) {
  const [isUpdated, setIsUpdated] = useState(false);
  const updatedContext = {
    isUpdated,
    setIsUpdated
  };

  const { children } = props;

  return (
    <UpdatedContext.Provider value={updatedContext}>
      {children}
    </UpdatedContext.Provider>
  );
}

export default UpdatedProvider;
