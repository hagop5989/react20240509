import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  ChakraProvider,
  Progress,
  Stack,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"blue"}> 클릭1 </Button>
        <Button colorScheme={"orange"}> 클릭2 </Button>
        <Button
          sx={{
            color: "skyblue",
            backgroundColor: "black",
            fontSize: "30px",
            padding: "20px",
            margin: "20px",
          }}
          colorScheme={"gray"}
        >
          {" "}
          click3{" "}
        </Button>
      </div>

      <div>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
        </Alert>
      </div>
      <div>
        <br />
      </div>
      <Stack spacing={5}>
        <Progress colorScheme="green" size="sm" value={20} />
        <Progress colorScheme="green" size="md" value={20} />
        <Progress colorScheme="green" size="lg" value={20} />
        <Progress colorScheme="green" height="32px" value={20} />
      </Stack>
      <br />
      <Progress
        colorScheme={"red"}
        sx={{ height: "50px" }}
        size="xs"
        isIndeterminate
      />

      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          전송 완료 되었습니다!!
        </AlertTitle>
        <AlertDescription maxWidth="sm">abcccccccccccccccc</AlertDescription>
      </Alert>
    </ChakraProvider>
  );
}

export default App;
