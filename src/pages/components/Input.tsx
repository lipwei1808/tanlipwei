/* eslint-disable jsx-a11y/no-autofocus */

import {
  FC,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  RefObject,
} from 'react';

import classes from './Input.module.scss';

// TODO: Bug with input
// How to: Type a bunch of spaces, move to the left abit then delete, monitor the value of the input
// Will have a nbsp; appear inside suddenly

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  onEnter: () => void;
  inputContainer: RefObject<HTMLDivElement>;
}

const Input: FC<Props> = ({ input, setInput, onEnter, inputContainer }) => {
  const [offset, setOffset] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const commandRef = useRef<HTMLSpanElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

  const onMove = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.keyCode) {
      case 37: // Left
        if (commandRef.current) {
          if (Math.abs(offset - 9.6) <= commandRef.current?.offsetWidth) {
            setOffset(offset - 9.6);
          } else {
            // eslint-disable-next-line no-unsafe-optional-chaining
            setOffset(-1 * commandRef.current?.offsetWidth);
          }
        }

        break;
      case 39: // Right
        setOffset(Math.min(offset + 9.6, 0));
        break;
      case 13:
        onEnter();
        setOffset(0);
        break;
      default:
    }
  };

  return (
    <div
      ref={inputContainer}
      onClick={focusInput}
      role="button"
      tabIndex={0}
      onKeyDown={focusInput}
    >
      <div className="h-6">
        <span className="text-terminal">tanlipwei@portfolio:~$&nbsp;</span>
        <span className="whitespace-pre" ref={commandRef}>
          {input}
        </span>
        <b className={classes.cursor} style={{ left: offset }} />
      </div>
      <input
        onKeyDown={onMove}
        onBlur={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
        ref={inputRef}
        autoFocus
        type="text"
        className="t-0 l-0 h-16 w-16 fixed bg-white text-black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
