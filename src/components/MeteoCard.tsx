import { Card, Space, Center, Group, ThemeIcon, Text } from "@mantine/core";
import { Giorno } from "./types";

const displayInfoCard = (giorno: Giorno) => {
  return;
};

const MeteoCard = (props: { giorno: Giorno }) => {
  const { giorno } = props;
  return (
    <Card
      withBorder
      onClick={() => displayInfoCard(giorno)}
      key={giorno.giorno}
    >
      <Text size="md" align="center">
        {giorno.giorno}
      </Text>
      <Space h="xs" />
      <Center>
        <img src={giorno.icona} />
      </Center>
      <Space h="xs" />
      <Group position={"center"}>
        <ThemeIcon size={"xl"} color={"blue"}>
          <Text>{giorno.tMinGiorno}</Text>
        </ThemeIcon>
        <ThemeIcon size={"xl"} color={"red"}>
          <Text>{giorno.tMaxGiorno}</Text>
        </ThemeIcon>
      </Group>
    </Card>
  );
};

export default MeteoCard;
