import { Button } from "@chakra-ui/button"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, UseModalProps } from "@chakra-ui/modal"
import { Product } from "types"

type ProductModalFormProps = {
  isOpen: boolean;
  onClose?: () => void;
  defaultValues?: Product
}

const ProductModalForm: React.FC<ProductModalFormProps> = ({ defaultValues, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{defaultValues ? "Edit" : "Add"}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          Product Form
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProductModalForm
