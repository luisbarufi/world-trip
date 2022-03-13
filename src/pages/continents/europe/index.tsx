import { Flex } from "@chakra-ui/react";
import { Cities } from "../../../components/Cities";
import { Content } from "../../../components/Content";
import ContinentBanner from "../../../components/ContinentBanner/ContinentBanner";

export default function Europe() {
  return (

    <Flex w="100%" h="100%" bg="gray.100" direction="column">
      <ContinentBanner title="Europa" imageName="bannerEurope" />

      <Flex  direction="column" maxW="1160px" mx="auto" mb="100" px="1rem">
        <Content />

        <Cities />
      </Flex>
    </Flex>

  );
}
