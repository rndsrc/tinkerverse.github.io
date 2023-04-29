import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TinkerverseLogo } from "../assets/logos/TinkerverseLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TinkerverseLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Tinkerverse
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
		&copy; Tinkerverse, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
