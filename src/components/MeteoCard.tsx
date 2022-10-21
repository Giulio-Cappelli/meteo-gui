import { Box, Space, Divider, Title } from "@mantine/core";
import convertDate from "./functions/convertDate";
import TemperatureTable from "./TemperatureTable";
import { Giorno } from "./types";
import IconSelector from "./weather-icons/IconSelector";

const MeteoCard = (props: { giorno: Giorno; setGiorno: any }) => {
  const { giorno, setGiorno } = props;

  const { giorno_txt, giorno_num, mese_num } = convertDate(giorno);

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        textAlign: "center",
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "pointer",

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
      })}
      key={giorno.giorno}
      onClick={() => {
        console.log();
        setGiorno(giorno);
      }}
    >
      <Title order={3} align="center">
        {giorno_txt}
      </Title>
      <Title order={4} align="center">
        {giorno_num + "/" + mese_num}
      </Title>
      <Space h={"xs"} />
      <Divider />
      <Space h={"xs"} />
      <IconSelector descIcona={giorno.descIcona} icona={giorno.icona} />
      <Space h="xs" />
      <TemperatureTable tMin={giorno.tMinGiorno} tMax={giorno.tMaxGiorno} />
    </Box>
  );
};

export default MeteoCard;
