import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex 
      as="header"
      w="100%"
      maxW={1440}
      h={["50px", "100"]}
      mx="auto"
      px="1rem"
      align="center"
      justify="center"
      bg="white"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignContent="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          w={["81px","184px"]}
          src="/images/Logo.svg"
          alt="World Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
