import React from "react";
import Bus2 from "../../../assets/buspraveen.png"
import {animate, motion} from "framer-motion"
const Hero = () =>
{
    const imageVariants={
        initial:{
            x:"100%",
        },
        animate:{
            x:"3%",
            transition:{
                duration:3,
                ease:"easeInOut",
            }
        }
    }
    return(
        <div className='w-full h-[calc(100vh-8ch)] lg:ps-20 md:ps-16 sm:ps-7 ps-4  flex items-center justify-center flex-col hero relative'>
                <div className="flex-1 w-full flex items-stretch justify-between gap-10">
                    <motion.dev className="w-[35%] h-55 rounded-md flex justify-center flex-col space-y-14"
                    initial={{opacity:0,y:-10}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:0.5,ease:'linear',delay:0.5}}>
                        <motion.dev className='space-y-5'
                            initial={{opacity:0,y:-10}}
                            animate={{opacity:1,y:0}}
                            transition={{duration:1,ease:'linear',delay:0.5}}
                        >
                            <motion.h1 className="text-5xl font-bold text-neutral-50 leading-[1.15]"
                            initial={{opacity:0,y:-10}}
                            animate={{opacity:1,y:0}}
                            transition={{duration:2,ease:'linear',delay:0.4}} >

                            Reserve Your Bus
                            <span className="text-violet-400 tracking-wider">Tickets</span>
                            Now

                            </motion.h1>
                            <motion.p className="text-lg font-normal text-neutral-300 line -clamp-3 text-ellipsis"
                            initial={{opacity:0,y:-10}}
                            animate={{opacity:1,y:0}}
                            transition={{duration:2,ease:'linear',delay:0.6}} >

                            Find and book your bus tickets with just a few clicks. we offer  a wide range of bus routes and schedules to suit your needs.
                            <span className="text-violet-400 tracking-wider">Tickets</span>
                            Now
                            </motion.p>
                        </motion.dev>

                        <motion.button className="w-fit bg violet -800 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300">
                            Reserve Seat Now
                        </motion.button>

                    </motion.dev>
                    <div className="w-[20%].rounded-md flex align-items-end.justify-end absolute.top-12 -right-48">
                        <motion.img 
                        className="w-full aspect-lg-[9/3] md-16*9 object contain mt-40" 
                        src={Bus2}
                        alt="bus img"
                        initial="initial"
                        animate="animate"
                        variants={imageVariants}
                        ></motion.img>
                    </div>
                </div>
        </div>
    )
}
export default Hero;