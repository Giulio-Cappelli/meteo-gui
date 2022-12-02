import { Center, Text } from "@mantine/core";

const WeatherRangeTableHeader = () => {
  return (
    <tr>
      <th>
        <Center>
          <Text>Fascia</Text>
        </Center>
      </th>
      <th>
        <Center>
          <Text>Condizioni Meteo</Text>
        </Center>
      </th>
      <th>
        <Center>
          <Text>Pioggia (probabilità %)</Text>
        </Center>
      </th>
      <th>
        <Center>
          <Text>Pioggia (intensità)</Text>
        </Center>
      </th>
      <th>
        <Center>
          <Text>Vento (direzione)</Text>
        </Center>
      </th>
      <th>
        <Center>
          <Text>Zero termico</Text>
        </Center>
      </th>
      <th>
        <Center>
          <Text>Quota neve</Text>
        </Center>
      </th>
    </tr>
  );
};

export default WeatherRangeTableHeader;
