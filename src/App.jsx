import React from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  function handleButtonClick(e) {
    // event bubbling 멈추기
    e.stopPropagation();
    console.log("버튼 클릭 됨");
  }

  function handleBoxClick() {
    console.log("박스 클릭 됨");
  }

  return (
    <ChakraProvider>
      {/* 버튼을 클릭해도 박스 클릭됨이 뜸*/}
      <Box onClick={handleBoxClick} w={"100px"} h={"100px"} bgColor={"orange"}>
        <Button onClick={handleButtonClick}>클릭1</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
