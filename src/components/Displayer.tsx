import { Center, Space } from "@mantine/core";
import { useState } from "react";
import useSWR from "swr";
import MeteoInfoCard from "./MeteoInfoCard";
import MeteoList from "./MeteoList";
import { Giorno, Risposta } from "./types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Displayer = () => {
  const [giorno, setGiorno] = useState<Giorno>();
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

  return (
    <Center>
      <div style={{ width: "75%" }}>
        <MeteoList
          giorni={data.previsione[0].giorni}
          key={data.idPrevisione}
          setGiorno={setGiorno}
        />
        <Space h={"xs"} />
        <MeteoInfoCard giorno={giorno} />
      </div>
    </Center>
  );
};
//<MeteoInfoCard giorno={data.previsione[0].giorni[0]} />

export default Displayer;
