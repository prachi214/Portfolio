import { useState, useEffect } from "react";
import { Info } from "../user";
import { Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import Particles from "./magicui/particals";
import DOTS from "vanta/src/vanta.dots";
import Typewriter from "typewriter-effect";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const About = () => {
  const [dots, setDots] = useState<any>(null);

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
        backgroundColor: 0x112240,
        size: 0.2,
        spacing: 0.01,
        showLines: false,
      }));
    }
    return () => { if (dots) dots.destroy(); };
  }, []);

  const handleResumeRequest = () => {
    window.location.href = `mailto:prachipatel5441@gmail.com?subject=Resume Access Request&body=Hi, I would like to request access to your resume.`;
  };

  return (
    <>
      <div className="mt-28 flex flex-col-reverse lg:flex-row justify-around items-center font-mono px-6 sm:px-10 py-10 gap-6" id="About">
        <Particles className="absolute inset-0" quantity={1000} ease={80} color="#64FFDA" vx={0.2} vy={0.2} refresh />
        <div className="lg:w-3/6 flex flex-col text-center lg:text-left gap-3">
          <div className="text-primaryColor text-2xl sm:text-3xl">Hii, I am</div>
          <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">{Info.name}</div>
          <div className="text-white text-2xl sm:text-3xl lg:text-4xl flex justify-center lg:justify-start font-semibold">
            I'm a&nbsp;
            <span className="text-primaryColor">
              <Typewriter options={{ strings: Info.stack, autoStart: true, loop: true }} />
            </span>
          </div>
          <div className="text-textColor text-base sm:text-lg lg:text-xl my-6 font-semibold">{Info.bio}</div>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Button onClick={handleResumeRequest} className="!text-bgColor" size="lg" variant="filled" color="#64FFDA">
              Check Resume
            </Button>
            <Button onClick={handleResumeRequest} className="!text-primaryColor" size="lg" variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>
              Download
            </Button>
          </div>
        </div>


        <div className="relative w-64 sm:w-72 md:w-80 lg:w-[325px] h-64 sm:h-72 md:h-80 lg:h-[325px] flex justify-center items-center rounded-full mt-6 lg:mt-0 z-0">
  <NeonGradientCard className="w-full h-full flex items-center justify-center rounded-full">
    <img className="w-full h-full rounded-full object-cover" src="/resumep.jpg" alt="profile" />
  </NeonGradientCard>
</div>

      </div>
    </>
  );
};

export default About;
