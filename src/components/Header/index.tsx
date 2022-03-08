import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex 
      as="header"
      w="100%"
      h={["50px", "100px"]}
      mx="auto"
      px="1rem"
      align="center"
      justify="center"
      bg="gray.100"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        alignContent="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          w={["81px","184.06px"]}
          h={["20px", "45.92px"]}
          src="/images/logo.svg"
          alt="Logo World Trip com avião voando"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
