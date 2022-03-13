import {
  Flex,
  Grid,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
interface ContentProps {
  text: string;
  numberCountries: number;
  textCountries: string;
  numberLanguages: number;
  textLanguages: string;
  numberCities: number;
  textCities: string;
  textPopover: string;
}

export function Content(
  { text,
    numberCountries,
    textCountries,
    numberLanguages,
    textLanguages,
    numberCities,
    textCities,
    textPopover 
  }: ContentProps
) {
    return (
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr" ]}
        gap={[5, 10, 16, 20]} my={["8", "20"]}
      >
        <Text
          fontSize={["lg", "xl", "xl", "2xl"]}
          fontWeight="400"
          color="gray.700"
          textAlign="justify"
        >
          {text}
        </Text>

        <Flex
          align="center"
          justify="space-between"
        >
          <Flex
            direction="column"
            justify="center"
            align={["flex-start", "flex-start", "center"]}
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.400"
              fontWeight="500"
            >
              {numberCountries}
            </Heading>
            <Text
              fontWeight="600"
              fontSize={["md, xl"]}
              color="gray.700"
            >
              {textCountries}
            </Text>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            align={["flex-start", "flex-start", "center"]}
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.400"
              fontWeight="500"
            >
              {numberLanguages}
            </Heading>
            <Text
              fontWeight="600"
              fontSize={["md, xl"]}
              color="gray.700"
            >
            {textLanguages}
            </Text>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            align={["flex-start", "flex-start", "center"]}
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.400"
              fontWeight="500"
            >
              {numberCities}
            </Heading>
            <Text
              fontWeight="600"
              fontSize={["md, xl"]}
              color="gray.700"
            >
              {textCities}
              <Popover>
                <PopoverTrigger>
                  <span>
                    <Icon
                      as={RiInformationLine}
                      cursor="pointer"
                      ml="1"
                      color="gray.700"
                      w={["10px", "16px"]}
                      h={["10px", "16px"]}
                    />
                  </span>
                </PopoverTrigger>
                <PopoverContent bg="gray.700" color="yellow.400">
                  <PopoverArrow bg="gray.700" />
                  <PopoverCloseButton />
                  <PopoverBody fontWeight="400" fontSize="lg">
                    {textPopover}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Text>
          </Flex>
        </Flex>
      </Grid>
    );
  }
