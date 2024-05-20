import React from "react";
import { Button, ChakraProvider, useToast } from "@chakra-ui/react";

function App(props) {
  const toast = useToast();
  return (
    <ChakraProvider>
      <Button
        onClick={() => {
          toast({
            title: "경고 메세지",
            description: " 경고 : XXX 문제가 발생하였습니다.",
            position: "bottom-left",
            status: "warning",
            colorScheme: "red",
            isClosable: false,
            duration: 500,
          });
        }}
      >
        경고메세지
      </Button>
    </ChakraProvider>
  );
}

export default App;
