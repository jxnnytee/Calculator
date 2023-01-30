import { Center } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Calculator from "./Calculator";

export function App() {
  return (
    <Center
      className="App"
      w="100vw"
      display='flex'
      flexDirection='column'
      h="100vh"
      bgGradient='linear(to-l, teal.700, purple.500)'
    >
      <Heading 
      mb='40px' 
      bgGradient='linear(to-l, red.500, purple.300)'
      bgClip='text'
      >My Calculator
      </Heading>
      <Calculator />
    </Center>
  );
}

export default App;
