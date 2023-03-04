import { Children, FC, RefObject } from 'react';

interface Props {
  consoleRef: RefObject<HTMLDivElement>;
  html: (() => JSX.Element)[];
}

const Console: FC<Props> = ({ consoleRef, html }) => (
  <div ref={consoleRef}>{html?.length && Children.toArray(html.map((el) => el()))}</div>
);

export default Console;
