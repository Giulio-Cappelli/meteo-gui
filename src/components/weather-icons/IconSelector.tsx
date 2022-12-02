const IconSelector = (props: {
  descIcona: string;
  icona: string;
  ora?: string;
  height?: number;
}) => {
  const { descIcona, ora = "Pomeriggio", icona, height = 100 } = props;

  if (ora === "Sera" || ora === "Notte") {
    switch (descIcona) {
      case "Poco nuvoloso":
        return (
          <img
            src={require("./icons/fair_night.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Coperto con piogge deboli":
        return (
          <img
            src={require("./icons/lightrain.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Coperto":
      case "Nuvoloso":
        return (
          <img
            src={require("./icons/partlycloudy_night.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Molto nuvoloso":
        return (
          <img
            src={require("./icons/cloudy.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Nuvoloso con piogge deboli":
        return (
          <img
            src={require("./icons/lightrainshowers_night.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Molto nuvoloso con piogge deboli":
        return (
          <img
            src={require("./icons/rainshowers_night.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Coperto con nevicate deboli":
        return (
          <img
            src={require("./icons/lightsnow.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Molto nuvoloso con nevicate deboli":
        return (
          <img
            src={require("./icons/lightsnowshowers_night.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      default:
        return <p>{descIcona}</p>;
    }
  } else if (ora === "Mattina" || ora === "Pomeriggio") {
    switch (descIcona) {
      case "Poco nuvoloso":
        return (
          <img
            src={require("./icons/fair_day.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Coperto con piogge deboli":
        return (
          <img
            src={require("./icons/lightrain.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Coperto":
      case "Nuvoloso":
        return (
          <img
            src={require("./icons/partlycloudy_day.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Molto nuvoloso":
        return (
          <img
            src={require("./icons/cloudy.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Nuvoloso con piogge deboli":
        return (
          <img
            src={require("./icons/lightrainshowers_day.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Molto nuvoloso con piogge deboli":
        return (
          <img
            src={require("./icons/rainshowers_day.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Coperto con nevicate deboli":
        return (
          <img
            src={require("./icons/lightsnow.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      case "Molto nuvoloso con nevicate deboli":
        return (
          <img
            src={require("./icons/lightsnowshowers_day.png")}
            alt={descIcona}
            width={height}
            height={height}
          />
        );
      default:
        return <p>{descIcona}</p>;
    }
  } else {
    return <></>;
  }
};

export default IconSelector;
