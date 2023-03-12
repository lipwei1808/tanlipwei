import { Fira_Code as FiraCode } from 'next/font/google';
import 'react-tooltip/dist/react-tooltip.css';

import '@/styles/globals.css';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

const firaCode = FiraCode({ subsets: ['latin'], weight: '400' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={firaCode.className}>
      <Component {...pageProps} />
    </main>
  );
}
