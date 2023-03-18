import { FC } from 'react';

import classes from './Input.module.scss';

interface Props {
  command: string;
}

// eslint-disable-next-line arrow-body-style
const Ascii: FC<Props> = ({ command }) => {
  return (
    <div className="hidden whitespace-pre col-start-1 col-span-3 row-span-3 justify-self-center lg:block">
      <p className="leading-[1px]">{'    ---------------'}</p>
      <p className="leading-2">{'   / ============= \\'}</p>
      {/* <p className="leading-3">{'   / __________\\'}</p> */}
      <p>{'  |  _____________  |'}</p>
      <p className="leading-3">{'  | |             | |'}</p>
      <p>
        {'  | |'}
        {command ? (
          <span className="text-green-400 truncate ... whitespace-pre">
            &nbsp;
            {command.padEnd(12, ' ')}
          </span>
        ) : (
          <span className={`${classes.animateCursor} text-green-400`}>{' _           '}</span>
        )}
        | |
      </p>
      <p className="leading-3">{'  | |_____________| |'}</p>
      <p>{'  \\ ______________o / '}</p>
      <p className="leading-3">{'  / """"""""""""""" \\'}</p>
      <p>{' / ::::::::::::::::: \\'}</p>
      <p className="leading-3">(_____________________)</p>
    </div>
  );
};

export default Ascii;
