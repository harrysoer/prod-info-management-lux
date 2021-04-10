import { Box, Button, Drawer, Input, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react"
import { Search } from 'react-feather';

const ManageFilters = () => {


  return (
    <Box
      flex={1}
      display="flex"
      alignItems="center"
      marginRight="30px"
    >
      <Box>
        <Search size="20px" />
      </Box>

      <Input
        placeholder="Name"
        marginLeft="22px"
        width="20%"
      />
      <Input
        placeholder="Description"
        marginLeft="22px"
        width="20%"
      />
      <Input
        placeholder="Brand"
        marginLeft="22px"
        width="20%"
      />

    </Box>
  )
}

export default ManageFilters
