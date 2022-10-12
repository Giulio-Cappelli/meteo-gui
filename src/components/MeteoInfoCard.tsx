import {
  Card,
  Divider,
  Grid,
  Group,
  Space,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { Giorno } from "./types";
import WeatherRangeDisplayer from "./WeatherRangeDisplayer";
import WeatherRangeTemperature from "./WeatherRangeTemperature";

const MeteoInfoCard = (props: { giorno: Giorno }) => {
  const { giorno } = props;
  console.log(giorno);
  return (
    <Card radius={"md"}>
      <Text align="center">{giorno.giorno}</Text>
      <Space h={"xs"} />
      <Divider />
      <Space h={"xs"} />
      <Grid columns={5}>
        <Grid.Col span={1}>
          <WeatherRangeTemperature
            tMin={giorno.tMinGiorno}
            tMax={giorno.tMaxGiorno}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <WeatherRangeDisplayer fasce={giorno.fasce} />
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default MeteoInfoCard;
