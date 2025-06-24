import { IconHexagonLetterP } from '@tabler/icons-react';
import Sidebar from './SideBar';
import { useEffect, useState } from 'react';

const links = ["About", "Skills", "Projects", "Contact"];

const navLinks = (col: boolean = false, clicked?: () => void) => {
  const handleClick = () => {
    if (clicked) clicked();
  };

  return links.map((link, index) => (
    <a
      key={index}
      onClick={handleClick}
      className={`${col ? 'flex flex-col items-center' : ''} text-textColor text-base sm:text-lg font-mono hover:text-primaryColor`}
      href={`#${link}`}
    >
      <span className="text-primaryColor">0{index + 1}. </span>{link}
    </a>
  ));
};

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-10 bg-bgColor px-6 sm:px-10 h-[12vh] flex justify-between items-center transition-all duration-300 ${show ? "" : "hidden"}`}>
      <IconHexagonLetterP 
        className="z-40 w-10 h-10 sm:w-16 sm:h-16"
        color="#64FFDA" 
        stroke={1.25}
      />
      <div className="hidden md:flex gap-4 sm:gap-8">
        {navLinks()}
      </div>
      <Sidebar />
    </nav>
  );
};

export default Header;
export { navLinks };
