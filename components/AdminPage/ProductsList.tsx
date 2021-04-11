import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
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
import { ProductList } from "types";

type ProductsListProps = {
  data: ProductList,
  loading: boolean
  page: number,
  numberOfPages: number,
  setPage: Dispatch<SetStateAction<number>>
}

const ProductsList: React.FC<ProductsListProps> = ({
  data = [],
  page = 1,
  numberOfPages = 1,
  setPage,
}) => {

  const { t: tCommon } = useTranslation('common')

  const onPrev = () => setPage(page - 1)
  const onNext = () => setPage(page + 1)

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
              <Th>{tCommon('description')}</Th>
              <Th>{tCommon('category')}</Th>
              <Th>{tCommon('brand')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(product => (
              <Tr key={product.id}>
                <Td>{product.description}</Td>
                <Td>{product.category}</Td>
                <Td>{product.brand}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>{tCommon('description')}</Th>
              <Th>{tCommon('category')}</Th>
              <Th>{tCommon('brand')}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
      <Box
        marginTop="20px"
        marginBottom="50px"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <IconButton
          size="lg"
          colorScheme="gray"
          aria-label="page-previous"
          icon={<ChevronLeft size={20} />}
          disabled={page === 1}
          onClick={onPrev}
        />

        <Text mx="20px">{page} / {numberOfPages}</Text>

        <IconButton
          size="lg"
          colorScheme="gray"
          aria-label="page-next"
          icon={<ChevronRight size={20} />}
          disabled={numberOfPages === page}
          onClick={onNext}
        />
      </Box>
    </>
  )
}

export default ProductsList
