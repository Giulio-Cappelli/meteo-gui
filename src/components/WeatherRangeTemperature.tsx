import { Group, ThemeIcon, Text, Table } from "@mantine/core";
import { timeEnd } from "console";

const WeatherRangeTemperature = (props: { tMin: number; tMax: number }) => {
  const { tMin, tMax } = props;
  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            <Text align="center">Temperature</Text>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Group position={"center"}>
              <ThemeIcon size={"xl"} color={"blue"}>
                <Text>{tMin}</Text>
              </ThemeIcon>
              <ThemeIcon size={"xl"} color={"red"}>
                <Text>{tMax}</Text>
              </ThemeIcon>
            </Group>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default WeatherRangeTemperature;
