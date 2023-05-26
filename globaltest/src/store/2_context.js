import React, { useState, createContext, useContext } from "react";

const ModalContext = createContext();
export const useModalStore = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
