import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[50px] md:text-[80px] 2xl:text-[60px] leading-[72px] md:leading-[65px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[20px] 2xl:mb-[40px] flex flex-col relative">
                    <span>About Me</span>
                    {/* <span className="flex items-center gap-2">
                       
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        
                    </span> */}
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I am a final year Computer Science Engineering undergraduate at Dr. D. Y. Patil Institute of Technology, Pimpri in Pune. I have a passion for problem-solving, which led me to develop a strong understanding of data structures and algorithms. 
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                Additionally, I have a keen interest in Web Development and Android Development and also I am proud to say that I have solved over 650+ problems on LeetCode, which has greatly contributed to my proficiency in problem-solving, algorithm development, and data structures. I am committed to staying up-to-date with the latest industry trends and technologies, and I am always looking for new challenges to tackle
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                As a result, I am currently looking for internship opportunities to enhance my skills as an Android Developer and Front End Developer. I am eager to work on projects that challenge me and allow me to learn new things.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
