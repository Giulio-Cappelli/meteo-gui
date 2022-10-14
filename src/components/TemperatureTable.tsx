import { ThemeIcon, Text, Table, Center } from "@mantine/core";

const TemperatureTable = (props: { tMin: number; tMax: number }) => {
  const { tMin, tMax } = props;
  return (
    <Table>
      <thead>
        <tr>
          <th>
            <Text align="center">Minima</Text>
          </th>
          <th>
            <Text align="center">Massima</Text>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Center>
              <ThemeIcon size={"xl"} color={"blue"}>
                <Text>{tMin}°C</Text>
              </ThemeIcon>
            </Center>
          </td>
          <td>
            <Center>
              <ThemeIcon size={"xl"} color={"red"}>
                <Text>{tMax}°C</Text>
              </ThemeIcon>
            </Center>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
export default TemperatureTable;
