import { Source_Code_Pro as SourceCodePro } from 'next/font/google';
import 'react-tooltip/dist/react-tooltip.css';

import '@/styles/globals.css';

import InputProvider from './contexts/InputContext';

import type { AppProps } from 'next/app';

const sourceCodePro = SourceCodePro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['italic', 'normal'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <InputProvider>
      <main className={sourceCodePro.className}>
        <Component {...pageProps} />
      </main>
    </InputProvider>
  );
}
