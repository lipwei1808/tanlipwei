/* eslint-disable react/jsx-curly-brace-presence */
import Image from 'next/image';
import { RefObject } from 'react';

import styles from './console.module.scss';

type ElementFields = {
  content: string;
  class?: string[];
};

// const createSpace = (length: number, left: string, right: string) =>
//   `${left}${'&nbsp;'.repeat(length)}${right}`;

const generateElement = (fields: ElementFields, classForAll: string[]) => {
  const next = document.createElement('p');
  next.innerHTML = fields.content;
  next.classList.add(...classForAll);
  if (fields.class?.length) {
    next.classList.add(...classForAll, ...fields.class);
  }
  return next;
};

export const iterateArrayWithDelay = (
  delay: number,
  parent: HTMLElement,
  content: { classForAll: string[]; content: ElementFields[] },
  inputContainer: RefObject<HTMLDivElement>
) => {
  let idx = 0;
  const delayFn = () => {
    if (idx >= content.content.length) return;
    const next = generateElement(content.content[idx], content.classForAll);
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

export const helpText = [
  () => <br />,
  () => (
    <div className="content grid grid-cols-2">
      <span style={{ color: '#22c55e' }}>help</span>
      still need to say??
      <div className="animateit" />
    </div>
  ),
  () => (
    <div className="content grid grid-cols-2">
      <span style={{ color: '#22c55e' }}>aboutme</span>
      self introduction of myself
      <div className="animateit" />
    </div>
  ),
  () => (
    <div className="content grid grid-cols-2">
      <span style={{ color: '#22c55e' }}>projects</span>
      projects that i have done
      <div className="animateit" />
    </div>
  ),
  () => (
    <div className="content grid grid-cols-2">
      <span style={{ color: '#22c55e' }}>education</span>
      where am i studying
      <div className="animateit" />
    </div>
  ),
  () => (
    <div className="content grid grid-cols-2">
      <span style={{ color: '#22c55e' }}>technologies</span>
      technologies i have used
      <div className="animateit" />
    </div>
  ),
  () => (
    <div className="content grid grid-cols-2">
      <span style={{ color: '#22c55e' }}>socials</span>
      contact me
      <div className="animateit" />
    </div>
  ),
  () => (
    <div className="content grid grid-cols-2">
      <span style={{ color: '#22c55e' }}>banner</span>
      display the intro banner
      <div className="animateit" />
    </div>
  ),
  () => (
    <div className="content grid grid-cols-2">
      <span style={{ color: '#22c55e' }}>clear</span>
      clear the console
      <div className="animateit" />
    </div>
  ),
  () => <br />,
];

export const aboutMe = [
  () => <br />,
  () => <p>Hi! I am Lip Wei ????</p>,
  () => (
    <p>
      I started programming at 19 during National Service. I particulary took interest in Full-Stack
      Web Development and spend my time learning and reading up new frameworks
    </p>
  ),
  () => <br />,
];

export const banner = [
  () => <div className="whitespace-pre">{'    .__________________________.'}</div>,
  () => <div className="whitespace-pre">{'    | .___________________. |==|'}</div>,
  () => <div className="whitespace-pre">{'    | | ................. | |  |'}</div>,
  () => <div className="whitespace-pre">{'    | | ::::Apple ][::::: | |  |'}</div>,
  () => <div className="whitespace-pre">{'    | | ::::::::::::::::: | |  |'}</div>,
  () => <div className="whitespace-pre">{'    | | ::::::::::::::::: | |  |'}</div>,
  () => (
    <div className="whitespace-pre">
      {'    | | ::::::::::::::::: | |  |            __    ________     _       ____________'}
    </div>
  ),
  () => (
    <div className="whitespace-pre">
      {'    | | ::::::::::::::::: | |  |            / /   /  _/ __ \\   | |     / / ____/  _/'}
    </div>
  ),
  () => (
    <div className="whitespace-pre">
      {'    | | ::::::::::::::::: | | ,|           / /    / // /_/ /   | | /| / / __/  / /     '}
    </div>
  ),
  () => (
    <div className="whitespace-pre">
      {'    | !___________________! |(c|          / /____/ // ____/    | |/ |/ / /____/ /   '}
    </div>
  ),
  () => (
    <div className="whitespace-pre">
      {'    !_______________________!__!         /_____/___/_/         |__/|__/_____/___/     '}
    </div>
  ),
  () => <div className="whitespace-pre">{'   /                            \\'}</div>,
  () => <div className="whitespace-pre">{'  /  [][][][][][][][][][][][][]  \\'}</div>,
  () => <div className="whitespace-pre">{' /  [][][][][][][][][][][][][][]  \\'}</div>,
  () => <div className="whitespace-pre">{'(  [][][][][____________][][][][]  )'}</div>,
  () => <div className="whitespace-pre">{' \\ ------------------------------ /'}</div>,
  () => <div className="whitespace-pre">{'  \\______________________________/'}</div>,
  () => <br />,
  () => <div>Welcome to my interactive portfolio website</div>,
  () => <div>For a list of commands, type &quot;help&quot;</div>,
];

export const education = [
  () => <br />,
  () => <div className="whitespace-pre">{'????????????     ??????????????????   ?????????????????????????????????'}</div>,
  () => <div className="whitespace-pre">{'???????????????   ??????????????????   ?????????????????????????????????'}</div>,
  () => <div className="whitespace-pre">{'??????????????????  ??????????????????   ?????????????????????????????????'}</div>,
  () => <div className="whitespace-pre">{'???????????????????????????????????????   ?????????????????????????????????'}</div>,
  () => <div className="whitespace-pre">{'????????? ?????????????????????????????????????????????????????????????????????'}</div>,
  () => <div className="whitespace-pre">{'?????????  ???????????????  ????????????????????? ????????????????????????'}</div>,
  () => (
    <div className="flex justify-between items-center">
      <span className="text-2xl ml-4">National University of Singapore</span>
      <span>2022 - Present</span>
    </div>
  ),
  () => <div className="text-lg ml-4">Computer Science and Business Administration</div>,
  () => <hr className="my-4" />,
  () => <div className="whitespace-pre">{'?????????    ?????????      ????????? ?????????????????????'}</div>,
  () => <div className="whitespace-pre">{'?????????    ?????????      ?????????????????????????????????'}</div>,
  () => <div className="whitespace-pre">{'?????????    ?????????      ??????????????????     '}</div>,
  () => <div className="whitespace-pre">{'???????????? ??????????????????   ??????????????????     '}</div>,
  () => <div className="whitespace-pre">{' ????????????????????? ????????????????????????????????????????????????'}</div>,
  () => <div className="whitespace-pre">{'  ???????????????     ??????????????????  ?????????????????????'}</div>,
  () => <div className="text-2xl ml-4">Victoria Junior College</div>,
  () => <div className="text-lg ml-4">90RP</div>,
  () => <br />,
];

export const socials = [
  () => <br />,
  () => <div className="text-2xl ml-4">Contact me through any of these platforms! ????</div>,
  () => (
    <div className="flex gap-x-4 items-center my-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      <a href="https://www.github.com/lipwei1808">Github</a>
    </div>
  ),
  () => (
    <div className="flex gap-x-4 items-center my-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
      <a href="https://linkedin.com/in/tanlipwei">Linkedin</a>
    </div>
  ),
  () => (
    <div className="flex gap-x-4 items-center my-2">
      <svg
        className="hover:fill-white cursor-pointer transition"
        fill="#000000"
        viewBox="0 0 22 22"
        width="2rem"
        height="2rem"
        xmlns="http://www.w3.org/2000/svg"
        id="memory-email"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" />
        </g>
      </svg>
      <a href="mailto:tlipwei@gmail.com">Email</a>
    </div>
  ),
  () => (
    <div className="flex gap-x-4 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm1 16.852c0 1.738-1.41 3.148-3.148 3.148h-9.662c-1.739 0-3.19-1.41-3.19-3.148v-6.852h4.498c-.362.609-.581 1.313-.581 2.073 0 2.249 1.824 4.073 4.073 4.073 2.249 0 4.073-1.824 4.073-4.073 0-.76-.219-1.464-.58-2.073h4.517v6.852zm-11.148-4.779c0-.939.416-1.783 1.072-2.358.23-.202.49-.371.771-.499.395-.18.833-.28 1.294-.28.461 0 .899.101 1.293.28.283.128.543.297.773.499.654.575 1.07 1.419 1.07 2.358 0 1.73-1.406 3.138-3.137 3.138-1.728-.001-3.136-1.408-3.136-3.138zm11.148-2.74h-5.003c-.774-.85-1.859-1.333-3.007-1.333-1.142 0-2.23.479-3.008 1.333h-4.982v-2.185c0-1.052.532-1.978 1.333-2.549v2.735h.667v-3.103c.212-.084.436-.142.667-.18v3.282h.667v-3.333h.666v3.333h.667v-3.333h8.185c1.738 0 3.148 1.41 3.148 3.148v2.185zm-10.319 2.74c0-1.281 1.038-2.319 2.319-2.319s2.318 1.038 2.318 2.319-1.037 2.319-2.318 2.319c-1.281 0-2.319-1.038-2.319-2.319zm8.985-6.25v1.687c0 .271-.221.49-.496.49h-1.674c-.273 0-.496-.219-.496-.49v-1.687c0-.271.223-.49.496-.49h1.674c.275 0 .496.219.496.49z" />
      </svg>
      <a href="https://www.instagram.com/lipwei.tan">Instagram</a>
    </div>
  ),
];

export const technologies = [
  () => <br />,
  () => <div className="text-lg mb-4">Languages</div>,
  () => (
    <div className="flex flex-wrap gap-x-4 mb-8">
      <Image
        src="/logo/html.svg"
        alt="HTML5"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/css.svg"
        alt="CSS3"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/javascript.svg"
        alt="CSS3"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/java.svg"
        alt="Java"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/python.svg"
        alt="Python"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/typescript.svg"
        alt="Typescript"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/c.svg"
        alt="C"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
    </div>
  ),
  () => <div className="text-lg mb-4">Web Development Frameworks and Libraries</div>,
  () => (
    <div className="flex flex-wrap gap-x-4 mb-8">
      <Image
        src="/logo/react.svg"
        alt="React"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/angular.svg"
        alt="Angular"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/nextjs.svg"
        alt="Next.js"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/nodejs.svg"
        alt="Nodejs"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/nestjs.svg"
        alt="Nextjs"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/express.svg"
        alt="Express"
        width={32}
        height={32}
        style={{ height: 'auto', width: '2rem' }}
      />
    </div>
  ),
  () => <div className="text-lg mb-4">Others</div>,
  () => (
    <div className="flex flex-wrap gap-x-4">
      <Image
        src="/logo/git.svg"
        alt="Git"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/tailwindcss.svg"
        alt="Tailwindcss"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/sass.svg"
        alt="Sass"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/docker.png"
        alt="Docker"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/mongodb.svg"
        alt="Mongodb"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/firebase.svg"
        alt="Firebase"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
      <Image
        src="/logo/googlecloud.svg"
        alt="Google Cloud"
        width={32}
        height={32}
        style={{ height: '2rem', width: 'auto' }}
      />
    </div>
  ),
  () => <br />,
];

export const unknown = [() => <div>Unknown command. Try typing &quot;help&quot;</div>];

export const projects = [
  () => (
    <div className="flex gap-x-2">
      Still compiling
      <div className="overflow-hidden">
        <div className={styles.bubbleit}>.</div>
        <div className={styles.bubbleit}>.</div>
        <div className={styles.bubbleit}>.</div>
        <div className={styles.bubbleit}>.</div>
        <div className={styles.bubbleit}>.</div>
      </div>
    </div>
  ),
];
