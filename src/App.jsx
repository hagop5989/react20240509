import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure, useToast } from "@chakra-ui/react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const toast = useToast();
  const { onOpen, isOpen, onClose } = useDisclosure();

  // use... : hook 이라 함.
  // if / for 내에서 사용하지 말 것

  if (true) {
    const [text, setText] = useState(""); /* 실행 될 수도 안 될수도 */
  }
  const [message, setMessage] =
    useState(""); /* 위의 hook 이 실행이 안되면 순서가 꼬임 */

  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
