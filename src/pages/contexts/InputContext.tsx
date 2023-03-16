import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

export const InputContext = createContext<{
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}>({
  input: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setInput: () => {},
});

const InputProvider: FC<PropsWithChildren> = ({ children }) => {
  const [input, setInput] = useState('');
  const value = useMemo(
    () => ({
      input,
      setInput,
    }),
    [input]
  );
  return <InputContext.Provider value={value}>{children}</InputContext.Provider>;
};

export default InputProvider;
