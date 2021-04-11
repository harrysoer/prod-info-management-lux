import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import initAxios from 'utils/initAxios'

import 'styles/globals.css'

const isClientSide = typeof window !== 'undefined'

initAxios(isClientSide ? localStorage.getItem('token') : '')

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)