import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useMemo,
} from "react";



export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        toggleModal,
        setModalVisible

      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
