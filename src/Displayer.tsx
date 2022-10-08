import { useEffect, useState } from "react";

const GetData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const Displayer = () => {
  const [previsioni_meteo, setPrevisioniMeteo] = useState();

  useEffect(() => {
    GetData(
      "https://www.meteotrentino.it/protcivtn-meteo/api/front/previsioneOpenDataLocalita?localita=TRENTO"
    ).then((status) => {
      setPrevisioniMeteo(status);
    });
  }, []);

  if (previsioni_meteo) {
    console.log(previsioni_meteo.previsione[0].giorni);
  }

  return (
    <div>
      <p>{JSON.stringify(previsioni_meteo)}</p>
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
