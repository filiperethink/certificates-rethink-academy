import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/arizonia";
import "@fontsource/mr-de-haviland";
import "@fontsource/clicker-script";
import "@fontsource/licorice";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import CustomRoutes from "./routes";
import customTheme from "./theme";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <CustomRoutes />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
