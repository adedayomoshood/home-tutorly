import { useDisclosure } from "./useDisclosure";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { FilterParams } from "../types/filter.types";

export type AppContextType = {
  filter: FilterParams;
  isOpenFilter: boolean;
  onOpenFilter: () => void;
  onCloseFilter: () => void;
  onToggleFilter: () => void;
  handleFilter: (params?: FilterParams) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<FilterParams>({});

  const {
    isOpen: isOpenFilter,
    onOpen: onOpenFilter,
    onClose: onCloseFilter,
    onToggle: onToggleFilter,
  } = useDisclosure();

  const handleFilter = (newFilters?: FilterParams) => {
    setFilter((prevParams) => ({
      ...prevParams,
      ...newFilters,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        filter,
        handleFilter,
        isOpenFilter,
        onOpenFilter,
        onCloseFilter,
        onToggleFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
