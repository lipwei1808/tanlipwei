import Typewriter from 'typewriter-effect';

import classes from './About.module.scss';

const About = () => {
  const me = [
    'am an aspiring software engineer',
    'am a computer science student',
    'am studying business',
  ];
  return (
    <>
      <div className="flex justify-between items-center text-xl font-bold mb-2 col-span-8 row-start-1 md:text-3xl">
        <div>
          hi, im Lip Wei&nbsp;
          <span className={classes.wave}>👋</span>
        </div>
      </div>
      <div className="row-start-3 col-span-8">
        <div className="flex gap-x-4">
          <a href="/files/resume.pdf" target="blank">
            <svg
              height="2rem"
              width="2rem"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#000000"
              className="hover:fill-white cursor-pointer transition"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                {' '}
                <style type="text/css" />
                &nbsp;
                <g>
                  &nbsp;
                  <path
                    className="st0"
                    d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308 c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"
                  />
                  &nbsp;
                  <path
                    className="st0"
                    d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659 c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"
                  />
                  &nbsp;
                  <path
                    className="st0"
                    d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695 h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35 c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899 c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"
                  />
                  &nbsp;
                </g>
                &nbsp;
              </g>
            </svg>
          </a>
          <a href="https://www.github.com/lipwei1808" target="blank">
            <svg
              className="hover:fill-white cursor-pointer transition"
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="mailto:tlipwei@gmail.com">
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
          </a>
          <a href="https://www.linkedin.com/in/tanlipwei" target="blank">
            <svg
              className="hover:fill-white cursor-pointer transition"
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/lipwei.tan" target="blank">
            <svg
              className="hover:fill-white cursor-pointer transition"
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm1 16.852c0 1.738-1.41 3.148-3.148 3.148h-9.662c-1.739 0-3.19-1.41-3.19-3.148v-6.852h4.498c-.362.609-.581 1.313-.581 2.073 0 2.249 1.824 4.073 4.073 4.073 2.249 0 4.073-1.824 4.073-4.073 0-.76-.219-1.464-.58-2.073h4.517v6.852zm-11.148-4.779c0-.939.416-1.783 1.072-2.358.23-.202.49-.371.771-.499.395-.18.833-.28 1.294-.28.461 0 .899.101 1.293.28.283.128.543.297.773.499.654.575 1.07 1.419 1.07 2.358 0 1.73-1.406 3.138-3.137 3.138-1.728-.001-3.136-1.408-3.136-3.138zm11.148-2.74h-5.003c-.774-.85-1.859-1.333-3.007-1.333-1.142 0-2.23.479-3.008 1.333h-4.982v-2.185c0-1.052.532-1.978 1.333-2.549v2.735h.667v-3.103c.212-.084.436-.142.667-.18v3.282h.667v-3.333h.666v3.333h.667v-3.333h8.185c1.738 0 3.148 1.41 3.148 3.148v2.185zm-10.319 2.74c0-1.281 1.038-2.319 2.319-2.319s2.318 1.038 2.318 2.319-1.037 2.319-2.318 2.319c-1.281 0-2.319-1.038-2.319-2.319zm8.985-6.25v1.687c0 .271-.221.49-.496.49h-1.674c-.273 0-.496-.219-.496-.49v-1.687c0-.271.223-.49.496-.49h1.674c.275 0 .496.219.496.49z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="inline-block row-start-2 col-span-8 overflow-hidden whitespace-nowrap relative">
        i&nbsp;
        <div className="inline-block">
          <Typewriter
            options={{
              strings: me,
              autoStart: true,
              loop: true,
              cursor: '',
            }}
          />
        </div>
        <div className={classes.cursor} />
        <div className="block absolute top-0 right-0 opacity-80 h-full w-6 bg-gradient-to-r from-transparent to-iterm-green-400 lg:hidden" />
      </div>
    </>
  );
};

export default About;
