import { Space } from "@mantine/core";
import useSWR from "swr";
import MeteoInfoCard from "./MeteoInfoCard";
import MeteoList from "./MeteoList";
import { Risposta } from "./types";

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
    <>
      <MeteoList giorni={data.previsione[0].giorni} key={data.idPrevisione} />
      <Space h={"xs"} />
      <MeteoInfoCard giorno={data.previsione[0].giorni[0]} />
    </>
  );
};

export default Displayer;
