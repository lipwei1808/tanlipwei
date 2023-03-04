import { Source_Code_Pro as SourceCodePro } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';

import {
  banner,
  aboutMe,
  education,
  socials,
  technologies,
  helpText,
  unknown,
  projects,
} from '@/lib/console';

import About from './components/About';
import Age from './components/Age';
import Input from './components/Input';
import Console from './components/Console';
import Spotify from './components/Spotify';

const sourceCodePro = SourceCodePro({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const [input, setInput] = useState('');
  const [html, setHtml] = useState<(() => JSX.Element)[]>([]);
  const [content, setContent] = useState<(() => JSX.Element)[]>([]);
  const [idx, setIdx] = useState(0);
  const consoleRef = useRef<HTMLDivElement>(null);
  const inputContainer = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleRef.current) {
      setContent(banner);
    }
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const node = inputContainer.current;
    const container = testRef.current;
    if (idx < content.length) {
      const timer = setTimeout(() => {
        setHtml((prev) => [...prev, content[idx]]);
        setIdx((prev) => prev + 1);
      }, 80);
      return () => {
        const height = node?.offsetTop;
        container?.scroll({ top: height, behavior: 'smooth' });
        return clearTimeout(timer);
      };
    }

    setIdx(0);

    // Do not want to re render when idx change
    // Only update after content finish updating
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [html, content]);

  const onEnter = () => {
    if (consoleRef.current) {
      const nextEl = document.createElement('p');
      nextEl.innerHTML = input;
      nextEl.id = 'command';
      consoleRef.current.appendChild(nextEl);
      setInput('');
      setIdx(0);
      setContent([]);
      switch (input) {
        case 'help': {
          setContent([...helpText]);
          break;
        }
        case 'aboutme': {
          setContent([...aboutMe]);
          break;
        }
        case 'clear': {
          consoleRef.current.innerHTML = '';
          setContent([...banner]);
          break;
        }
        case 'banner': {
          setContent([...banner]);
          break;
        }
        case 'education': {
          setContent([...education]);
          break;
        }
        case 'technologies': {
          setContent([...technologies]);
          break;
        }
        case 'socials': {
          setContent([...socials]);
          break;
        }
        case 'projects': {
          setContent([...projects]);
          break;
        }
        default: {
          setContent([...unknown]);
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen lg:py-12">
      <div className="max-w-screen-lg w-full bg-[#073642] overflow-hidden flex flex-col lg:rounded-xl max-h-full">
        <div className="bg-[#032b36] py-2 px-4 flex gap-x-2">
          <div className="bg-red-400 rounded-full h-4 w-4" />
          <div className="bg-yellow-400 rounded-full h-4 w-4" />
          <div className="bg-green-400 rounded-full h-4 w-4" />
        </div>
        <div className="p-6 flex flex-col h-full overflow-hidden">
          <div className="grid grid-cols-12 grid-rows-4">
            <About />
            <Spotify />
            <Age />
          </div>
          <hr className="border-[#032b36] my-4" />
          <div
            ref={testRef}
            className={`${sourceCodePro.className} overflow-scroll flex-grow flex flex-col py-4`}
          >
            <Console consoleRef={consoleRef} html={html} />
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
