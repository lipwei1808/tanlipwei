import { FC, RefObject } from 'react';

interface Props {
  consoleRef: RefObject<HTMLDivElement>;
}

// eslint-disable-next-line arrow-body-style
const Console: FC<Props> = ({ consoleRef }) => {
  return <div ref={consoleRef} />;
};

export default Console;
