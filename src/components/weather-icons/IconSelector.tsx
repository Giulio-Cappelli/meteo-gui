import SvgPartlyCloudyDay from "./icons/partly-cloudy-day";

const IconSelector = (props: { descIcona: string; icona: string }) => {
  const { descIcona, icona } = props;

  switch (descIcona) {
    case "Poco nuvoloso":
      return <SvgPartlyCloudyDay />;

    default:
      return <img src={icona} title={descIcona} alt={icona} />;
  }
};

export default IconSelector;
