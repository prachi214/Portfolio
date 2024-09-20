import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";

const Social=()=>{
    const socialLinks = [{link:"https://github.com/prachi214",icon:IconBrandGithub}, {link:"https://www.linkedin.com/in/prachi-patel-397704234/",icon:IconBrandLinkedin},{link:"https://leetcode.com/u/prachi105/",icon:IconBrandLeetcode}];
    const socialIcons= socialLinks.map((socialLinks)=>{
        return     <a href={`${socialLinks.link}`} target="_blank" className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
            <div data-aos="fade-up-left" data-aos-duration="800">
      
            <socialLinks.icon className="-rotate-90" size={30}/>
            </div>
   
       </a>
    })
    return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-40 -left-32 rotate-90">
{socialIcons}
    <hr className="border-[2px] rounded-full w-40 text-textColor bg-textColor border-textColor" />
</div>
}

export default Social;
