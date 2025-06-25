
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Social = () => {
  const socialLinks = [
    { link: "https://github.com/prachi214", icon: IconBrandGithub },
    {
      link: "https://www.linkedin.com/in/prachi-patel-397704234/",
      icon: IconBrandLinkedin,
    },
    { link: "https://leetcode.com/u/prachi105/", icon: IconBrandLeetcode },
  ];

  return (
    <>
      {/* Desktop view (fixed left) */}
      <div className="hidden md:flex text-textColor items-center gap-10 fixed bottom-40 -left-32 rotate-90 z-50">
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
          >
            <div data-aos="fade-up-left" data-aos-duration="800">
              <item.icon className="-rotate-90" size={30} />
            </div>
          </a>
        ))}
        <hr className="border-[2px] rounded-full w-40 text-textColor bg-textColor border-textColor" />
      </div>

{/* Mobile view (bottom block) */}
<div className="flex md:hidden flex-col items-center gap-4 mt-10 mb-6">
  <p className="text-center text-white font-mono text-sm font-semibold">
    Connect with me:
  </p>
  <div className="flex gap-6">
    {socialLinks.map((item, idx) => (
      <a
        key={idx}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-textColor hover:text-primaryColor transition-transform transform hover:scale-110"
      >
        <item.icon size={28} />
      </a>
    ))}
  </div>
</div>

    </>
  );
};

export default Social;

