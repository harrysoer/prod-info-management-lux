import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LocaleSelect from 'components/global/LocaleSelect';

const Home = () => {
  const router = useRouter()
  const { handleSubmit } = useForm();
  const { t: tAuth, i18n } = useTranslation('auth')

  const onSubmit = () => {
    const url = '/admin'
    router.push(url, url, { locale: i18n.language })
  }

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        padding="30px"
        border="1px"
        borderRadius="xl"
        borderColor="gray.200"
        minWidth="400px"
      >
        <Text
          fontSize="xx-large"
          textAlign="center"
          fontWeight="bold"
          marginBottom="1"
        >
          P.I.M. Admin
        </Text>

        <Box marginBottom="9" textAlign="center">
          <LocaleSelect />
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input placeholder={tAuth('email')} marginBottom="15px" />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>
          <FormControl>
            <Input placeholder={tAuth('password')} type="password" />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            display="block"
            marginLeft="auto"
            marginTop="20px"
          >
            {tAuth('signIn')}
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['auth', 'locales']),
  },
})

export default Home