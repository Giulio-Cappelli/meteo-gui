/*
import SvgCloudy from "./icons/cloudy";
import SvgOvercastDayDrizzle from "./icons/overcast-day-drizzle";
import SvgOvercastDrizzle from "./icons/overcast-drizzle";
import SvgPartlyCloudyDay from "./icons/partly-cloudy-day";
import SvgPartlyCloudyDayDrizzle from "./icons/partly-cloudy-day-drizzle";
*/
const IconSelector = (props: {
  descIcona: string;
  icona: string;
  height?: number;
}) => {
  const { descIcona, icona, height } = props;

  switch (descIcona) {
    // case "Poco nuvoloso":
    //   return <SvgPartlyCloudyDay height={height} />;
    // case "Nuvoloso":
    //   return <SvgCloudy height={height} />;
    // case "Nuvoloso con piogge deboli":
    //   return <SvgPartlyCloudyDayDrizzle height={height} />;
    // case "Molto nuvoloso con piogge deboli":
    //   return <SvgOvercastDayDrizzle height={height} />;
    // case "Coperto con piogge deboli":
    //   return <SvgOvercastDrizzle height={height} />;
    default:
      return <img src={icona} title={descIcona} alt={icona} height={height} />;
  }
};

export default IconSelector;
