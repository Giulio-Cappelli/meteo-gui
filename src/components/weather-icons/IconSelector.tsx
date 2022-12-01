import FairDay from "./icons/FairDay";
import FairNight from "./icons/FairNight";

const IconSelector = (props: {
  descIcona: string;
  icona: string;
  ora?: string;
  height?: number;
}) => {
  const { descIcona, ora = "Pomeriggio", icona, height } = props;

  if (ora === "Sera" || ora === "Notte") {
    switch (descIcona) {
      case "Poco nuvoloso":
        return <FairNight />;
      // case "Nuvoloso":
      //   return <SvgCloudy height={height} />;
      // case "Nuvoloso con piogge deboli":
      //   return <SvgPartlyCloudyDayDrizzle height={height} />;
      // case "Molto nuvoloso con piogge deboli":
      //   return <SvgOvercastDayDrizzle height={height} />;
      // case "Coperto con piogge deboli":
      //   return <SvgOvercastDrizzle height={height} />;
      default:
        return (
          <img src={icona} title={descIcona} alt={icona} height={height} />
        );
    }
  } else if (ora === "Mattina" || ora === "Pomeriggio") {
    switch (descIcona) {
      case "Poco nuvoloso":
        return <FairDay />;
      // case "Nuvoloso":
      //   return <SvgCloudy height={height} />;
      // case "Nuvoloso con piogge deboli":
      //   return <SvgPartlyCloudyDayDrizzle height={height} />;
      // case "Molto nuvoloso con piogge deboli":
      //   return <SvgOvercastDayDrizzle height={height} />;
      // case "Coperto con piogge deboli":
      //   return <SvgOvercastDrizzle height={height} />;
      default:
        return (
          <img src={icona} title={descIcona} alt={icona} height={height} />
        );
    }
  }
};

export default IconSelector;
