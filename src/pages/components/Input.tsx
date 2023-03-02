/* eslint-disable jsx-a11y/no-autofocus */

import { FC, useEffect, useRef, useState, KeyboardEvent, Dispatch, SetStateAction } from 'react';

import classes from './Input.module.scss';

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  onEnter: () => void;
}

const Input: FC<Props> = ({ input, setInput, onEnter }) => {
  const [offset, setOffset] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const commandRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
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
        break;
      default:
    }
  };

  return (
    <div className="my-2">
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
        className="h-0 w-0 absolute"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
