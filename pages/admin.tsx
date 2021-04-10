import { Button } from "@chakra-ui/button"
import { Box, Text } from "@chakra-ui/layout"
import ManageFilters from "components/AdminPage/ManageFilters"
import NavBar from "components/AdminPage/NavBar"
import ProductsList from "components/AdminPage/ProductsList"

const Admin = () => {
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
          <Button colorScheme="green">Add Item</Button>
        </Box>

        <ProductsList />
      </Box>
    </>
  )
}

export default Admin
