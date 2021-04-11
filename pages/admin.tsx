import { Button } from "@chakra-ui/button"
import { Box } from "@chakra-ui/layout"
import ManageFilters from "components/AdminPage/ManageFilters"
import NavBar from "components/AdminPage/NavBar"
import useAxios from 'axios-hooks'
import apiUrls from 'utils/apiUrls';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import ProductsList from "components/AdminPage/ProductsList"
import AddItem from "components/AdminPage/AddItem"

const Admin = () => {

  const [{ data, loading }] = useAxios(apiUrls.productsList)

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
          <AddItem />
        </Box>

        <ProductsList
          data={data?.productsList || []}
          loading={loading}
        />
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
