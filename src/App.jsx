import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <label htmlFor={"input1"}>이름</label>
      <input id={"input1"} />
      <hr />
      <Center>
        <Box>
          <FormControl w={{ base: "100%", md: "50%" }}>
            <FormLabel>이름</FormLabel>
            <Input />
          </FormControl>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
