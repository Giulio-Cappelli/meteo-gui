import { Table } from "@mantine/core";
import { Fascia } from "./types";
import WeatherRangeTableBody from "./WeatherRangeTableBody";
import WeatherRangeTableHeader from "./WeatherRangeTableHeader";

const WeatherRangeDisplayer = (props: { fasce: Fascia[] }) => {
  const { fasce } = props;
  return (
    <Table striped>
      <thead>
        <WeatherRangeTableHeader />
      </thead>
      <tbody>
        <WeatherRangeTableBody fasce={fasce} />
      </tbody>
    </Table>
  );
};

export default WeatherRangeDisplayer;
