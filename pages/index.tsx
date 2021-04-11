import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router'
import { Alert, AlertIcon, Box, Button, FormControl, Input, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LocaleSelect from 'components/global/LocaleSelect';
import useAxios from 'axios-hooks';
import apiUrls from 'utils/apiUrls';
import initAxios from 'utils/initAxios';

const Home = () => {
  const router = useRouter()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const { t: tAuth, i18n } = useTranslation('auth')


  const [{ loading, error }, postAuth] = useAxios(
    {
      url: `${apiUrls.auth}`,
      method: "POST"
    },
    {
      manual: true
    }
  )

  const onSubmit = async ({ email, password }) => {
    try {

      const { data } = await postAuth({
        data: {
          email,
          password
        }
      })

      localStorage.setItem('token', data.token)

      initAxios(data.token)

      const url = '/admin'
      router.push(url, url, { locale: i18n.language })

    } catch (error) {
      console.error(error)
    }
  }

  const renderEmailInput = ({ field }) =>
    <Input
      value={field.value}
      onChange={field.onChange}
      type="email"
      marginBottom="2"
      placeholder={tAuth('email')}
    />

  const renderPasswordInput = ({ field }) =>
    <Input
      value={field.value}
      onChange={field.onChange}
      type="password"
      placeholder={tAuth('password')}
    />

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
        {error &&
          <Alert status="error" marginBottom="5" borderRadius="md">
            <AlertIcon />
            {tAuth('wrongCreds')}
          </Alert>
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Controller
              render={renderEmailInput}
              name="email"
              control={control}
            />

            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>
          <FormControl>
            <Controller
              render={renderPasswordInput}
              name="password"
              control={control}
            />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>

          <Button
            isLoading={loading}
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