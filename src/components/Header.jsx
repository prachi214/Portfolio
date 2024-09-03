import { IconHexagonLetterP} from '@tabler/icons-react';
import Sidebar from './SideBar';
import { useEffect, useState } from 'react';
const links=["About", "Skills","Projects", "Contact"];
const navLinks=(col:Boolean,clicked:any)=>{
const handleClick=()=>{
  if (clicked) {
    clicked();
  }
}
  return links.map((link, index)=>{
    return <a key={index}  onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-textColor text-ld font-mono hover:text-primaryColor`} href={`#${link}`} underline="never">
<span className='text-primaryColor'>0{index+1}. </span>{link}
      </a>
  })
}
const Header=()=>{
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
 
    const controlNavbar = () =>{
      if (window.scrollY>lastScrollY && window.scrollY>70) {
        setShow(false)
      } 
      else setShow(true) ;

   
      setLastScrollY(window.scrollY)
    }
    useEffect(()=>{
      window.addEventListener('scroll',controlNavbar);
      return ()=>window.removeEventListener('scroll', controlNavbar);
    })
    return(
<nav className={`flex ${show?"":"hidden"}  fixed w-full z-10 bg-bgColor h-[15vh] px-10   justify-between items-center`}>

    <IconHexagonLetterP  className="z-40" size={68} color='#64FFDA' stroke={1.25}/>
    <div className="md:flex gap-8 hidden">
{navLinks()}
    </div>
    <Sidebar/>
</nav>
    );
}

export default Header;
export {navLinks}