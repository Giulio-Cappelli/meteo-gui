import { Box, Center, Text } from "@mantine/core";
import capitalizeFirstLetter from "./functions/capitalizeFirstLetter";
import { Fascia } from "./types";
import IconSelector from "./weather-icons/IconSelector";

const WeatherRangeFascia = (props: { fascia: Fascia; height: number }) => {
  const { fascia, height } = props;
  return (
    <tr>
      <td>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.blue[8],
            color: "#fff",
            textAlign: "center",
            padding: theme.spacing.xs,
            borderRadius: theme.radius.md,
          })}
        >
          <Text>{capitalizeFirstLetter(fascia.fasciaPer)}</Text>
        </Box>
      </td>
      <td>
        <Center>
          <IconSelector
            descIcona={fascia.descIcona}
            ora={capitalizeFirstLetter(fascia.fasciaPer)}
            icona={fascia.icona}
            height={height}
          />
        </Center>
      </td>
      <td>
        <Center>{fascia.descPrecProb}</Center>
      </td>
      <td>
        <Center>{fascia.descPrecInten}</Center>
      </td>
      <td>
        <Center>{fascia.descVentoDirValle}</Center>
      </td>
      <td>
        <Center>{fascia.zeroTermico} m</Center>
      </td>
      <td>
        <Center>{fascia.limiteNevicate} m</Center>
      </td>
    </tr>
  );
};

export default WeatherRangeFascia;
