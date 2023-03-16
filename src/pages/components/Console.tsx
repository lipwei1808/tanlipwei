import { Fira_Code as FireCode } from 'next/font/google';
import { Children, FC, RefObject } from 'react';

const inter = FireCode({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
});
interface Props {
  consoleRef: RefObject<HTMLDivElement>;
  html: (() => JSX.Element)[];
}

const Console: FC<Props> = ({ consoleRef, html }) => (
  <div ref={consoleRef}>
    {html?.length &&
      Children.toArray(html.map((el) => <div className={inter.className}>{el()}</div>))}
  </div>
);

export default Console;
