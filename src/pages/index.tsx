import { Source_Code_Pro as SourceCodePro } from 'next/font/google';
import { useState, useEffect } from 'react';

import About from './components/About';
import Age from './components/Age';
import Input from './components/Input';
import Terminal from './components/Console';

const sourceCodePro = SourceCodePro({ subsets: ['latin'], weight: '400' });

const helpText = [
  'help                   still need to say??',
  'aboutme           self introduction of myself',
  'projects            projects that i have done',
  'education         where am i studying',
];

export default function Home() {
  const [input, setInput] = useState('');
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState<string[]>();
  const [html, setHtml] = useState<{ name: string; paragraph: string }[]>([]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (current?.length && index < current.length) {
      const timer = setTimeout(() => {
        setHtml([...html, { name: 'paragraph', paragraph: current[index] }]);
      }, 100);
      setIndex((idx) => idx + 1);

      return () => clearTimeout(timer);
    }
    setIndex(0);
    setCurrent(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [html, current]);

  const onEnter = () => {
    switch (input) {
      case 'help':
        setHtml(html.concat([{ name: 'header', paragraph: 'help' }]));
        setCurrent(helpText);
        break;
      default:
    }

    setInput('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-12">
      <div className="max-w-screen-lg h-[888px] w-full bg-[#073642] rounded-xl overflow-hidden">
        <div className="bg-[#032b36] py-2 px-4 flex gap-x-2">
          <div className="bg-red-400 rounded-full h-4 w-4" />
          <div className="bg-yellow-400 rounded-full h-4 w-4" />
          <div className="bg-green-400 rounded-full h-4 w-4" />
        </div>
        <div className="p-6">
          <About />
          <Age />
          <hr className="border-[#032b36] my-4" />
          <div className={sourceCodePro.className}>
            <Terminal html={html} />
            <Input input={input} setInput={setInput} onEnter={onEnter} />
          </div>
        </div>
      </div>
    </div>
  );
}
