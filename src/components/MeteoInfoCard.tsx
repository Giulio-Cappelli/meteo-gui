import { Card, Divider, Grid, Space, Title } from "@mantine/core";
import convertDate from "./functions/convertDate";
import { Giorno } from "./types";
import WeatherRangeDisplayer from "./WeatherRangeDisplayer";
import WeatherRangeTemperature from "./WeatherRangeTemperature";

const MeteoInfoCard = (props: { giorno: Giorno | undefined }) => {
  const { giorno } = props;

  console.log("MeteoInfoCard:", giorno);

  if (giorno != undefined) {
    const { giorno_txt, giorno_num, mese_num } = convertDate(giorno);

    return (
      <Card radius={"md"}>
        <Title order={3} align="center">
          {giorno_txt}
        </Title>
        <Title order={4} align="center">
          {giorno_num + "/" + mese_num}
        </Title>
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
  } else {
    return <div></div>;
  }
};

export default MeteoInfoCard;
