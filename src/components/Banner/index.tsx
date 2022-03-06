import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('images/Banner.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading
            color="gray.700"
            fontWeight="700"
            fontSize={["1.25rem","2.25rem"]}
            w={["14.875rem", "26.625rem"]}
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Heading>

          <Text
            color="gray.300"
            mt="5"
            fontWeight="400"
            fontSize={["0.875rem", "1.25rem"]}
            w={["17.5rem", "20.813rem", "20.813rem", "32.75rem"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image 
          src="/images/Airplane.svg"
          alt="Avião amarelo voando entre nuvens"
          display={["none", "none", "none", "none","block"]}
          w={["300px", "300px", "300px", "430px"]}
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
