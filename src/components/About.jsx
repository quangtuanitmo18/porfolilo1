import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <h3 align="">
          A passionate full stack developer from Viet Nam. I'm a 3rd year
          student of Information Security at ITMO University, Russia.
        </h3>
        <p className="mt-6">
          - 🔭 I’m currently working on{" "}
          <a href="https://www.lectron.com/" className="text-[#915EFF]">
            Lectron
          </a>
        </p>
        <p> - 🌱 I’m currently learning: docker, kubernetes, jenkins </p>
        <p> - 💬 Ask me about: reactjs, nextjs, php, laravel, nodejs</p>
        <p>- 📫 How to reach me: quangtuanitmo18@gmail.com</p>
      </motion.p>
      <h3 align="left" className="mt-6">
        Connect with me:
      </h3>
      <p align="left" className="mt-5 flex gap-5">
        <a href="https://linkedin.com/in/tuan-quang-a0590a241/" target="blank">
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="tuan quang"
            height="30"
            width="40"
          />
        </a>
        <a href="https://fb.com/gunm4a1cb/" target="blank">
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
            alt="quang tuan"
            height="30"
            width="40"
          />
        </a>
      </p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
