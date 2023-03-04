import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
