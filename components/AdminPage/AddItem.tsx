import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import ProductModalForm from "components/global/ProductModalForm"
import { useTranslation } from "react-i18next"

const AddItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t: tCommon } = useTranslation('common')

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>{tCommon('addItem')}</Button>
      <ProductModalForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default AddItem
