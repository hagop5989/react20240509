import React from "react";
import { Box, Center, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Flex justify={"space-evenly"}>
        <Box bgColor={"orange"}>1</Box>
        <Box bgColor={"teal"}>2</Box>
        <Box bgColor={"yellow"}>3</Box>
      </Flex>
      <hr />
      <Flex justify={"space-evenly"}>
        <Box bgColor={"green"}>1</Box>
        <Box bgColor={"gold"}>2</Box>
        <Spacer /> {/*멀리 떨어 트려 놓고 싶을 때 사용*/}
        <Box bgColor={"gray"}>3</Box>
      </Flex>
      <hr />
      <Center>
        <Box>가운데 배치 해줌</Box>
      </Center>
      <Center>
        <Box w={{ base: "100%", md: "500px" }} bgColor={"linen"}>
          화면 크기 따라서 가운데 배치{" "}
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
