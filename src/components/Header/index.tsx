import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex 
      as="header"
      w="100%"
      h={["3.125rem", "6.25rem"]}
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
        alignContent="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          w={["5.063rem","11.669rem"]}
          h={["1.25rem", "2.87rem"]}
          src="/images/Logo.svg"
          alt="Logo World Trip com avião voando"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
