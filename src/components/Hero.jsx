import { useState } from "react";
import { motion } from "framer-motion";

import TinkerC from "../assets/videos/Tinker1a.mp4";
import TinkerA from "../assets/videos/Tinker2a.mp4";
import TinkerD from "../assets/videos/Tinker3a.mp4";
import TinkerB from "../assets/videos/Tinker4a.mp4";

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
              onClick={() => setIsModalOpen(true)}
            >
              User Waitlist
            </div>
            <div
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={() => setIsModalOpen(true)}
            >
              Creator Waitlist
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
              <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
                <video width="540" height="480" autoplay="true" muted="true" loop="true">
                  <source src={TinkerA} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
                <p className="mt-6 mb-8 text-1xl lg:text-2xl custom-block-big-title">
                  Tinkerverse is a playground<br/>reimagined with the power of AI and VR
                </p>
              </div>
            </div>

            <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg2 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
              <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
                <p className="mt-6 mb-8 text-1xl lg:text-2xl custom-block-big-title">
                  A place where ideas are<br/>visualized and shared
                </p>
              </div>
              <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
                <video width="540" height="480" autoplay="true" muted="true" loop="true">
                  <source src={TinkerB} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg2 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
              <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
                <video width="540" height="480" autoplay="true" muted="true" loop="true">
                  <source src={TinkerC} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
                <p className="mt-6 mb-8 text-1xl lg:text-2xl custom-block-big-title">
                  A place where you can tinker in<br/>3D, 4D, or beyond
                </p>
              </div>
            </div>

            <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg2 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
              <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
                <p className="mt-6 mb-8 text-1xl lg:text-2xl custom-block-big-title">
                  So go ahead Tinkers,<br/>what dimension is your imagination?
                </p>
              </div>
              <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
                <video width="540" height="480" autoplay="true" muted="true" loop="true">
                  <source src={TinkerD} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
