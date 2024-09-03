import ProjectCards from "./projectCards";
import { ProjectInfo } from "../user";

const Projects=()=>{
return(
<div className='px-16 mx-20 my-10 font-mono' id="Projects">
    <h1 className='text-4xl text-center mb-8 mt-5 font-bold text-white '><span className='text-primaryColor'>02. &nbsp;</span>Projects</h1>
    <div className="flex flex-wrap justify-evenly gap-4">
        {
ProjectInfo.map((project:any, index:number)=><ProjectCards key={index} title={project.title} description={project.description} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies} />)
        }

    </div>
</div>
)
}
export default Projects;