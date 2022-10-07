import { Text } from "@mantine/core";

import { useMantineTheme } from "@mantine/core";

function App() {
  const theme = useMantineTheme();

  return (
    <Text color={theme.colors.green[5]} align="center">
      Ciao
    </Text>
  );
}

export default App;
