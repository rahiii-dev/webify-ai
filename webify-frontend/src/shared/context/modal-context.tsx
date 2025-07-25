import React, { createContext, useState } from "react";

type ModalContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  content: React.ReactNode;
  setContent: (node: React.ReactNode) => void;
  openModal: (node: React.ReactNode) => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (node: React.ReactNode) => {
    setContent(node);
    setOpen(true);
  }

  return (
    <ModalContext.Provider value={{ open, setOpen, content, setContent, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
