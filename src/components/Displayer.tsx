import {
  Card,
  Center,
  Grid,
  Text,
  Space,
  Group,
  Button,
  ThemeIcon,
} from "@mantine/core";
import useSWR from "swr";
import { Risposta, Giorno } from "./types";

import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Displayer = () => {
  const { data, error } = useSWR<Risposta, Error>(
    "https://www.meteotrentino.it/protcivtn-meteo/api/front/previsioneOpenDataLocalita?localita=TRENTO",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  if (data.previsione[0] === undefined)
    return <div>Previsione non presente</div>;

  //Log per vedere se i dati vengono ricevuti correttamente
  //console.log(data.previsione[0].giorni);

  // let elementi: any;
  // data.previsione[0].giorni.forEach((giorno) => {
  //   console.log(giorno.giorno);
  //   let grid = document.createElement("Grid.Col");
  //   grid.innerHTML = giorno.giorno;
  //   elementi += grid;
  // });

  return (
    <Grid align={"center"} columns={6} gutter={"xs"}>
      {createElements(data.previsione[0].giorni)}
    </Grid>
  );
};

const createElements = (giorni: Giorno[]) => {
  return giorni.map((giorno: Giorno) => {
    return createElement(giorno);
  });
};
const createElement = (giorno: Giorno) => {
  return (
    <Grid.Col span={1} key={giorno.giorno}>
      {createCard(giorno)}
    </Grid.Col>
  );
};
const createCard = (giorno: Giorno) => {
  return (
    <Card withBorder>
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

export default Displayer;
