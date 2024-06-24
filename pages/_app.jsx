import '../src/styles/globals.css';

//Providers
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../src/apollo/index";
import { SessionProvider } from '../src/context/session';

function MyApp({ Component, pageProps: { ...pageProps } }) {

    return <ApolloProvider client={apolloClient}>
        <SessionProvider>
            <Component {...pageProps} />
        </SessionProvider>
    </ApolloProvider>
}

export default MyApp;