import { Flex, Grid } from "@chakra-ui/react";
import { City } from "../../../components/City";
import { Content } from "../../../components/Content";
import ContinentBanner from "../../../components/ContinentBanner/ContinentBanner";

export default function Europe() {
  return (

    <Flex w="100%" h="100%" bg="gray.100" direction="column">
      <ContinentBanner title="Europa" imageName="bannerEurope" />

      <Flex  direction="column" maxW="1160px" mx="auto" mb="100" px="1rem">
        <Content 
          text="
            Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          "
          numberCountries={50}
          textCountries="países"
          numberLanguages={60}
          textLanguages="línguas"
          numberCities={27}
          textCities="cidades + 100"
          textPopover="Londres, Paris, Roma, Praga, Amsterdâ"
        />

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
            imgHeader="london"
            title="Londres"
            paragraph="Reino Unido"
            flag="flag_uk"
          />

          <City
            imgHeader="paris"
            title="Paris"
            paragraph="França"
            flag="flag_france"
          />

          <City
            imgHeader="roma"
            title="Roma"
            paragraph="Itália"
            flag="flag_italy"
          />

          <City
            imgHeader="praga"
            title="Praga"
            paragraph="República Tcheca"
            flag="flag_czech_republic"
          />

          <City
            imgHeader="amsterda"
            title="Amsterdã"
            paragraph="República Tcheca"
            flag="flag_netherlands"
          />
        </Grid>
      </Flex>
    </Flex>
  );
}
