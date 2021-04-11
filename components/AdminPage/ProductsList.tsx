import { AxiosPromise, AxiosRequestConfig } from "axios";
import useAxios, { RefetchOptions } from "axios-hooks";
import apiUrls from "utils/apiUrls";
import { Dispatch, SetStateAction, useState } from "react";
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
  Tr,
  useDisclosure
} from "@chakra-ui/react"
import { useToast } from "@chakra-ui/toast"
import ProductModalForm from "components/global/ProductModalForm"
import { ChevronLeft, ChevronRight, Edit3 } from 'react-feather';
import { ProductList, ProductInputs } from "types";

type ProductsListProps = {
  data: ProductList,
  loading: boolean
  page: number,
  numberOfPages: number,
  setPage: Dispatch<SetStateAction<number>>
  refetchList:  (config?: AxiosRequestConfig, options?: RefetchOptions) => AxiosPromise<any>
}

const ProductsList: React.FC<ProductsListProps> = ({
  data = [],
  page = 1,
  numberOfPages = 1,
  setPage,
  refetchList
}) => {

  const toast = useToast()
  const [formInput, setFormInput] = useState<ProductInputs | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t: tCommon } = useTranslation('common')
  const [{ loading }, putList] = useAxios(
    {
      url: apiUrls.productsList,
      method: 'PUT',
    },
    {
      manual: true
    }
  )

  const onPrev = () => setPage(page - 1)
  const onNext = () => setPage(page + 1)

  const onEdit = (product: ProductInputs) => {
    setFormInput(product)
    onOpen()
  }

  const onSubmitUpdate = (newValues: ProductInputs) => {

    try {
      putList({
        data: newValues
      })
      refetchList()

      onClose()

      toast({
        title: tCommon('successUpdate'),
        status: "success",
      })
    } catch (_) {
      toast({
        title: tCommon('somethingWentWrong'),
        status: "error",
      })
    }
  }

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
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {data.map(product => (
              <Tr key={product.id}>
                <Td>{product.description}</Td>
                <Td>{product.category}</Td>
                <Td>{product.brand}</Td>
                <Td>
                  <IconButton
                    colorScheme="blue"
                    aria-label="edit"
                    onClick={() => onEdit(product)}
                    icon={<Edit3 size={16} />}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>{tCommon('description')}</Th>
              <Th>{tCommon('category')}</Th>
              <Th>{tCommon('brand')}</Th>
              <Th />
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

      <ProductModalForm
        defaultValues={formInput}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmitUpdate}
      />
    </>
  )
}

export default ProductsList
