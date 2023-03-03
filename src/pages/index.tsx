import { Source_Code_Pro as SourceCodePro } from 'next/font/google';
import { useState, useRef } from 'react';

import About from './components/About';
import Age from './components/Age';
import Input from './components/Input';
import Console from './components/Console';

const sourceCodePro = SourceCodePro({ subsets: ['latin'], weight: '400' });

const createSpace = (length: number, left: string, right: string) =>
  `${left}${'&nbsp;'.repeat(length)}${right}`;

const helpText = [
  '<br />',
  createSpace(18, 'help', 'still need to say??'),
  createSpace(15, 'aboutme', 'self introduction of myself'),
  createSpace(14, 'projects', 'projects that i have done'),
  createSpace(13, 'education', 'where am i studying'),
  createSpace(10, 'technologies', 'technologies that i have used'),
  createSpace(17, 'clear', 'clear the console'),
  '<br />',
];

const aboutMe = [
  '<br/>',
  'Hi! I am Lip Wei 👋',
  '<span class="content">I started programming at 19 during National Service. I particulary took ' +
    'interest in Full-Stack Web Development and spend my time learning and reading up new frameworks</span>',
  '<br/>',
];

export default function Home() {
  const [input, setInput] = useState('');
  const consoleRef = useRef<HTMLDivElement>(null);
  const inputContainer = useRef<HTMLDivElement>(null);

  const iterateArrayWithDelay = (
    delay: number,
    parent: HTMLElement,
    content: string[],
    extraClass: string[]
  ) => {
    let idx = 0;
    const delayFn = () => {
      if (idx >= content.length) return;
      const next = document.createElement('p');
      next.innerHTML = content[idx];
      next.classList.add(...extraClass);
      const mask = document.createElement('div');
      mask.classList.add('animateit');
      next.appendChild(mask);
      parent.appendChild(next);

      idx += 1;
      inputContainer.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(delayFn, delay);
    };

    delayFn();
  };

  const onEnter = () => {
    // setHtml(html.concat([{ name: 'header', paragraph: 'help' }]));
    if (consoleRef.current) {
      const nextEl = document.createElement('p');
      nextEl.innerHTML = input;
      nextEl.id = 'command';
      const newEl = consoleRef.current.appendChild(nextEl);
      setInput('');
      switch (input) {
        case 'help': {
          iterateArrayWithDelay(80, newEl, helpText, ['ml-2', 'relative']);
          break;
        }
        case 'aboutme': {
          iterateArrayWithDelay(80, newEl, aboutMe, ['ml-2', 'relative']);
          break;
        }
        case 'clear': {
          consoleRef.current.innerHTML = '';
          break;
        }
        default: {
          // const next = document.createElement('p');
          // next.innerHTML = 'Unknown command. Try typing "help"';
          // next.classList.add('ml-2');
          // const mask = document.createElement('div');
          // mask.classList.add('animateit');
          // next.appendChild(mask);
          // newEl.appendChild(next);
          iterateArrayWithDelay(
            0,
            newEl,
            ['Unknown command. Try typing "help"'],
            ['ml-2', 'relative']
          );
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen lg:py-12">
      <div className="max-w-screen-lg w-full bg-[#073642] overflow-hidden flex flex-col lg:rounded-xl">
        <div className="bg-[#032b36] py-2 px-4 flex gap-x-2">
          <div className="bg-red-400 rounded-full h-4 w-4" />
          <div className="bg-yellow-400 rounded-full h-4 w-4" />
          <div className="bg-green-400 rounded-full h-4 w-4" />
        </div>
        <div className="p-6 flex flex-col h-full">
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
