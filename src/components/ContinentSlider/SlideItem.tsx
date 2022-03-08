import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideItemProps {
  image: string;
  title: string;
  paragraph: string;
}

export function SlideItem({ image, title, paragraph}: SlideItemProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url('images/${image}.png')`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      textAlign="center"
    >
      <Link href="/contient/europe">
        <a>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="bold"
            color={["gray.100", "gray.700"]}
          >
            {title}
          </Heading>
          <Text
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
            fontWeight="bold"
            color="gray.100"
          >
            {paragraph}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
