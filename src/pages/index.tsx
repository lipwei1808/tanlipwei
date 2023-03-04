import { Source_Code_Pro as SourceCodePro } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';

import {
  iterateArrayWithDelay,
  helpText,
  banner,
  aboutMe,
  education,
  socials,
  technologies,
} from '@/lib/console';

import About from './components/About';
import Age from './components/Age';
import Input from './components/Input';
import Console from './components/Console';

const sourceCodePro = SourceCodePro({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const [input, setInput] = useState('');
  const consoleRef = useRef<HTMLDivElement>(null);
  const inputContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleRef.current) {
      iterateArrayWithDelay(80, consoleRef.current, banner, inputContainer);
    }
  }, []);

  const onEnter = () => {
    if (consoleRef.current) {
      const nextEl = document.createElement('p');
      nextEl.innerHTML = input;
      nextEl.id = 'command';
      const newEl = consoleRef.current.appendChild(nextEl);
      setInput('');
      switch (input) {
        case 'help': {
          iterateArrayWithDelay(80, newEl, helpText, inputContainer);
          break;
        }
        case 'aboutme': {
          iterateArrayWithDelay(80, newEl, aboutMe, inputContainer);
          break;
        }
        case 'clear': {
          consoleRef.current.innerHTML = '';
          iterateArrayWithDelay(80, consoleRef.current, banner, inputContainer);
          break;
        }
        case 'banner': {
          iterateArrayWithDelay(80, newEl, banner, inputContainer);
          break;
        }
        case 'education': {
          iterateArrayWithDelay(80, newEl, education, inputContainer);
          break;
        }
        case 'technologies': {
          iterateArrayWithDelay(80, newEl, technologies, inputContainer);
          break;
        }
        case 'socials': {
          iterateArrayWithDelay(80, newEl, socials, inputContainer);
          break;
        }
        default: {
          iterateArrayWithDelay(
            0,
            newEl,
            {
              classForAll: ['content'],
              content: [{ content: 'Unknown command. Try typing "help"' }],
            },
            inputContainer
          );
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen lg:py-12">
      <div className="max-w-screen-lg w-full bg-[#073642] overflow-hidden flex flex-col lg:rounded-xl max-h-[888px]">
        <div className="bg-[#032b36] py-2 px-4 flex gap-x-2">
          <div className="bg-red-400 rounded-full h-4 w-4" />
          <div className="bg-yellow-400 rounded-full h-4 w-4" />
          <div className="bg-green-400 rounded-full h-4 w-4" />
        </div>
        <div className="p-6 flex flex-col h-full overflow-hidden">
          <About />
          <Age />
          <hr className="border-[#032b36] my-4" />
          <div
            className={`${sourceCodePro.className} overflow-scroll flex-grow flex flex-col py-4`}
          >
            <Console consoleRef={consoleRef} />
            <Input
              input={input}
              setInput={setInput}
              onEnter={onEnter}
              inputContainer={inputContainer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
