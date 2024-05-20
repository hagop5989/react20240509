import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box m={1} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={2} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={10} bgColor={"tomato"}>
        Ad, illum obcaecati.
      </Box>
      <Box m={20} bgColor={"tomato"}>
        Ducimus, eligendi ullam.
      </Box>
    </ChakraProvider>
  );
}

export default App;
