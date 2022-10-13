import {
  Box,
  Space,
  Center,
  Group,
  ThemeIcon,
  Text,
  Divider,
} from "@mantine/core";
import { Giorno } from "./types";
import IconSelector from "./weather-icons/IconSelector";

const displayInfoCard = (giorno: Giorno) => {
  return;
};

const MeteoCard = (props: { giorno: Giorno }) => {
  const { giorno } = props;
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        textAlign: "center",
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "pointer",

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
      })}
      key={giorno.giorno}
      onClick={() => {
        console.log(giorno.giorno);
      }}
    >
      <Text size="md" align="center">
        {giorno.giorno}
      </Text>
      <Space h={"xs"} />
      <Divider />
      <Space h={"xs"} />{" "}
      <IconSelector descIcona={giorno.descIcona} icona={giorno.icona} />
      <Space h="xs" />
      <Group position={"center"}>
        <ThemeIcon size={"xl"} color={"blue"}>
          <Text>{giorno.tMinGiorno}</Text>
        </ThemeIcon>
        <ThemeIcon size={"xl"} color={"red"}>
          <Text>{giorno.tMaxGiorno}</Text>
        </ThemeIcon>
      </Group>
    </Box>
  );
};

export default MeteoCard;
