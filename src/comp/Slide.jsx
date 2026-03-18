import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


function Slide() {
  return (
    <>
      <Swiper
        slidesPerView={2.25}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="./images/slide1.png" alt="" />
            <div>
                <span>Mountains</span> <br/> <br/>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma.
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./images/slide2.png" alt="" />
            <div>
                <span>Beautiful Flowers</span> <br/> <br/>
                Lorem ipsum dolor sit amet consectetur. Purus ultrices etiam etiam amet volutpat nullam. Aliquam fringilla volutpat magna rhoncus tellus purus interdum. Quis adipiscing in rhoncus adipiscing dui suspendisse pulvinar. Mi diam egestas laoreet risus diam.
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./images/slide3.png" alt="" />
            <div>
                <span>Rivers</span> <br/> <br/>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./images/slide2.png" alt="" />
            <div>
                <span>Beautiful Flowers</span> <br/> <br/>
                Lorem ipsum dolor sit amet consectetur. Purus ultrices etiam etiam amet volutpat nullam. Aliquam fringilla volutpat magna rhoncus tellus purus interdum. Quis adipiscing in rhoncus adipiscing dui suspendisse pulvinar. Mi diam egestas laoreet risus diam.
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./images/slide3.png" alt="" />
            <div>
                <span>Rivers</span> <br/> <br/>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slide