import { Grid, GridItem } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelType icon="nightlife" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelType icon="beach" text="Praia" />
      </GridItem>
      <GridItem>
        <TravelType icon="modern" text="Moderno" />
      </GridItem>
      <GridItem>
        <TravelType icon="classic" text="Clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelType icon="more" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
