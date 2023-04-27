import { Grid } from "@mantine/core";
import MeteoCard from "./MeteoCard";
import { Giorno } from "./types";

const MeteoCardList = (props: { giorni: Giorno[]; setGiorno: any }) => {
  const { giorni, setGiorno } = props;
  return (
    <Grid justify={"center"} align={"center"} columns={12} gutter={"xs"}>
      {giorni.map((giorno: Giorno) => (
        <Grid.Col span={2} key={giorno.giorno}>
          <MeteoCard
            giorno={giorno}
            key={giorno.giorno}
            setGiorno={setGiorno}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default MeteoCardList;
