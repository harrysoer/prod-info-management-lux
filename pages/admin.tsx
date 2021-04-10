import { Button } from "@chakra-ui/button"
import { Box } from "@chakra-ui/layout"
import ManageFilters from "components/AdminPage/ManageFilters"
import NavBar from "components/AdminPage/NavBar"
import ProductsList from "components/AdminPage/ProductsList"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "react-i18next"

const Admin = () => {

  const { t: tCommon } = useTranslation('common')

  return (
    <>
      <NavBar />
      <Box paddingTop="40px" paddingX="35px">
        <Box
          display="flex"
          justifyContent="space-between"
          marginBottom="30px"
        >
          <ManageFilters />
          <Button colorScheme="green">{tCommon('addItem')}</Button>
        </Box>

        <ProductsList />
      </Box>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['auth', 'common', 'locales']),
  },
})

export default Admin
