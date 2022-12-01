import { Box, Grid, Title } from "@mantine/core";

const Place = (props: { localita: string }) => {
  const { localita } = props;
  return (
    <Grid justify={"center"} align={"center"} columns={5} gutter={"xs"}>
      <Grid.Col span={1}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xs,
            borderRadius: theme.radius.md,
          })}
        >
          <Title order={3}>{localita}</Title>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Place;
