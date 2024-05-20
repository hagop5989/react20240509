import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <label htmlFor={"input1"}>이름</label>
      <input id={"input1"} />
      <hr />
      <Center>
        <Box w={{ base: "100%", md: "50%" }}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
          </FormControl>
        </Box>
      </Center>
      <hr />
      <Checkbox>체크박스</Checkbox>
      <Checkbox>Lorem.</Checkbox>
      <Checkbox>Illo.</Checkbox>
      <Checkbox>Vero?</Checkbox>
      <hr />
      <Radio value={1}>radio1</Radio>
      <Radio value={2}>radio2</Radio>
      <Radio value={3}>radio3</Radio>
      <hr />
      <Switch>스위치</Switch>
      <hr />
      <Textarea>Textarea 입니다.</Textarea>
    </ChakraProvider>
  );
}

export default App;
