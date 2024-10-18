import React, { useState } from "react";

export type DisclosureType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

export function useDisclosure(
  initialState: boolean = false
): DisclosureType {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }

  return { isOpen, onOpen, onClose, onToggle };
}
