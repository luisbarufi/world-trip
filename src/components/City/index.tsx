import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  imgHeader: string;
  title: string;
  paragraph: string;
  flag: string;
  continent: string;
}

export function City({imgHeader, title, paragraph, flag, continent}: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/images/${continent}/${imgHeader}.png`} h="170px" w="100%"/>
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">{title}</Heading>
          <Text
            mt="3"
            fontSize="md"
            color="gray.500"
            fontWeight="500"
          >
            {paragraph}
          </Text>
        </Flex>
        <Image 
          src={`/images/${continent}/${flag}.png`}
          w="30px"
          h="30px"
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
}
