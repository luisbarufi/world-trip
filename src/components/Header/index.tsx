import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { RiArrowLeftSLine } from 'react-icons/ri';


export function Header() {
  const { asPath} = useRouter();
  const isHome = asPath !== "/"

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
        maxW="1160px"
        alignContent="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >

        {isHome && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}

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
