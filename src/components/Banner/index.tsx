import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('images/banner.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        maxW="1440px"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading
            color={["white", "gray.700"]}
            fontWeight="500"
            fontSize={["20px","36px"]}
            w={["238px", "426px"]}
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Heading>

          <Text
            color="gray.300"
            mt="5"
            fontWeight="400"
            fontSize={["0.875rem", "1.25rem"]}
            w={["333px", "333px", "524px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image 
          src="/images/Airplane.svg"
          alt="Avião amarelo voando entre nuvens"
          display={["none","none", "none","block"]}
          w={["300px","300px","290px", "350px", "430px"]}
          mt={["80px","80px","80px","155px", "110px"]}
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
