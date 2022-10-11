import {
  Box,
  Card,
  Center,
  Divider,
  Grid,
  Space,
  Table,
  Text,
} from "@mantine/core";
import { Giorno } from "./types";
import WeatherRangeDisplayer from "./WeatherRangeDisplayer";

const MeteoInfoCard = (props: { giorno: Giorno }) => {
  const { giorno } = props;
  //console.log(giorno);
  return (
    <Card>
      <Text align="center">{giorno.giorno}</Text>
      <Space h={"xs"} />
      <Divider />
      <Space h={"xs"} />
      <Center>
        <img src={giorno.icona} title={giorno.descIcona} />
      </Center>
      <Space h={"xs"} />
      <Grid columns={5}>
        <Grid.Col span={1}>
          <Text>Ciao</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <WeatherRangeDisplayer fasce={giorno.fasce} />
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default MeteoInfoCard;
