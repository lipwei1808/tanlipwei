import { FC } from 'react';

interface Props {
  command: string;
}

// eslint-disable-next-line arrow-body-style
const Ascii: FC<Props> = ({ command }) => {
  return (
    <div className="whitespace-pre col-start-1 col-span-3 row-span-3 justify-self-center">
      <p className="leading-[1px]">{'    ------------'}</p>
      <p className="leading-2">{'   / ========== \\'}</p>
      {/* <p className="leading-3">{'   / __________\\'}</p> */}
      <p>{'  |  __________  |'}</p>
      <p className="leading-3">{'  | | -        | |'}</p>
      <p>
        {'  | |'}
        {command ? (
          <span className="text-green-400 truncate ... whitespace-pre">
            {command.padEnd(10, ' ')}
          </span>
        ) : (
          '          '
        )}
        | |
      </p>
      <p className="leading-3">{'  | |__________| |'}</p>
      <p>{'  \\ ___________o / '}</p>
      <p className="leading-3">{'  / """""""""""" \\'}</p>
      <p>{' / :::::::::::::: \\'}</p>
      <p className="leading-3">(__________________)</p>
    </div>
  );
};

export default Ascii;
