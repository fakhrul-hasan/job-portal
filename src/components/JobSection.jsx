"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import job1 from "../../public/job-iocn1.svg";
import job2 from "../../public/job-iocn2.svg";
import job3 from "../../public/job-iocn3.svg";
import job4 from "../../public/job-iocn4.svg";
import job5 from "../../public/job-iocn5.svg";
import CountUp from 'react-countup';
import { Autoplay } from "swiper";
import Image from "next/image";

const JobSection = () => {
  return (
    <div className="px-8">
      <div className="mx-auto text-center w-2/3 p-10 my-5 space-y-8">
        <h1 className="text-primary-color text-9xl font-bold">
        <CountUp end={1000} separator="" />+</h1>
        <h3 className="font-semibold text-text-color text-5xl">
          Browse From Our Top Jobs
        </h3>
        <p className="text-gray-400 font-normal text-lg">
          The automated process starts as soon as your clothes go into the
          machine. The outcome is gleaming clothes. Placeholder text commonly
          used.
        </p>
      </div>
      <Swiper
        effect="slide"
        slidesPerView={3}
        loop={true}
        // centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border px-8 py-12 space-y-8 group">
            <div className="flex justify-between">
              <Image src={job1} />
              <span className="text-cyan-500 bg-cyan-50 px-4 py-2 rounded-full">
                Remote
              </span>
            </div>
            <h4 className="text-text-color font-semibold text-3xl">
              Design & creatives
            </h4>
            <p className="text-gray-400 font-normal text-lg">
              The automated process starts as soon as your clothes go into.
            </p>
            <button className="uppercase bg-violet-100 text-primary-color border-none py-4 px-8 rounded-full font-semibold group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
              apply now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border px-8 py-12 space-y-8 group">
            <Image src={job2} />
            <h4 className="text-text-color font-semibold text-3xl">
              Design & creatives
            </h4>
            <p className="text-gray-400 font-normal text-lg">
              The automated process starts as soon as your clothes go into.
            </p>
            <button className="uppercase bg-violet-100 text-primary-color border-none py-4 px-8 rounded-full font-semibold group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
              apply now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border px-8 py-12 space-y-8 group">
            <Image src={job3} />
            <h4 className="text-text-color font-semibold text-3xl">
              Design & creatives
            </h4>
            <p className="text-gray-400 font-normal text-lg">
              The automated process starts as soon as your clothes go into.
            </p>
            <button className="uppercase bg-violet-100 text-primary-color border-none py-4 px-8 rounded-full font-semibold group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
              apply now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border px-8 py-12 space-y-8 group">
            <Image src={job4} />
            <h4 className="text-text-color font-semibold text-3xl">
              Design & creatives
            </h4>
            <p className="text-gray-400 font-normal text-lg">
              The automated process starts as soon as your clothes go into.
            </p>
            <button className="uppercase bg-violet-100 text-primary-color border-none py-4 px-8 rounded-full font-semibold group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
              apply now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border px-8 py-12 space-y-8 group">
            <div className="flex justify-between">
              <Image src={job5} />
              <span className="text-cyan-500 bg-cyan-50 px-4 py-2 rounded-full">
                Remote
              </span>
            </div>
            <h4 className="text-text-color font-semibold text-3xl">
              Design & creatives
            </h4>
            <p className="text-gray-400 font-normal text-lg">
              The automated process starts as soon as your clothes go into.
            </p>
            <button className="uppercase bg-violet-100 text-primary-color border-none py-4 px-8 rounded-full font-semibold group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
              apply now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border px-8 py-12 space-y-8 group">
            <Image src={job3} />
            <h4 className="text-text-color font-semibold text-3xl">
              Design & creatives
            </h4>
            <p className="text-gray-400 font-normal text-lg">
              The automated process starts as soon as your clothes go into.
            </p>
            <button className="uppercase bg-violet-100 text-primary-color border-none py-4 px-8 rounded-full font-semibold group-hover:bg-primary-color group-hover:text-white transition-all duration-300">
              apply now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default JobSection;
