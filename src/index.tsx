import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./components/App";

const Demo = () => {
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
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  Demo()
);
