import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import useAxios from "axios-hooks"
import ProductModalForm from "components/global/ProductModalForm"
import { useTranslation } from "react-i18next"
import { ProductInputs } from "types"
import apiUrls from "utils/apiUrls"

const AddItem = ({ refetchList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t: tCommon } = useTranslation('common')
  const [{ loading }, postList] = useAxios(
    {
      url: apiUrls.productsList,
      method: 'POST',
    },
    {
      manual: true
    }
  )

  const onSubmit = async (values: ProductInputs) => {
    postList({
      data: values
    })

    refetchList()
  }

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>{tCommon('addItem')}</Button>
      <ProductModalForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
    </>
  )
}

export default AddItem
