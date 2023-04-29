import { motion } from "framer-motion";

import Tinker1 from "../assets/videos/Tinker1a.mp4";
import Tinker2 from "../assets/videos/Tinker2a.mp4";
import Tinker3 from "../assets/videos/Tinker3a.mp4";
import Tinker4 from "../assets/videos/Tinker4a.mp4";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="characters"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="relative w-screen flex justify-center ">
            <video width="540" height="480" autoplay muted loop>
              <source src={Tinker1} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <video width="540" height="480" autoplay muted loop>
              <source src={Tinker2} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative w-screen flex justify-center ">
            <video width="540" height="480" autoplay muted loop>
              <source src={Tinker3} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <video width="540" height="480" autoplay muted loop>
              <source src={Tinker4} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
