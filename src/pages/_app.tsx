import '@dracula/dracula-ui/styles/dracula-ui.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import NavBar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>WZ Bingo</title>
            </Head>
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
