import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex } from "@chakra-ui/react";
import { SlideItem } from './SlideItem';

export function ContinentSlider() {
  SwiperCore.use([Autoplay])
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{width: '100%', flex: '1'}}
      >
        <SwiperSlide>
          <SlideItem
            image="europe"
            title="Europa"
            paragraph="O contimente mais antigo" 
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideItem
            image="europe"
            title="Europa"
            paragraph="O contimente mais antigo" 
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideItem
            image="europe"
            title="Europa"
            paragraph="O contimente mais antigo" 
          />
        </SwiperSlide>

      </Swiper>

    </Flex>
  );
}
