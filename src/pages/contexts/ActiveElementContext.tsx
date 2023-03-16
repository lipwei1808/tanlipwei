import { useEffect, createContext, FC, PropsWithChildren, useState } from 'react';

export const ActiveElementContext = createContext<Element | null>(null);

const ActiveElementProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeElement, setActiveElement] = useState<Element | null>(null);

  const handleFocusIn = () => {
    setActiveElement(document.activeElement);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveElement(document.activeElement);
    }

    document.addEventListener('focusin', handleFocusIn);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, []);

  return (
    <ActiveElementContext.Provider value={activeElement}>{children}</ActiveElementContext.Provider>
  );
};

export default ActiveElementProvider;
