import { Table } from "@mantine/core";
import { Fascia } from "./types";
import WeatherrangeTableBody from "./WeatherRangeTableBody";
import WeatherRangeTableHeader from "./WeatherRangeTableHeader";

const bodyOfTable = () => {
  return <tr></tr>;
};

const WeatherRangeDisplayer = (props: { fasce: Fascia[] }) => {
  const { fasce } = props;
  return (
    <Table striped>
      <thead>
        <WeatherRangeTableHeader />
      </thead>
      <tbody>
        <WeatherrangeTableBody />
      </tbody>
    </Table>
  );
};

export default WeatherRangeDisplayer;
