import { createContext, useState, type ReactNode} from 'react';

type ModalContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
