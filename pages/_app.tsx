import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head'
import NavbarComponent from '../component/layout/Navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Head>
                <title>Graphic!!!</title>
            </Head>
            <Box
                maxW="1000px"
                minH="100vh"
                mx="auto"
                shadow="lg"
            >
                <NavbarComponent />
                <Component {...pageProps} />
            </Box>
        </ChakraProvider>
    )
}