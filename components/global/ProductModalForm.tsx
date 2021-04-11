import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next"
import { Button } from "@chakra-ui/button"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { BrandEnum, CategoryEnum, ProductInputs } from "types"
import { Select } from '@chakra-ui/select';
import { useEffect } from 'react';

const categoryOptions = Object.values(CategoryEnum)
const brandOptions = Object.values(BrandEnum)

type ProductModalFormProps = {
  isOpen: boolean;
  onClose?: () => void;
  defaultValues?: ProductInputs
  onSubmit: (values: ProductInputs) => void
}

const ProductModalForm: React.FC<ProductModalFormProps> = ({ defaultValues, isOpen, onClose, onSubmit }) => {
  const { handleSubmit, control, reset } = useForm<ProductInputs>({
    defaultValues: {
      category: categoryOptions[0],
      brand: categoryOptions[0]
    }
  });

  const { t: tCommon } = useTranslation('common')

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues)
    }

    if (isOpen && !defaultValues) {
      reset({
        category: categoryOptions[0],
        brand: categoryOptions[0]
      })
    }
  }, [defaultValues, isOpen])

  const onFormatSubmit = (values: ProductInputs) => {
    values.price = Number(values.price)

    onSubmit(values)
  }

  const renderInputDescription = ({ field }) =>
    <Input
      value={field.value}
      onChange={field.onChange}
      placeholder={tCommon('description')}
    />

  const renderInputCategory = ({ field }) =>
    <Select
      value={field.value}
      onChange={field.onChange}
    >
      {
        categoryOptions.map(option => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))
      }
    </Select>

  const renderInputBrand = ({ field }) =>
    <Select
      value={field.value}
      onChange={field.onChange}
    >
      {
        brandOptions.map(option => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))
      }
    </Select>

  const renderInputMaterial = ({ field }) =>
    <Input
      value={field.value}
      onChange={field.onChange}
      placeholder={tCommon('material')}
    />

  const renderInputPrice = ({ field }) =>
    <Input
      type="number"
      value={field.value}
      onChange={field.onChange}
      placeholder={tCommon('price')}
    />


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onFormatSubmit)}>

          <ModalHeader>{defaultValues ? "Edit" : "Add"}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl marginBottom="25px" id="description" isRequired>
              <FormLabel>{tCommon('description')}</FormLabel>
              <Controller
                render={renderInputDescription}
                name="description"
                control={control}
              />
            </FormControl>

            <FormControl marginBottom="25px" id="category" >
              <FormLabel>{tCommon('category')}</FormLabel>
              <Controller
                render={renderInputCategory}
                name="category"
                control={control}
              />
            </FormControl>

            <FormControl marginBottom="25px" id="brand" >
              <FormLabel>{tCommon('brand')}</FormLabel>
              <Controller
                render={renderInputBrand}
                name="brand"
                control={control}
              />
            </FormControl>

            <FormControl marginBottom="25px" id="material" isRequired>
              <FormLabel>{tCommon('material')}</FormLabel>
              <Controller
                render={renderInputMaterial}
                name="material"
                control={control}
              />
            </FormControl>

            <FormControl marginBottom="25px" id="price" isRequired>
              <FormLabel>{tCommon('price')}</FormLabel>
              <Controller
                render={renderInputPrice}
                name="price"
                control={control}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" type="submit">
              Save
            </Button>
          </ModalFooter>
        </form>

      </ModalContent>
    </Modal >
  )
}

export default ProductModalForm
