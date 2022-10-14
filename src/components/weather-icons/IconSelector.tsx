import SvgCloudy from "./icons/cloudy";
import SvgPartlyCloudyDay from "./icons/partly-cloudy-day";

const IconSelector = (props: {
  descIcona: string;
  icona: string;
  height?: number;
}) => {
  const { descIcona, icona, height } = props;

  switch (descIcona) {
    case "Poco nuvoloso":
      return <SvgPartlyCloudyDay height={height} />;
    case "Nuvoloso":
      return <SvgCloudy height={height} />;

    default:
      return <img src={icona} title={descIcona} alt={icona} />;
  }
};

export default IconSelector;
