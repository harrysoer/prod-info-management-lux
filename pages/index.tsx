import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react'

const Home = () => {
  const router = useRouter()
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    router.push('/admin')
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
          marginBottom="9"
        >
          P.I.M. Admin
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input placeholder="Email" marginBottom="15px" />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>
          <FormControl>
            <Input placeholder="Password" type="password" />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            display="block"
            marginLeft="auto"
            marginTop="20px"
          >
            Sign-in
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Home