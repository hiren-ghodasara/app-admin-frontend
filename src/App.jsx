import { Button, Stack } from "@chakra-ui/react";
import * as React from "react";

function App() {
  const handleLogin = () => {
    fetch("https://app-api-8gan.onrender.com/login", { method: "POST" })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleCheck = () => {
    fetch("https://app-api-8gan.onrender.com/check")
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Vite + React</h1>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="solid" onClick={handleLogin}>
          Login
        </Button>
        <Button colorScheme="teal" variant="outline" onClick={handleCheck}>
          Check
        </Button>
      </Stack>
    </>
  );
}

export default App;
