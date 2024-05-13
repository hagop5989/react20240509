import React from "react";
import { Badge, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"blue"}>클릭</Button>
        <Button colorScheme={"red"}>
          알림 <Badge colorScheme={"green"}>new뱃지</Badge>
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
