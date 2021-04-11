import { useEffect, useState } from "react"
import { Box } from "@chakra-ui/layout"
import ManageFilters from "components/AdminPage/ManageFilters"
import NavBar from "components/AdminPage/NavBar"
import useAxios from 'axios-hooks'
import apiUrls from 'utils/apiUrls';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import ProductsList from "components/AdminPage/ProductsList"
import AddItem from "components/AdminPage/AddItem"

const Admin = () => {

  const [page, setPage] = useState(1)

  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [brand, setBrand] = useState('')

  const [{ data, loading }, getList] = useAxios(
    {
      url: `${apiUrls.productsList}`,
      params: {
        p: page
      }
    },
    {
      manual: true
    }
  )

  useEffect(() => {
    getList({
      params: {
        p: 1,
        category,
        description,
        brand
      }
    })
  }, [category, description, brand])

  useEffect(() => {
    getList({
      params: {
        p: page,
        category,
        description,
        brand
      }
    })
  }, [page])

  return (
    <>
      <NavBar />
      <Box paddingTop="40px" paddingX="35px">
        <Box
          display="flex"
          justifyContent="space-between"
          marginBottom="30px"
        >
          <ManageFilters
            setCategory={setCategory}
            setDescription={setDescription}
            setBrand={setBrand}
          />
          <AddItem refetchList={getList} />
        </Box>

        <ProductsList
          data={data?.productsList || []}
          page={data?.page || 1}
          numberOfPages={data?.numberOfPages || 1}
          loading={loading}
          setPage={setPage}
          refetchList={getList}
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
