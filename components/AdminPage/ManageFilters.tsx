import { Box, Input } from "@chakra-ui/react"
import { Search } from 'react-feather';
import { useTranslation } from "react-i18next";

const ManageFilters = () => {

  const { t: tCommon } = useTranslation('common')

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
        placeholder={(tCommon('name'))}
        marginLeft="22px"
        width="20%"
      />
      <Input
        placeholder={(tCommon('description'))}
        marginLeft="22px"
        width="20%"
      />
      <Input
        placeholder={(tCommon('brand'))}
        marginLeft="22px"
        width="20%"
      />

    </Box>
  )
}

export default ManageFilters
