import {
  AppShell,
  Aside,
  Burger,
  Footer,
  Grid,
  Header,
  MediaQuery,
  Navbar,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import Displayer from "./Displayer";

const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      /*navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }*/
      /*aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }*/
      footer={
        <Footer height={60} p="md">
          <Grid
            justify={"space-between"}
            align={"center"}
            columns={21}
            gutter={"xs"}
          >
            <Grid.Col span={"content"}>
              <Text
                component="a"
                target={"_blank"}
                href="https://www.giuliocappelli.me"
              >
                Made by Giulio Cappelli
              </Text>
            </Grid.Col>
            <Grid.Col
              span={"content"}
              offset={12}
              style={{ textAlign: "right" }}
            >
              <Text
                component="a"
                href="https://www.meteotrentino.it\"
                target="_blank"
              >
                Dati pubblicati da Provincia Autonoma di Trento - Meteotrentino
              </Text>
              <Space w={"md"} />
            </Grid.Col>
            <Grid.Col span={"content"}>
              <Text
                component="a"
                rel="license"
                href="https://creativecommons.org/licenses/by/3.0/it/"
              >
                <img
                  alt="Licenza Creative Commons"
                  src="https://licensebuttons.net/l/by/3.0/it/80x15.png"
                />
              </Text>
            </Grid.Col>
          </Grid>
        </Footer>
      }
      header={
        <Header height={60} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>MeteoApp</Text>
          </div>
        </Header>
      }
    >
      <Displayer />
    </AppShell>
  );
};

export default App;
