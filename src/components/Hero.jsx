import { useState } from "react";
import { motion } from "framer-motion";

import TinkerC from "../assets/videos/Tinker1a.mp4";
import TinkerA from "../assets/videos/Tinker2a.mp4";
import TinkerD from "../assets/videos/Tinker3a.mp4";
import TinkerB from "../assets/videos/Tinker4a.mp4";
import SolarSystem from "../assets/images/SolarSystem.png";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { InvitationModal } from "./InvitationModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <><section
      className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline md:hidden">Enter</span>{" "}
            <span className="hidden md:inline">Are you ready to enter the</span>
          </div>
          <div className="mt-2 sm:mt-0 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-20 md:px-24 lg:px-24">
            Tinkerverse
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-32">
            Create, Visualize, and Interact with High Dimensional Data
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
              className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
            >
              <a href="https://apps.apple.com/us/app/tinkerverse/id6474285797">Download Tinkerverse on Apple iOS</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section
      className="w-screen  flex justify-center items-center bg-customDarkBg2 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
        <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg2 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
              <div className="w-3/4 lg:w-1/2 flex justify mx-auto pt-1 lg:pt-0">
                <p className="mt-6 mb-8 text-1xl lg:text-2xl custom-block-big-title">
		  Tinkerverse is an augmented reality app that revolutionizes your learning and exploration experience. Step into an extraordinary journey across the universe with the first World in our app---a scalable solar system. Unlike any traditional educational app, Tinkerverse not only offers a wealth of information about our solar system but elevates your experience to new heights. Scale the sun and planets right before your eyes, offering a perspective that truly captures their majestic sizes. This feature provides an unmatched, hands-on learning experience, allowing users to understand and appreciate the vastness and beauty of space like never before. Whether you are a student, educator, or space enthusiast, Tinkerverse's Solar System is your gateway to exploring the cosmos in a way that's both educational and utterly captivating.
                </p>
              </div>
              <div className="w-4/5 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
		<img src={SolarSystem} alt="Solar System Icon."/>
              </div>
            </div>
          </motion.div>
        </div>
        {isModalOpen && (
          <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </section></>
  );
};
