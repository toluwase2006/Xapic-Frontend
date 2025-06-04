import { createContext, useState, type ReactNode } from 'react';

export type VideoModalType = "home" | "tommy" | "jeff" | "mercy" | "ayo" | "close"



type modalProp = {
  videoType: VideoModalType,
  url: string;
}

type ModalContextType = {
  videoValues: modalProp
  controlVideoModal: (currentType: modalProp) => void
};

export const ModalContext = createContext<ModalContextType | null>(null);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [videoType, setCurrentVideoType] = useState<modalProp>({ url: "", videoType: "close" })

  const controlVideoModal = (currentVideo: modalProp) => {
    setCurrentVideoType(currentVideo)
  }

  return (
    <ModalContext.Provider value={{ 
      videoValues: videoType, 
      controlVideoModal 
      }}>
      {children}
    </ModalContext.Provider>
  );
};
