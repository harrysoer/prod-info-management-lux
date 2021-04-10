import { Button } from "@chakra-ui/button"
import { Box, Text } from "@chakra-ui/layout"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { useRouter } from "next/router"
import { User } from "react-feather"

const NavBar = () => {
  const router = useRouter()

  const onLogout = () => {
    localStorage.clear()
    router.replace('/')
  }

  return (
    <Box
      width="100vw"
      paddingY="20px"
      paddingX="15px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      background="blue.500"
      textColor="white"
      boxShadow="md"
    >
      <Box fontSize="x-large" fontWeight="bold">
        P.I.M Admin
      </Box>

      <Box>
        <Menu isLazy>
          <MenuButton
            as={Button}
            fontSize="16px"
            variant="ghost"
            colorScheme="white"
            leftIcon={<User />}
          >
            Admin
          </MenuButton>
          <MenuList color="black" textAlign="center">
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default NavBar
