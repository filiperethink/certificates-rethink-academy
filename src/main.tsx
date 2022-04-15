import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import CustomRoutes from "./routes";
import customTheme from "./theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <CustomRoutes />
    </ChakraProvider>
  </StrictMode>
);
