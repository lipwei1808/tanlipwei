import { RefObject } from 'react';

type ElementFields = {
  content: string;
  class?: string[];
};

const createSpace = (length: number, left: string, right: string) =>
  `${left}${'&nbsp;'.repeat(length)}${right}`;

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

export const helpText = {
  classForAll: ['content'],
  content: [
    { content: '<br />' },
    { content: createSpace(18, '<span style="color: #22c55e">help</span>', 'still need to say??') },
    {
      content: createSpace(
        15,
        '<span style="color: #22c55e">aboutme</span>',
        'self introduction of myself'
      ),
    },
    {
      content: createSpace(
        14,
        '<span style="color: #22c55e">projects</span>',
        'projects that i have done'
      ),
    },
    {
      content: createSpace(
        13,
        '<span style="color: #22c55e">education</span>',
        'where am i studying'
      ),
    },
    {
      content: createSpace(
        10,
        '<span style="color: #22c55e">technologies</span>',
        'technologies that i have used'
      ),
    },
    {
      content: createSpace(
        16,
        '<span style="color: #22c55e">banner</span>',
        'display the intro banner'
      ),
    },
    { content: createSpace(17, '<span style="color: #22c55e">clear</span>', 'clear the console') },
    { content: '<br />' },
  ],
};

export const aboutMe = {
  classForAll: ['content'],
  content: [
    { content: '<br/>' },
    { content: 'Hi! I am Lip Wei 👋' },
    {
      content:
        'I started programming at 19 during National Service. I particulary took ' +
        'interest in Full-Stack Web Development and spend my time learning and reading up new frameworks',
    },
    { content: '<br/>' },
  ],
};

export const banner = {
  classForAll: ['content', 'whitespace-pre'],
  content: [
    { content: '    .__________________________.' },
    { content: '    | .___________________. |==|' },
    { content: '    | | ................. | |  |' },
    { content: '    | | ::::Apple ][::::: | |  |' },
    { content: '    | | ::::::::::::::::: | |  |' },
    { content: '    | | ::::::::::::::::: | |  |' },
    {
      content:
        '    | | ::::::::::::::::: | |  |            __    ________     _       ____________',
    },
    {
      content:
        '    | | ::::::::::::::::: | |  |            / /   /  _/ __ \\   | |     / / ____/  _/',
    },
    {
      content:
        '    | | ::::::::::::::::: | | ,|           / /    / // /_/ /   | | /| / / __/  / /     ',
    },
    {
      content:
        '    | !___________________! |(c|          / /____/ // ____/    | |/ |/ / /____/ /   ',
    },
    {
      content:
        '    !_______________________!__!         /_____/___/_/         |__/|__/_____/___/     ',
    },
    { content: '   /                            \\' },
    { content: '  /  [][][][][][][][][][][][][]  \\' },
    { content: ' /  [][][][][][][][][][][][][][]  \\' },
    { content: '(  [][][][][____________][][][][]  )' },
    { content: ' \\ ------------------------------ /' },
    { content: '  \\______________________________/' },
    { content: '<br/>' },
    { content: 'Welcome to my interactive portfolio website', class: ['!whitespace-normal'] },
    { content: 'For a list of commands, type "help"', class: ['!whitespace-normal'] },
  ],
};

export const education = {
  classForAll: ['content'],
  content: [
    { content: '<br/>' },
    { content: '███╗     ██╗██╗   ██╗███████╗', class: ['whitespace-pre'] },
    { content: '████╗   ██║██║   ██║██╔════╝', class: ['whitespace-pre'] },
    { content: '██╔██╗  ██║██║   ██║███████╗', class: ['whitespace-pre'] },
    { content: '██║╚██╗██║██║   ██║╚════██║', class: ['whitespace-pre'] },
    { content: '██║ ╚████║╚██████╔╝███████║', class: ['whitespace-pre'] },
    { content: '╚═╝  ╚═══╝  ╚═════╝ ╚══════╝', class: ['whitespace-pre'] },
    {
      content:
        '<div style="display:flex;justify-content:space-between"><span>National University of Singapore</span><span style="font-size: 1rem">2022 - Present</span></div>',
      class: ['text-2xl', 'ml-4'],
    },
    {
      content: 'Computer Science and Business Administration',
      class: ['text-lg', 'ml-4'],
    },
    {
      content: 'NUS Merit Scholar',
      class: ['text-lg', 'ml-4'],
    },
    {
      content: '<hr/>',
      class: ['my-8'],
    },
    { content: '██╗    ██╗      ██╗ ██████╗', class: ['whitespace-pre'] },
    { content: '██║    ██║      ██║██╔════╝', class: ['whitespace-pre'] },
    { content: '██║    ██║      ██║██║     ', class: ['whitespace-pre'] },
    { content: '╚██╗ ██╔╝██   ██║██║     ', class: ['whitespace-pre'] },
    { content: ' ╚████╔╝ ╚█████╔╝╚██████╗', class: ['whitespace-pre'] },
    { content: '  ╚═══╝     ╚════╝  ╚═════╝', class: ['whitespace-pre'] },
    {
      content: 'Victoria Junior College',
      class: ['text-2xl', 'ml-4'],
    },
    {
      content: '90 RP',
      class: ['text-lg', 'ml-4'],
    },
    { content: '<br/>' },
  ],
};

export const socials = {
  classForAll: ['content'],
  content: [
    { content: '<br/>' },
    { content: 'Contact me through any of these platforms! 😊', class: ['text-2xl', 'mb-4'] },
    {
      content:
        '<div style="display:flex;gap:1rem;align-items:center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg><a href="https://www.github.com/lipwei1808">Github</a></div>',
      class: ['my-2'],
    },
    {
      content:
        '<div style="display:flex;gap:1rem;align-items:center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" ><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg><a href="https://linkedin.com/in/tanlipwei">Linkedin</a></div>',
      class: ['my-2'],
    },
    {
      content:
        '<div style="display:flex;gap:1rem;align-items:center"><svg className="hover:fill-white cursor-pointer transition" fill="#000000" viewBox="0 0 22 22" width="32" height="32" xmlns="http://www.w3.org/2000/svg" id="memory-email" ><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" /></g></svg><a href="mailto:tlipwei@gmail.com">Email</a></div>',
      class: ['my-2'],
    },
    {
      content:
        '<div style="display:flex;gap:1rem;align-items:center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" ><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm1 16.852c0 1.738-1.41 3.148-3.148 3.148h-9.662c-1.739 0-3.19-1.41-3.19-3.148v-6.852h4.498c-.362.609-.581 1.313-.581 2.073 0 2.249 1.824 4.073 4.073 4.073 2.249 0 4.073-1.824 4.073-4.073 0-.76-.219-1.464-.58-2.073h4.517v6.852zm-11.148-4.779c0-.939.416-1.783 1.072-2.358.23-.202.49-.371.771-.499.395-.18.833-.28 1.294-.28.461 0 .899.101 1.293.28.283.128.543.297.773.499.654.575 1.07 1.419 1.07 2.358 0 1.73-1.406 3.138-3.137 3.138-1.728-.001-3.136-1.408-3.136-3.138zm11.148-2.74h-5.003c-.774-.85-1.859-1.333-3.007-1.333-1.142 0-2.23.479-3.008 1.333h-4.982v-2.185c0-1.052.532-1.978 1.333-2.549v2.735h.667v-3.103c.212-.084.436-.142.667-.18v3.282h.667v-3.333h.666v3.333h.667v-3.333h8.185c1.738 0 3.148 1.41 3.148 3.148v2.185zm-10.319 2.74c0-1.281 1.038-2.319 2.319-2.319s2.318 1.038 2.318 2.319-1.037 2.319-2.318 2.319c-1.281 0-2.319-1.038-2.319-2.319zm8.985-6.25v1.687c0 .271-.221.49-.496.49h-1.674c-.273 0-.496-.219-.496-.49v-1.687c0-.271.223-.49.496-.49h1.674c.275 0 .496.219.496.49z" /></svg><a href="https://www.instagram.com/lipwei.tan">Instagram</a></div>',
      class: ['my-2'],
    },
    { content: '<br/>' },
  ],
};

export const technologies = {
  classForAll: ['content', 'flex', 'items-center', 'gap-x-4', 'my-4'],
  content: [
    {
      content: 'Languages',
      class: ['text-lg'],
    },
    {
      content:
        '<svg viewBox="0 0 1024 1024" fill="#df3c6e" height="2rem" width="2rem" {...props}><path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" /></svg>&nbsp;HTML5',
    },
    {
      content:
        '<svg viewBox="0 0 32 32" fill="currentColor" height="2rem" width="2rem" {...props} ><path fill="#2c4bdc" d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"/></svg>&nbsp;CSS3',
    },
    {
      content:
        '<svg viewBox="0 0 32 32" fill="currentColor" height="2rem" width="2rem" {...props}><path fill="#cccc33" d="M4.698 3.419l2.057 23.073 9.231 2.563 9.256-2.566L27.301 3.42H4.697zm8.528 5.975l-.409 4.441 9.671.001-.069.76-.665 7.45-.042.478-5.804 1.609-5.796-1.609-.396-4.443h2.84l.202 2.257 3.154.85 3.156-.852.328-3.67-9.671-.001.069-.76.665-7.45.209-2.086h11.287l.131 1.598.403 4.453h-2.841l-.262-2.922-2.889-.174h-.515V9.32l-2.755.074z"/></svg>&nbsp;Javascript',
    },
    {
      content:
        '<img src="/logo/java.png" alt="Java Logo" style="height:auto;width:2rem;" />&nbsp;Java',
    },
    {
      content:
        '<img src="/logo/python.png" alt="Python Logo" style="height:2rem;width:2rem;" />&nbsp;Python',
    },
    {
      content:
        '<img src="/logo/typescript.png" alt="Python Logo" style="height:2rem;width:2rem;" />&nbsp;Typescript',
    },
    {
      content: 'Web Development Frameworks',
      class: ['text-lg'],
    },
    {
      content:
        '<svg viewBox="0 0 512 512" fill="#7ed0ef" height="2rem" width="2rem" {...props}><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" /></svg>&nbsp;React',
    },
    {
      content:
        '<svg viewBox="0 0 448 512" fill="#c52a37" height="2rem" width="2rem" {...props}><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" /></svg>&nbsp;Angular',
    },
    {
      content:
        '<svg viewBox="0 0 15 15" height="2rem" width="2rem" {...props}><path fill="currentColor" d="M4.5 4.5l.405-.293A.5.5 0 004 4.5h.5zm3 9.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM5 12V4.5H4V12h1zm-.905-7.207l6.5 9 .81-.586-6.5-9-.81.586zM10 4v6h1V4h-1z"/></svg>&nbsp;Next.js',
    },
    {
      content: 'Web Development Frameworks',
      class: ['text-lg'],
    },
  ],
};
