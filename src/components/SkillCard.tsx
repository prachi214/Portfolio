import { Avatar } from '@mantine/core';

const SkillBadge = (skills: []) => {
  return skills.map((skill: any, index: number) => (
    <div
      key={index}
      className="flex gap-2 border border-textColor py-1.5 px-3 rounded-2xl items-center"
    >
      <Avatar className="!w-[20px] sm:!w-[24px] !p-0.5 sm:!p-1" variant="transparent" radius="xs" src={`/Icons/${skill}.png`} />
      <div className="text-textColor text-sm sm:text-base md:text-lg font-medium">
        {skill}
      </div>
    </div>
  ));
};

const SkillCard = (props: any) => {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
      className="w-full sm:w-[48%] lg:w-[32%] shadow-[0_0_10px_0_#64FFDA40] rounded-2xl border border-primaryColor p-4 sm:p-5"
    >
      <div className="text-xl sm:text-2xl mb-4 text-white text-center font-bold">
        {props.title}
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {SkillBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillCard;
