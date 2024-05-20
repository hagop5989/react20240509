import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box bgColor={"tomato"} w={"50%"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"teal"} w={"768px"}>
        768px
      </Box>
      <Box bgColor={"lightcoral"} w={{ base: "100%", md: "500px" }}>
        768을 넘으면 500px, 그 전엔 100%
      </Box>
    </ChakraProvider>
  );
}

export default App;
