import ReactDOM from "react-dom/client";
import { MantineProvider, Text } from "@mantine/core";
import App from "./App";

function Demo() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <App />
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  Demo()
);
