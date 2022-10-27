import { Fascia } from "./types";
import WeatherRange from "./WeatherRangeFascia";

const WeatherRangeTableBody = (props: { fasce: Fascia[] }) => {
  const { fasce } = props;
  return (
    <>
      {fasce.map((fascia) => {
        return (
          <WeatherRange
            height={50}
            fascia={fascia}
            key={fascia.idPrevisioneFascia.toString()}
          />
        );
      })}
    </>
  );
};

export default WeatherRangeTableBody;
