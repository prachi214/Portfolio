import { SkillInfo } from "../user";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 my-10 font-mono" id="Skills">
      <h1 className="text-3xl sm:text-4xl mb-6 font-bold text-center text-white">
        <span className="text-primaryColor">03.&nbsp;</span>Skills
      </h1>
      <div className="flex flex-wrap gap-4 sm:gap-5 justify-center lg:justify-between">
        {
          SkillInfo.map((skill: any, index: number) => (
            <SkillCard key={index} title={skill.title} skills={skill.skills} />
          ))
        }
      </div>
    </div>
  );
};

export default Skills;
