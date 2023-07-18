import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <ProjectContext.Provider
      value={{ selectedItem, selectItem, setIsOpen, isOpen }}>
      {children}
    </ProjectContext.Provider>
  );
};
