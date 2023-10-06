import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteProduct, getAllData } from '../../redux/Admin/action';

export default function DeleteData({ id, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const deleteRequest = id => {
    dispatch(deleteProduct(id)).then(res => {
      dispatch(getAllData());
      alert('product successfully deleted');
    });
  };

  return (
    <>
      <Button onClick={onOpen} bg="red.500" colorScheme="white">
        {children}
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text>Bạn có chắc chắn muốn xóa sản phẩm này?</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Hủy
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                deleteRequest(id);
                onClose();
              }}
            >
              Xóa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
