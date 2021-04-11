import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { useToast } from "@chakra-ui/toast"
import { AxiosPromise, AxiosRequestConfig } from "axios"
import useAxios, { RefetchOptions } from "axios-hooks"
import ProductModalForm from "components/global/ProductModalForm"
import { useTranslation } from "react-i18next"
import { ProductInputs } from "types"
import apiUrls from "utils/apiUrls"

type AddItemProps = {
  refetchList: (config?: AxiosRequestConfig, options?: RefetchOptions) => AxiosPromise<any>
}

const AddItem: React.FC<AddItemProps> = ({ refetchList }) => {

  const toast = useToast()
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

  const onSubmitAdd = async (values: ProductInputs) => {
    try {
      await postList({
        data: values
      })
      refetchList()

      onClose()

      toast({
        title: tCommon('successAdded'),
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
      <Button colorScheme="green" onClick={onOpen}>{tCommon('addItem')}</Button>
      <ProductModalForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmitAdd} />
    </>
  )
}

export default AddItem
