import { Grid } from "@mantine/core";
import MeteoCard from "./MeteoCard";
import { Giorno } from "./types";

const MeteoList = (props: { giorni: Giorno[]; setGiorno: any }) => {
  const { giorni, setGiorno } = props;
  return (
    <Grid align={"center"} columns={6} gutter={"xs"}>
      {giorni.map((giorno: Giorno) => (
        <Grid.Col span={1} key={giorno.giorno}>
          <MeteoCard giorno={giorno} key={giorno.giorno} setGiorno={setGiorno} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default MeteoList;
