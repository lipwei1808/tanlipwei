import { useState, useRef, useEffect, useContext } from 'react';

import {
  banner,
  aboutMe,
  education,
  socials,
  technologies,
  helpText,
  unknown,
  projects,
  internships,
  skilio,
  works,
  inputCommand,
} from '@/lib/console';
import HelpCommands from '@/types/HelpCommand';

import About from './components/About';
import Input from './components/Input';
import Console from './components/Console';
import Spotify from './components/Spotify';
import classes from './index.module.scss';
import { InputContext } from './contexts/InputContext';
import Popup from './components/Popup';
import Password from './components/Password';

export default function Home() {
  const [html, setHtml] = useState<(() => JSX.Element)[]>([]);
  const [content, setContent] = useState<(() => JSX.Element)[]>([]);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const consoleRef = useRef<HTMLDivElement>(null);
  const inputContainer = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const { input, setInput } = useContext(InputContext);

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
        if (html.length >= 200) {
          const subArray = html.slice(50);
          setHtml([...subArray, content[idx]]);
        } else {
          setHtml((prev) => [...prev, content[idx]]);
        }
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
      const arr = [inputCommand(input)];
      setInput('');
      setIdx(0);
      setContent([]);
      switch (input) {
        case HelpCommands.HELP: {
          setContent(arr.concat([...helpText]));
          break;
        }
        case HelpCommands.ABOUTME: {
          setContent(arr.concat([...aboutMe]));
          break;
        }
        case HelpCommands.CLEAR: {
          setHtml([]);
          break;
        }
        case HelpCommands.BANNER: {
          setContent(arr.concat([...banner]));
          break;
        }
        case HelpCommands.EDUCATION: {
          setContent(arr.concat([...education]));
          break;
        }
        case HelpCommands.TECHNOLOGIES: {
          setContent(arr.concat([...technologies]));
          break;
        }
        case HelpCommands.SOCIALS: {
          setContent(arr.concat([...socials]));
          break;
        }
        case HelpCommands.PROJECTS: {
          setContent(arr.concat([...projects]));
          break;
        }
        case HelpCommands.INTERNSHIPS: {
          setContent(arr.concat([...internships]));
          break;
        }
        case HelpCommands.ADMIN: {
          setOpen(true);
          break;
        }
        case HelpCommands.SKILIO: {
          setContent(arr.concat([...skilio]));
          break;
        }
        case HelpCommands.WORKS: {
          setContent(arr.concat([...works]));
          break;
        }
        default: {
          setContent(arr.concat([...unknown]));
        }
      }
    }
  };

  return (
    <>
      <div className={`${classes.smallStars} ${classes.star}`} />
      <div className={`${classes.mediumStars} ${classes.star}`} />
      <div className={`${classes.largeStars} ${classes.star}`} />
      <div className="flex justify-center items-center h-screen lg:py-12">
        <div className="max-w-screen-lg w-full h-screen bg-iterm-green-400 overflow-hidden z-10 flex flex-col lg:rounded-xl max-h-full lg:h-auto lg:bg-opacity-80">
          <div className="bg-iterm-green-500 py-2 px-4 flex gap-x-2">
            <div className="bg-red-400 rounded-full h-4 w-4" />
            <div className="bg-yellow-400 rounded-full h-4 w-4" />
            <Password />
          </div>
          <div className="p-6 flex flex-col h-full overflow-hidden">
            <div className="grid grid-cols-12 grid-rows-3">
              <About />
              <Spotify />
            </div>
            <hr className="border-iterm-green-600 my-4" />
            <div ref={testRef} className="overflow-scroll flex-grow flex flex-col py-4">
              <Console consoleRef={consoleRef} html={html} />
              <Input onEnter={onEnter} inputContainer={inputContainer} />
            </div>
          </div>
        </div>
      </div>
      {open && <Popup open={open} setOpen={setOpen} />}
    </>
  );
}
