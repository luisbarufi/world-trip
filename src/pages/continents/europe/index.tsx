import { Flex } from "@chakra-ui/react";
import ContinentBanner from "../../../components/ContinentBanner/ContinentBanner";

export default function Europe() {
  return (

    <Flex w="100%" h="100%" bg="gray.100" direction="column">
      <ContinentBanner
        title="Europa"
        imageName="bannerEurope"
      />
    </Flex>

  );
}
