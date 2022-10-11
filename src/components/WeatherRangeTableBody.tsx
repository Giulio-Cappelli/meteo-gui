import { Fascia } from "./types";
import WeatherRange from "./WeatherRange";

const WeatherRangeTableBody = (props: { fasce: Fascia[] }) => {
  const { fasce } = props;
  return (
    <>
      {fasce.map((fascia) => {
        return (
          <WeatherRange
            fascia={fascia}
            key={fascia.idPrevisioneFascia.toString()}
          />
        );
      })}
    </>
  );
};

export default WeatherRangeTableBody;
