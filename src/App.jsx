import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid black",
          background: "tomato",
        }}
      >
        Lorem ipsum dolor.
      </div>
      <Box p={"10px"} m={"20px"} border={"1px solid black"} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"orange.50"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.400"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.500"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.600"}>Lorem ipsum dolor.</Box>
      <hr />
      <Box m={"10px"} bgColor={"lightgray"}>
        Lorem ipsum dolor.
      </Box>
      <Box mt={"10px"} bgColor={"lightgray"}>
        Ab, optio, totam!
      </Box>
      <Box mb={"10px"} bgColor={"lightgray"}>
        Alias, blanditiis porro?
      </Box>
      <Box ml={"10px"} bgColor={"lightgray"}>
        Hic necessitatibus, optio?
      </Box>
      <Box mr={"10px"} bgColor={"lightgray"}>
        Deserunt laborum, placeat.
      </Box>
      <Box mx={"10px"} bgColor={"lightgray"}>
        Illum, itaque, velit!
      </Box>
      <Box my={"10px"} bgColor={"lightgray"}>
        Nesciunt, odio, repellat.
      </Box>
      <Box bgColor={"teal"} p={"10px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"teal"} pt={"10px"}>
        Ducimus maxime, mollitia!
      </Box>
      <Box bgColor={"teal"} pb={"10px"}>
        Atque, necessitatibus tempore.
      </Box>
      <Box bgColor={"teal"} pl={"10px"}>
        Cumque, dolores unde.
      </Box>
      <Box bgColor={"teal"} pr={"10px"}>
        Deserunt, iure, porro.
      </Box>
      <Box bgColor={"teal"} px={"10px"}>
        Enim, fuga quasi.
      </Box>
      <Box bgColor={"teal"} py={"10px"}>
        Aliquid, fugiat sequi.
      </Box>
      <Box w={"500px"}>너비.</Box>
      <Box h={"500px"}>높이.</Box>
    </ChakraProvider>
  );
}

export default App;
