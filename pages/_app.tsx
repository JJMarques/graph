import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Head>
                <title>Graphic!!!</title>
            </Head>
                <Component {...pageProps} />
        </ChakraProvider>
    )
}