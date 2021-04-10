import {
  Box,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from 'react-feather';
import { useTranslation } from "react-i18next";

const ProductsList = () => {

  const { t: tCommon } = useTranslation('common')

  return (
    <>
      <Box
        border="1px"
        borderRadius="xl"
        borderColor="gray.300"
        paddingY="10px"
        paddingX="20px"
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>{tCommon('name')}</Th>
              <Th>{tCommon('description')}</Th>
              <Th>{tCommon('brand')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Scarf</Td>
              <Td>Short Scarf</Td>
              <Td>Gucci</Td>
            </Tr>
            <Tr>
              <Td>Shoe</Td>
              <Td>Size 9</Td>
              <Td>Loui Viton</Td>
            </Tr>
            <Tr>
              <Td>Shirt</Td>
              <Td>Red medium</Td>
              <Td>Lacoste</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>{tCommon('name')}</Th>
              <Th>{tCommon('description')}</Th>
              <Th>{tCommon('brand')}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
      <Box
        marginTop="20px"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <IconButton
          disabled
          size="lg"
          colorScheme="gray"
          aria-label="page-previous"
          icon={<ChevronLeft size={20} />}
        />

        <Text mx="20px">1 / 5</Text>

        <IconButton
          size="lg"
          colorScheme="gray"
          aria-label="page-next"
          icon={<ChevronRight size={20} />}
        />
      </Box>
    </>
  )
}

export default ProductsList
