const GetData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  //console.log(data);
  return data.status;
};

const Displayer = () => {
  const previsioni_meteo = GetData(
    "https://www.meteotrentino.it/protcivtn-meteo/api/front/previsioneOpenDataLocalita?localita=TRENTO"
  );

  // Promise.resolve(previsioni_meteo).then((value) => {
  //   console.log(value); // "Success"
  // });
  console.log(previsioni_meteo);

  return (
    <div>
      <pre>{JSON.stringify(previsioni_meteo)}</pre>
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
