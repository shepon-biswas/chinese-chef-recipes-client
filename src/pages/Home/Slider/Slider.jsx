import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

const Slider = () => {
  return (
    <>
      <div className="w-full md:w-10/12 mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          effect={"fade"}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" relative">
              <img
                className="object-cover w-full h-[550px] rounded"
                src="https://images.pexels.com/photos/8093867/pexels-photo-8093867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></img>
              <div className="absolute top-[40%] left-[10%] text-center text-white w-3/4 mx-auto">
                <h4 className="text-4xl font-bold my-3">Meet Our Generation Top Chef</h4>
                <p className="text-gray-200">Chinese food, rich and colorful, has diversified color, aromatic flavor, and excellent taste as its main features. With these three characteristics, it is not only tasty but also a work of art for people to appreciate.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
              <img
                className="object-cover w-full h-[550px] rounded"
                src="https://images.pexels.com/photos/7363694/pexels-photo-7363694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></img>
              <div className="absolute top-[40%] left-[10%] text-center text-white w-3/4 mx-auto">
                <h4 className="text-4xl font-bold my-3">Meet Our Generation Top Chef</h4>
                <p className="text-gray-200">Chinese food, rich and colorful, has diversified color, aromatic flavor, and excellent taste as its main features. With these three characteristics, it is not only tasty but also a work of art for people to appreciate.</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
              <img
                className="object-cover w-full h-[550px] rounded"
                src="https://images.pexels.com/photos/6549194/pexels-photo-6549194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></img>
              <div className="absolute top-[40%] left-[10%] text-center text-white w-3/4 mx-auto">
                <h4 className="text-4xl font-bold my-3">Meet Our Generation Top Chef</h4>
                <p className="text-gray-200">Chinese food, rich and colorful, has diversified color, aromatic flavor, and excellent taste as its main features. With these three characteristics, it is not only tasty but also a work of art for people to appreciate.</p>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
