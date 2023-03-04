import { FC, useEffect, useState } from 'react';

import classes from './Spotify.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface Song {
  name: string;
  artists: string;
  isPlaying: boolean;
  uri: string;
}

// eslint-disable-next-line arrow-body-style
const Spotify: FC<Props> = () => {
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/spotify')
        .then((res) => {
          if (!res.ok) {
            throw new Error('No song');
          }

          return res.json();
        })
        .then((data) => {
          setSong(data.data);
        })
        .catch((e) => {
          if (process.env.NODE_ENV === 'development') {
            // Print error only in development
            // eslint-disable-next-line no-console
            console.log(e);
          }
          setSong(undefined);
        });
      return () => clearInterval(interval);
    }, 60000);
  }, []);
  return (
    <div className="flex flex-col gap-y-10 pt-2 items-center col-start-10 col-span-3 row-span-4 row-start-1 sm:pt-0 sm:justify-center">
      <div className="rounded-full p-4`">
        <div className={`${song ? 'bg-green-500' : 'bg-red-600'}  rounded-full relative`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlLang="en"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            width="13.75rem"
            height="13.75rem"
            fill="#fff"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <defs>
              <path
                id="textcircle"
                d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              />
            </defs>
            <g className="textcircle">
              <text textLength="940" className={classes.words}>
                {song ? (
                  <textPath
                    xlinkHref="#textcircle"
                    aria-label="No song playing"
                    textLength="470"
                    className="fill-white"
                  >
                    Click to play sound on Spotify!
                  </textPath>
                ) : (
                  <textPath
                    xlinkHref="#textcircle"
                    aria-label="No song playing"
                    textLength="400"
                    className="fill-white"
                  >
                    Not listening currently
                  </textPath>
                )}
              </text>
            </g>
          </svg>
          <svg
            fill="#000000"
            height="6.25rem"
            width="6.25rem"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            className={song ? `${classes.disc} cursor-pointer` : ''}
            onClick={() => {
              if (song) {
                window.open(song.uri);
              }
            }}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              &nbsp;
              <path
                id="curve"
                d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M8.459,23.165 c-0.11,0.459-0.521,0.767-0.972,0.767c-0.077,0-0.156-0.009-0.234-0.027c-0.537-0.13-0.868-0.67-0.739-1.206 c0.946-3.935,2.955-7.522,5.809-10.376s6.441-4.862,10.376-5.809c0.536-0.127,1.077,0.202,1.206,0.739 c0.129,0.536-0.202,1.076-0.739,1.206c-3.575,0.859-6.836,2.685-9.429,5.277S9.318,19.59,8.459,23.165z M12.313,25.226 c-0.075,0-0.151-0.008-0.228-0.026c-0.538-0.125-0.873-0.663-0.747-1.2c0.72-3.09,2.282-5.904,4.52-8.141 c2.236-2.237,5.051-3.8,8.141-4.52c0.535-0.131,1.075,0.209,1.2,0.747c0.126,0.537-0.209,1.075-0.747,1.2 c-2.725,0.635-5.207,2.014-7.18,3.986s-3.352,4.455-3.986,7.18C13.179,24.914,12.768,25.226,12.313,25.226z M18.115,25.732 c-0.103,0.468-0.516,0.786-0.976,0.786c-0.071,0-0.143-0.008-0.215-0.023c-0.539-0.118-0.881-0.651-0.763-1.19 c0.997-4.557,4.586-8.146,9.143-9.143c0.537-0.116,1.071,0.222,1.19,0.763c0.118,0.539-0.224,1.072-0.763,1.19 C21.937,18.946,18.946,21.937,18.115,25.732z M21.92,30c0-4.455,3.625-8.08,8.08-8.08s8.08,3.625,8.08,8.08s-3.625,8.08-8.08,8.08 S21.92,34.455,21.92,30z M34.48,43.861c-0.46,0-0.873-0.318-0.976-0.786c-0.118-0.539,0.224-1.072,0.763-1.19 c3.796-0.831,6.786-3.821,7.617-7.617c0.118-0.541,0.65-0.881,1.19-0.763c0.539,0.118,0.881,0.651,0.763,1.19 c-0.997,4.557-4.586,8.146-9.143,9.143C34.623,43.854,34.552,43.861,34.48,43.861z M35.773,48.688c-0.454,0-0.865-0.312-0.973-0.773 c-0.126-0.537,0.209-1.075,0.747-1.2c2.725-0.635,5.207-2.014,7.18-3.986s3.352-4.455,3.986-7.18c0.125-0.538,0.662-0.88,1.2-0.747 c0.538,0.125,0.873,0.663,0.747,1.2c-0.72,3.09-2.282,5.904-4.52,8.141c-2.236,2.237-5.051,3.8-8.141,4.52 C35.925,48.68,35.849,48.688,35.773,48.688z M47.678,47.678c-2.854,2.854-6.441,4.862-10.377,5.809 c-0.078,0.019-0.157,0.027-0.234,0.027c-0.451,0-0.861-0.308-0.972-0.767c-0.129-0.536,0.202-1.076,0.739-1.206 c3.576-0.859,6.837-2.685,9.43-5.277s4.418-5.854,5.277-9.429c0.129-0.538,0.668-0.868,1.206-0.739 c0.537,0.13,0.868,0.67,0.739,1.206C52.54,41.236,50.531,44.824,47.678,47.678z"
              />
              &nbsp;
            </g>
          </svg>
        </div>
      </div>
      <div className="text-xs font-bold text-center">
        {song && (
          <div>
            I am listening to&nbsp;
            <span className="text-green-400">
              {song.name}
              &nbsp;
            </span>
            by&nbsp;
            {song.artists}
          </div>
        )}
      </div>
    </div>
  );
};

export default Spotify;
