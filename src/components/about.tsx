import { useState, useEffect } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Info } from "../user";
import { Button } from '@mantine/core';


import { IconDownload} from '@tabler/icons-react';
import Particles from "./magicui/particals";


import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import ResumeViewer from "./resumeViewer";
import { NeonGradientCard } from"./magicui/neon-gradient-card";

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    // yaha type any diya so ye effect work kare
    const [dots, setDots] = useState<any>(null)
 const [trunk, setTrunk]= useState<any>(null)
    useEffect(() => {
        if (!dots) {
            setDots(DOTS({
                el: "#bg",

                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x64FFDA,
                color2: 0x204aff,
                // opacity 0 ki background color ko universal compatible banane ke liye
                backgroundColor:0x112240,
                size: 0.2,
             spacing:0.01,
                showLines:false,

              
            }))
        }

        return () => {
       
            // preventing memory overflow
            if (dots) dots.destroy();
            if (trunk) {
                trunk.destroy();
            }
        }
    }, [])
    return (
        <>
        <div data-aos="zoom-out-up" data-aos-duration="800" className="mt-28 flex  lg-mx:flex-wrap lg-mx:flex-col-reverse justify-around items-center font-mono px-10 py-10 h-fit lg-mx:justify-between xs:gap-4" id="About">
            <Particles
                className="absolute inset-0"
                quantity={1000}
                ease={80}
                color="#64FFDA"
                vx={0.2}
                vy={0.2}
                refresh
            />
            <div className="lg:w-3/6  flex flex-col text-center lg:text-left lg:ml-20 gap-3">
                <div className="text-primaryColor text-3xl lg-mx:text-2xl  xs:text-lg">Hii, I am</div>
                <div className="text-white text-4xl lg:text-5xl xs:text-2xl font-extrabold">{Info.name}</div>
                <div className="text-white text-4xl flex font-semibold lg:text-xl  lg-mx:justify-center  xs:text-lg">
                    I'm a&nbsp;
                    <span className="text-primaryColor">
                        <Typewriter
                            options={{
                                strings: Info.stack,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div>
                <div className="text-textColor text-lg lg:text-base xs:text-sm my-8 lg:my-0 font-semibold">{Info.bio}</div>
                <div className="flex gap-3 justify-center lg:justify-start">
                    <Button onClick={open} className="!text-bgColor" size="lg" variant="filled" color="#64FFDA">Check Resume</Button>
                    <Button component="a" href="/resume-document.pdf" download={Info.name} className="!text-primaryColor" size="lg" variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>Download</Button>
                </div>
            </div>
            <div className="flex justify-center items-center mr-9 rounded-full w-[325px] lg:w-64 h-[325px] lg:h-64 lg:ml-28 mt-8 lg:mt-0" id="photo">
                <NeonGradientCard className="w-full h-full flex items-center justify-center rounded-full">
                    <img className="w-full h-full rounded-full" src="/resumep.jpg" alt="profile"/>
                </NeonGradientCard>
            </div>
        </div>
        <ResumeViewer opened={opened} close={close} />
        </>



    )
}
export default About;