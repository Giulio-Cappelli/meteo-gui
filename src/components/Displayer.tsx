import { useEffect, useState } from "react";
import { Risposta } from "./types";

const GetData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const Displayer = () => {
  const [previsione, setPrevisioniMeteo] = useState();

  useEffect(() => {
    GetData(
      "https://www.meteotrentino.it/protcivtn-meteo/api/front/previsioneOpenDataLocalita?localita=TRENTO"
    ).then((status) => {
      setPrevisioniMeteo(status);
    });
  }, []);

  if (!previsione) {
    console.log("API Non va");
    return (
      <div>
        <p>Errore, API non funzionante</p>
      </div>
    );
  }

  console.log(previsione);

  // const previsione: PrevisioneMeteo = {
  //   giorni: previsione[0].previsione.giorni,
  //   localita: previsione[0].previsione.localita,
  //   quota: previsione[0].previsione.quota,
  // };

  return (
    <div>
      <p>{JSON.stringify(previsione)}</p>
    </div>
  );
  // return <Grid align={"center"} columns={6} gutter={"xs"}>
  //     for (let n_giorni = 0; n_giorni < Response.previsione.giorni.size(); n_giorni++) {
  //       const element = array[n_giorni];
  //       <Grid.Col>n_giorni</Grid.Col>
  //     }
  //   </Grid>;
};

export default Displayer;
