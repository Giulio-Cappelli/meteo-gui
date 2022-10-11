import { Card, Center, Text } from "@mantine/core";
import { Giorno } from "./types";

const MeteoInfoCard = (props: { giorno: Giorno }) => {
  const { giorno } = props;
  return (
    <Card>
      <Center>
        <Text size={20}>{giorno.giorno}</Text>
      </Center>
    </Card>
  );
};

export default MeteoInfoCard;
