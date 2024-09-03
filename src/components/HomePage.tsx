import About from "./about";
import Header from "./Header";
import Mail from "./Mail";
import Social from "./Social";
import Projects from "./projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./footer";
import { Loader } from "./loader";
import { useEffect,useState } from "react";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000) 
    }, [])
    return <div className={`min-h-[100vh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
{   loading!==true?<>
  
        <Header />
        <About />
        <Projects />
        <Skills />
    
        <Contact />
        <Footer/>
        <Mail />
        <Social />
        </>:
        <Loader/>}
    </div>
};
export default HomePage;




