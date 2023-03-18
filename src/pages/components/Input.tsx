/* eslint-disable jsx-a11y/no-autofocus */

import { FC, useEffect, useRef, useState, KeyboardEvent, RefObject, useContext } from 'react';

import HelpCommands from '@/types/HelpCommand';

import { InputContext } from '../contexts/InputContext';
import { ActiveElementContext } from '../contexts/ActiveElementContext';

import classes from './Input.module.scss';

interface Props {
  onEnter: () => void;
  inputContainer: RefObject<HTMLDivElement>;
}

const Input: FC<Props> = ({ onEnter, inputContainer }) => {
  const [offset, setOffset] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const commandRef = useRef<HTMLSpanElement>(null);
  const { input, setInput } = useContext(InputContext);
  const activeElement = useContext(ActiveElementContext);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  });

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
      case 9: // tab
        if (!input) {
          return;
        }
        event.preventDefault();
        for (const command of Object.values(HelpCommands)) {
          const pattern = new RegExp(`^${input}.*`);
          if (command.match(pattern)) {
            setInput(command);
          }
        }
        break;
      default:
    }
  };

  return (
    <div
      ref={inputContainer}
      onClick={focusInput}
      role="textbox"
      aria-label="Terminal Input UI"
      tabIndex={-1}
      onKeyDown={focusInput}
    >
      <div className="h-6 cursor-text">
        <span className="text-terminal-base lg:text-terminal-dark">
          tanlipwei@portfolio:~$&nbsp;
        </span>
        <span className="whitespace-pre" ref={commandRef}>
          {input}
        </span>
        <b
          className={`${classes.cursor} ${
            activeElement === inputRef.current ? classes.animateCursor : ''
          }`}
          style={{ left: offset }}
        />
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
        aria-label="Terminal Input"
      />
    </div>
  );
};

export default Input;
