import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <ChakraProvider>
      <Button leftIcon={<EmailIcon />}> Email</Button>
    </ChakraProvider>
  );
}

export default App;
