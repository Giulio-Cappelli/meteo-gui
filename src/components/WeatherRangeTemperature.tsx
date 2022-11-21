import { Table, Text } from "@mantine/core";
import TemperatureTable from "./TemperatureTable";

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
            <TemperatureTable tMin={tMin} tMax={tMax} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default WeatherRangeTemperature;
