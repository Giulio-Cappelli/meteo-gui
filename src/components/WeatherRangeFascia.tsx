import { Text, Box, Center, HoverCard } from "@mantine/core";
import capitalizeFirstLetter from "./functions/capitalizeFirstLetter";
import { Fascia } from "./types";
import IconSelector from "./weather-icons/IconSelector";

const WeatherRangeFascia = (props: { fascia: Fascia }) => {
  const { fascia } = props;
  return (
    <tr>
      <td>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.blue[8],
            color: "#fff",
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
          })}
        >
          <Text>{capitalizeFirstLetter(fascia.fasciaPer)}</Text>
        </Box>
      </td>
      <td>
        <IconSelector descIcona={fascia.descIcona} icona={fascia.icona} />
      </td>
      <td>{fascia.descPrecProb}</td>
      <td>{fascia.descPrecInten}</td>
      <td>{fascia.descVentoDirValle}</td>
      <td>{fascia.zeroTermico}</td>
    </tr>
  );
};

export default WeatherRangeFascia;
