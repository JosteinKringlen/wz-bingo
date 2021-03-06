import '@dracula/dracula-ui/styles/dracula-ui.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import NavBar from '../components/navbar';
import { BingoContextProvider } from '../contexts/bingo-context';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>WZ Bingo</title>
            </Head>
            <NavBar />
            <BingoContextProvider>
                <Component {...pageProps} />
            </BingoContextProvider>
        </>
    );
}

export default MyApp;
