import { Flex, Heading } from "@chakra-ui/react";
import { Header } from "../Header";

interface ContinentBannerProps {
  title: string;
  imageName: string;
}

export default function ContinentBanner({title, imageName}: ContinentBannerProps) {
  return (
    <Flex direction="column" align="center">
      <Header />

      <Flex
        w="100%"
        maxW={["1440px"]}
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgImage={`url('/images/${imageName}.png')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          textAlign={["center", "left"]}
          fontSize={["1.75rem", "5xl"]}
          color="gray.100"
          fontWeight="500"
        >
          {title}
        </Heading>
        
      </Flex>
    </Flex> 
  );
}
