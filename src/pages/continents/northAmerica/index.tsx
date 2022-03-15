import { Flex, Grid, Heading } from "@chakra-ui/react";
import { City } from "../../../components/City";
import { Content } from "../../../components/Content";
import ContinentBanner from "../../../components/ContinentBanner/ContinentBanner";

export default function NorthAmerica() {
  return (
    <Flex w="100%" h="100%" bg="gray.100" direction="column">
      <ContinentBanner title="America do Norte" imageName="bannerNorthAmerica" />

      <Flex  direction="column" maxW="1160px" mx="auto" mb="100" px="1rem">
        <Content 
          text="
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec
            rutrum congue leo eget malesuada. Donec sollicitudin molestie
            malesuada. Vivamus magna justo, lacinia eget consectetur sed,
            convallis at tellus.
          "
          numberCountries={3}
          textCountries="países"
          numberLanguages={2}
          textLanguages="línguas"
          numberCities={40}
          textCities="cidades +100"
          textPopover="Cidade do México, Nova Iorque, Toronto, Los Angeles"
        />

        <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
          Cidades +100
        </Heading>

        <Grid
          templateColumns={[
            "1fr",
            "1fr 1fr",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)"
          ]}
          gap={["20px", "45px"]}
          alignItems="center"
          justifyContent="center"
          px={["30px", "0"]}
        >
          <City
            imgHeader="new_york"
            title="Nova Iorque"
            paragraph="EUA"
            flag="flag_eua"
            continent="northAmerica"
          />
          <City
            imgHeader="los_angeles"
            title="Los Angeles"
            paragraph="EUA"
            flag="flag_eua"
            continent="northAmerica"
          />
          <City
            imgHeader="toronto"
            title="Toronto"
            paragraph="Canadá"
            flag="flag_canada"
            continent="northAmerica"
          />
          <City
            imgHeader="mexico"
            title="Cid. do México"
            paragraph="México"
            flag="flag_mexico"
            continent="northAmerica"
          />
        </Grid>
      </Flex>
    </Flex>
  );
}
