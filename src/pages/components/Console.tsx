import { Children, FC, RefObject } from 'react';

interface Props {
  consoleRef: RefObject<HTMLDivElement>;
  html: (() => JSX.Element)[];
}

// eslint-disable-next-line arrow-body-style
const Console: FC<Props> = ({ consoleRef, html }) => {
  return <div ref={consoleRef}>{html.length && Children.toArray(html.map((el) => el()))}</div>;
};

export default Console;
