import React from "react";
import {
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ChakraProvider>
      <Button onClick={onOpen}>모달 오픈 버튼!</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>모달 헤더 입니다 </ModalHeader>
            <ModalBody>모달 바디 입니다 </ModalBody>
            <ModalFooter>
              모달 푸터 입니다
              <Button onClick={onClose}>닫기</Button>
              <Button colorScheme={"red"}>저장</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
