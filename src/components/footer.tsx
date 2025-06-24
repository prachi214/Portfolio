import { Info } from "../user";

const Footer = () => {
  return (
    <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-36 mt-10 mb-8 font-mono flex flex-col gap-2 items-center text-center" id="Footer">
      <div className="text-2xl sm:text-3xl text-primaryColor font-semibold">{Info.name}</div>
      <div className="text-sm sm:text-base text-textColor">
        Copyright &copy; {new Date().getFullYear()} {Info.name} | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
