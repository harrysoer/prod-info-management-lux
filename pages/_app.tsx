import Axios from 'axios'
import { configure } from 'axios-hooks'
import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'

import 'styles/globals.css'

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

configure({ axios })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)