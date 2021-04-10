import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'

import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)