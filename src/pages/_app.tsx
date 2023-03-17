import { Source_Code_Pro as SourceCodePro } from 'next/font/google';
import Head from 'next/head';
import 'react-tooltip/dist/react-tooltip.css';

import '@/styles/globals.css';

import InputProvider from './contexts/InputContext';
import ActiveElementProvider from './contexts/ActiveElementContext';

import type { AppProps } from 'next/app';

const sourceCodePro = SourceCodePro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['italic', 'normal'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="locale" content="en-SG" />
        <meta name="theme-color" content="#000" />
        <meta name="author" content="Tan Lip Wei" />
        <meta
          name="description"
          content="NUS Computer Science Undergraduate and Full-Stack Web Developer from Singapore"
        />
        {/* Favicons */}
        <link rel="shortcut icon" sizes="32x32" href="/favicon/favicon32.ico" />
        <link rel="icon" type="image/png" href="/favicon/favicon192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/favicon/favicon512.png" sizes="512x512" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png`" />
        {/* Opengraph tags */}
        <meta property="og:title" content="Tan Lip Wei" />
        <meta property="og:site_name" content="Tan Lip Wei" />
        <meta property="og:locale" content="en-SG" />
        <meta property="og:url" content="https://www.tanlipwei.com" />
        <meta
          property="og:description"
          content="NUS Computer Science Undergraduate and Full-Stack Web Developer from Singapore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og_image.jpg`" />
        <meta name="twitter:title" content="Tan Lip Wei" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.tanlipwei.com" />
        <meta
          name="twitter:description"
          content="NUS Computer Science Undergraduate and Full-Stack Web Developer from Singapore"
        />
        <link rel="canonical" href="https://www.tanlipwei.com" />
      </Head>
      <ActiveElementProvider>
        <InputProvider>
          <main className={sourceCodePro.className}>
            <Component {...pageProps} />
          </main>
        </InputProvider>
      </ActiveElementProvider>
    </>
  );
}
