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
          //dot iske reason
                // spacing: 20,
              
            }))
        }
//         if (!trunk) {
//             setTrunk(TRUNK({
//                 el: "#photo",
//                 mouseControls: true,
//                 touchControls: true,
//                 gyroControls: false,
//                 minHeight: 200.00,
//                 minWidth: 200.00,
//                 scale: 1.00,
            
//                 scaleMobile: 1.00,
//                 color: 0x64FFDA,
//                 backgroundColor: 0x112240,
// // spacing: 20,
// chaos: 0.10
//               })
//             )
//         }
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
        <div data-aos="zoom-out-up" data-aos-duration="800"  className="mt-28 flex relative overflow-hidden  items-center font-mono px-16 py-10 h-fit" id="About">
        <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color="#64FFDA"
        vx={0.2}
        vy={0.2}
        refresh
      />
            <div className="ml-20 w-3/6 flex flex-col">
                <div className=" text-primaryColor text-3xl">Hii, I am</div>
                <div className="text-white text-[4.25rem] font-extrabold">{Info.name}</div>
                {/* <div></div> */}
                <div className="text-white text-4xl flex font-semibold">I'm a&nbsp;<span className="text-primaryColor"><Typewriter
  options={{
    strings: Info.stack,
    autoStart: true,
    loop: true,
  }}
                /></span></div>
                <div className="text-textColor  text-xl text-justify my-8 font-semibold">{Info.bio}</div>
<div className="flex gap-3">


                <Button onClick={open} className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">Check Resume</Button>
                <Button component="a"  href="/resume-document.pdf" download={Info.name}  className="!text-primaryColor !w-fit" size="lg" variant="outline" color="#64FFDA"  rightSection={<IconDownload size={20} />}>Download</Button>
                </div>
            </div>
            <div className=" h-fit flex justify-center items-center rounded-full -right-40  w-fit ml-16"   id="photo">
            <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center !mt-20">
<img className=" w-full h-full !z-10 rounded-full "   rounded-full src="/resumep.jpg" alt="profile"/>
</NeonGradientCard>
            </div>

           
        </div>
        <ResumeViewer opened={opened} close={close}/>
        </>



    )
}
export default About;