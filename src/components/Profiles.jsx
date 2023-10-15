import React from 'react'
import { useEffect } from 'react';
import p1 from "../assets/project-1.png"
import leetcode from "../assets/leetcode.png"
import gfg from "../assets/gfg.png"
import ha from "../assets/hackerrank.png"
import git from "../assets/github.png"
const Profiles = () => {
    
    
  return (
    <div>
         <div className="flex flex-wrap justify-center gap-2 md:gap-0  text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-20 mt-10">
                        <span>Coding Profiles</span>
                    </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-20 ">
               
                        <div
                            key={1}
                            className="flex flex-col gap-4 cursor-pointer"
                        >
                            <div className="bg-black rounded-[10px] aspect-video overflow-hidden bg-cover bg-center" >
                                <a href="https://leetcode.com/arshadshirgave18/">
                                <img
                                    src={leetcode}
                                //    onClick={handleClick(1)}
                                className="overflow-hidden bg-cover"
                                   // className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
                                />
                                </a>
                            </div>
                            <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                                Leetcode
                            </div>
                        </div>
                        <div
                            key={2}
                            className="flex flex-col gap-4 cursor-pointer"
                        >
                            <div className="bg-black rounded-[10px] aspect-video overflow-hidden bg-cover bg-center">
                            <a href="https://auth.geeksforgeeks.org/user/arshadshirgave/practice/">
                                <img
                                    src={gfg}
                                //    onClick={handleClick(1)}
                                   // className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
                                />
                                </a>
                            </div>
                            <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                                GeeksForGeeks
                            </div>
                        </div>
                        <div
                            key={3}
                            className="flex flex-col gap-4 cursor-pointer"
                        >
                            <div className="bg-black rounded-[10px] aspect-video overflow-hidden bg-cover bg-center">
                            <a href="https://www.hackerrank.com/arshadshirgave">
                                <img
                                    src={ha}
                                //    onClick={handleClick(1)}
                                   // className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
                                />
                                </a>
                            </div>
                            <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                                HackerRank
                            </div>
                        </div>
                        <div
                            key={4}
                            className="flex flex-col gap-4 cursor-pointer"
                        >
                            <div className="bg-black rounded-[10px] aspect-video overflow-hidden bg-cover bg-center">
                            <a href="https://github.com/arshu78">
                                <img
                                    src={git}
                                //    onClick={handleClick(1)}
                                   // className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
                                />
                                </a>
                            </div>
                            <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                                Github
                            </div>
                        </div>
                   
            </div>
    </div>
  )
}

export default Profiles
