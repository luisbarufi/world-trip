import { Badge, Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  icon: string;
  text: string;
}

export function TravelType({ icon, text }: TravelTypeProps) {
  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
    >

      {isMobileVersion ? 
        <Image src={`/icons/${icon}.svg`} w="158px" h="145px" mb="6"/> : 
        <Text
          as="span"
          fontWeight="600"
          color="gray.700"
          fontSize={["md", "xl", "2xl"]}
        >
          <Box display="flex" alignItems="baseline">
            <Badge>
              <Image src="/icons/ellipse.svg" />
            </Badge>
            <Box ml="2">{text}</Box>
          </Box>
        </Text>
      }

    </Flex>
  );
}
