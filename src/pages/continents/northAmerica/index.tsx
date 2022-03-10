import { Flex } from "@chakra-ui/react";
import ContinentBanner from "../../../components/ContinentBanner/ContinentBanner";

export default function NorthAmerica() {
  return (
    <Flex w="100%" h="100%" bg="gray.100" direction="column">
      <ContinentBanner 
        title="America do Norte"
        imageName="northAmerica"
      />
    </Flex>
  );
}
