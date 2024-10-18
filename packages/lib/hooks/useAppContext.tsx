import { useDisclosure } from "./useDisclosure";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

export type AppContextType = {
  searchTerm: string;
  activeFilters: string[];
  setSearchTerm: (term: string) => void;
  toggleFilter: (filterId: string) => void;
  removeFilter: (filterId: string) => void;
  clearAllFilters: () => void;
  onToggleFilter: () => void;
  onCloseFilter: () => void;
  onOpenFilter: () => void;
  isOpenFilter: boolean;
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
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleFilter = useCallback((filterId: string) => {
    setActiveFilters((prev) => {
      if (filterId === "male" || filterId === "female") {
        const withoutGender = prev.filter(
          (id) => id !== "male" && id !== "female"
        );
        return prev.includes(filterId)
          ? withoutGender
          : [...withoutGender, filterId];
      } else {
        return prev.includes(filterId)
          ? prev.filter((id) => id !== filterId)
          : [...prev, filterId];
      }
    });
  }, []);

  const removeFilter = useCallback((filterId: string) => {
    setActiveFilters((prev) => prev.filter((id) => id !== filterId));
  }, []);

  const clearAllFilters = useCallback(() => {
    setActiveFilters([]);
  }, []);

  const {
    isOpen: isOpenFilter,
    onOpen: onOpenFilter,
    onClose: onCloseFilter,
    onToggle: onToggleFilter,
  } = useDisclosure();

  const value: AppContextType = {
    searchTerm,
    activeFilters,
    setSearchTerm,
    toggleFilter,
    removeFilter,
    isOpenFilter,
    onOpenFilter,
    onCloseFilter,
    onToggleFilter,
    clearAllFilters,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
